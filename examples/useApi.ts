/**
 * Enhanced API Composable with shared types
 * Uses ApiResponse<T> for consistent API handling and type safety
 */
import { ref, readonly } from 'vue'
import type { ApiResponse, ApiError } from '../types'

export function useApi<T>(url: string) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<ApiError | null>(null)
  
  const execute = async (): Promise<ApiResponse<T>> => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const result: ApiResponse<T> = await response.json()
      data.value = result.data
      return result
    } catch (err) {
      const apiError: ApiError = {
        code: 'API_ERROR',
        message: err instanceof Error ? err.message : 'Unknown error occurred'
      }
      error.value = apiError
      return {
        data: null as T,
        message: apiError.message,
        success: false,
        timestamp: new Date().toISOString()
      }
    } finally {
      loading.value = false
    }
  }
  
  const reset = () => {
    data.value = null
    error.value = null
    loading.value = false
  }
  
  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    execute,
    reset
  }
}

// Usage example with shared types:
// import { User } from '../types'
// const { data, loading, error, execute } = useApi<User[]>('/api/users')
// const response = await execute() // Returns ApiResponse<User[]>