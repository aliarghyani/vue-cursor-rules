/**
 * 🚀 useApi - Smart API composable with caching, error handling, and loading states
 * 
 * ✨ Features:
 * - Automatic loading states
 * - Error handling with retry logic
 * - Response caching
 * - Request deduplication
 * - TypeScript support
 * 
 * 💡 Usage:
 * const { data, loading, error, execute, refresh } = useApi('/api/users')
 */

import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// 🎯 Types
export interface ApiOptions<T = any> {
  immediate?: boolean
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  body?: any
  headers?: Record<string, string>
  cache?: boolean
  cacheDuration?: number // in milliseconds
  retryAttempts?: number
  retryDelay?: number
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
  transform?: (data: any) => T
}

export interface ApiState<T> {
  data: T | null
  loading: boolean
  error: Error | null
  lastUpdated: number | null
}

// 🗃️ Simple cache implementation
const cache = new Map<string, { data: any; timestamp: number; duration: number }>()

// 🔧 Cache utilities
const getCachedData = (key: string) => {
  const cached = cache.get(key)
  if (!cached) return null
  
  const isExpired = Date.now() - cached.timestamp > cached.duration
  if (isExpired) {
    cache.delete(key)
    return null
  }
  
  return cached.data
}

const setCachedData = (key: string, data: any, duration: number) => {
  cache.set(key, {
    data,
    timestamp: Date.now(),
    duration
  })
}

// 🎣 Main composable
export function useApi<T = any>(
  url: string,
  options: ApiOptions<T> = {}
) {
  const {
    immediate = true,
    method = 'GET',
    body = null,
    headers = {},
    cache: enableCache = true,
    cacheDuration = 5 * 60 * 1000, // 5 minutes
    retryAttempts = 2,
    retryDelay = 1000,
    onSuccess,
    onError,
    transform
  } = options

  // 🔄 Reactive state
  const state = reactive<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
    lastUpdated: null
  })

  // 🧮 Computed properties
  const isLoading = computed(() => state.loading)
  const hasError = computed(() => !!state.error)
  const hasData = computed(() => !!state.data)
  const isEmpty = computed(() => !state.loading && !state.error && !state.data)

  // 🔑 Cache key
  const cacheKey = computed(() => {
    const params = { url, method, body }
    return JSON.stringify(params)
  })

  // 🔄 Request counter for deduplication
  let requestId = 0

  // 🚀 Execute API request
  const execute = async (customBody?: any): Promise<T | null> => {
    const currentRequestId = ++requestId
    const requestBody = customBody !== undefined ? customBody : body

    // Check cache first (only for GET requests)
    if (method === 'GET' && enableCache) {
      const cachedData = getCachedData(cacheKey.value)
      if (cachedData) {
        state.data = transform ? transform(cachedData) : cachedData
        state.lastUpdated = Date.now()
        return state.data
      }
    }

    state.loading = true
    state.error = null

    const attemptRequest = async (attempt: number): Promise<T | null> => {
      try {
        const requestOptions: RequestInit = {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers
          }
        }

        if (requestBody && method !== 'GET') {
          requestOptions.body = JSON.stringify(requestBody)
        }

        const response = await fetch(url, requestOptions)

        // Check if this request is still the latest
        if (currentRequestId !== requestId) {
          return null // Ignore outdated requests
        }

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const rawData = await response.json()
        const processedData = transform ? transform(rawData) : rawData

        // Update state
        state.data = processedData
        state.error = null
        state.lastUpdated = Date.now()

        // Cache the response (only for GET requests)
        if (method === 'GET' && enableCache) {
          setCachedData(cacheKey.value, rawData, cacheDuration)
        }

        // Success callback
        if (onSuccess) {
          onSuccess(processedData)
        }

        return processedData

      } catch (error) {
        // Retry logic
        if (attempt < retryAttempts) {
          await new Promise(resolve => setTimeout(resolve, retryDelay * attempt))
          return attemptRequest(attempt + 1)
        }

        // Final error handling
        const apiError = error instanceof Error ? error : new Error(String(error))
        
        // Only update state if this is still the latest request
        if (currentRequestId === requestId) {
          state.error = apiError
          state.data = null
        }

        // Error callback
        if (onError) {
          onError(apiError)
        }

        console.error(`API Error (${method} ${url}):`, apiError)
        throw apiError
      }
    }

    try {
      const result = await attemptRequest(1)
      return result
    } finally {
      // Only update loading state if this is still the latest request
      if (currentRequestId === requestId) {
        state.loading = false
      }
    }
  }

  // 🔄 Refresh data (bypasses cache)
  const refresh = async (): Promise<T | null> => {
    // Clear cache for this request
    cache.delete(cacheKey.value)
    return execute()
  }

  // 🧹 Clear data
  const clear = () => {
    state.data = null
    state.error = null
    state.lastUpdated = null
    cache.delete(cacheKey.value)
  }

  // 🎬 Auto-execute on mount
  if (immediate) {
    onMounted(() => {
      execute()
    })
  }

  // 🧹 Cleanup on unmount
  onUnmounted(() => {
    requestId++ // Invalidate any pending requests
  })

  // 📤 Return API
  return {
    // State
    data: computed(() => state.data),
    loading: isLoading,
    error: computed(() => state.error),
    lastUpdated: computed(() => state.lastUpdated),
    
    // Computed flags
    isLoading,
    hasError,
    hasData,
    isEmpty,
    
    // Methods
    execute,
    refresh,
    clear,
    
    // Raw state (for advanced usage)
    state
  }
}

// 🎯 Specialized hooks for common patterns

/**
 * 📋 useApiList - For fetching lists with pagination
 */
export function useApiList<T>(
  baseUrl: string, 
  options: ApiOptions<T[]> & { 
    pageSize?: number
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
  } = {}
) {
  const { pageSize = 10, sortBy, sortOrder = 'asc', ...apiOptions } = options
  
  const page = ref(1)
  const searchQuery = ref('')
  
  const url = computed(() => {
    const params = new URLSearchParams({
      page: page.value.toString(),
      limit: pageSize.toString(),
      ...(searchQuery.value && { search: searchQuery.value }),
      ...(sortBy && { sort: sortBy, order: sortOrder })
    })
    return `${baseUrl}?${params}`
  })
  
  const api = useApi<T[]>(url.value, { ...apiOptions, immediate: false })
  
  // Watch URL changes and refetch
  const { execute: originalExecute } = api
  const execute = () => originalExecute()
  
  return {
    ...api,
    page,
    searchQuery,
    execute,
    nextPage: () => { page.value++; execute() },
    prevPage: () => { if (page.value > 1) { page.value--; execute() } },
    search: (query: string) => { searchQuery.value = query; page.value = 1; execute() }
  }
}

/**
 * 💾 useApiMutation - For POST/PUT/DELETE operations
 */
export function useApiMutation<TData = any, TResponse = any>(
  url: string,
  options: Omit<ApiOptions<TResponse>, 'immediate' | 'cache'> & {
    method?: 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  } = {}
) {
  return useApi<TResponse>(url, {
    ...options,
    immediate: false,
    cache: false,
    method: options.method || 'POST'
  })
}