/**
 * 👤 User Store - Complete user management with Pinia
 * 
 * ✨ Features:
 * - User authentication (login/logout/register)
 * - Profile management
 * - Permissions and roles
 * - Persistent storage
 * - API integration
 * - Type safety
 * 
 * 💡 Usage:
 * const userStore = useUserStore()
 * await userStore.login(credentials)
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 🎯 Types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'user' | 'moderator'
  permissions: string[]
  createdAt: string
  lastLoginAt: string | null
  isEmailVerified: boolean
  preferences: {
    theme: 'light' | 'dark' | 'system'
    language: string
    notifications: {
      email: boolean
      push: boolean
      sms: boolean
    }
  }
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface UpdateProfileData {
  name?: string
  avatar?: string
  preferences?: Partial<User['preferences']>
}

// 🏪 Store Definition
export const useUserStore = defineStore('user', () => {
  // 🔄 State
  const currentUser = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const authToken = ref<string | null>(null)

  // 🧮 Computed
  const isAuthenticated = computed(() => !!currentUser.value && !!authToken.value)
  const isAdmin = computed(() => currentUser.value?.role === 'admin')
  const isModerator = computed(() => 
    currentUser.value?.role === 'admin' || currentUser.value?.role === 'moderator'
  )
  
  const userName = computed(() => currentUser.value?.name || 'Guest')
  const userInitials = computed(() => {
    if (!currentUser.value?.name) return 'G'
    return currentUser.value.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  })

  const hasPermission = computed(() => (permission: string) => {
    return currentUser.value?.permissions.includes(permission) || false
  })

  // 🔧 Actions
  const login = async (credentials: LoginCredentials): Promise<void> => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Login failed')
      }

      const data = await response.json()
      
      // Store user data and token
      currentUser.value = data.user
      authToken.value = data.token

      // Persist to localStorage if remember me
      if (credentials.rememberMe) {
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
      } else {
        sessionStorage.setItem('authToken', data.token)
        sessionStorage.setItem('user', JSON.stringify(data.user))
      }

      // Set default axios header for future requests
      setAuthHeader(data.token)

    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Login failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const register = async (userData: RegisterData): Promise<void> => {
    isLoading.value = true
    error.value = null

    try {
      if (userData.password !== userData.confirmPassword) {
        throw new Error('Passwords do not match')
      }

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          password: userData.password
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Registration failed')
      }

      const data = await response.json()
      
      // Auto-login after successful registration
      currentUser.value = data.user
      authToken.value = data.token
      
      sessionStorage.setItem('authToken', data.token)
      sessionStorage.setItem('user', JSON.stringify(data.user))
      
      setAuthHeader(data.token)

    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Registration failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = async (): Promise<void> => {
    isLoading.value = true

    try {
      // Call logout endpoint
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken.value}`,
        }
      })
    } catch (err) {
      console.warn('Logout API call failed:', err)
    } finally {
      // Clear local state regardless of API call result
      currentUser.value = null
      authToken.value = null
      error.value = null

      // Clear storage
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      sessionStorage.removeItem('authToken')
      sessionStorage.removeItem('user')

      // Clear auth header
      setAuthHeader(null)
      
      isLoading.value = false
    }
  }

  const updateProfile = async (updates: UpdateProfileData): Promise<void> => {
    if (!currentUser.value) throw new Error('Not authenticated')

    isLoading.value = true
    error.value = null

    try {
      const response = await fetch('/api/user/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken.value}`,
        },
        body: JSON.stringify(updates)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Profile update failed')
      }

      const updatedUser = await response.json()
      currentUser.value = updatedUser

      // Update stored user data
      const storage = localStorage.getItem('authToken') ? localStorage : sessionStorage
      storage.setItem('user', JSON.stringify(updatedUser))

    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Profile update failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const refreshUserData = async (): Promise<void> => {
    if (!authToken.value) return

    isLoading.value = true

    try {
      const response = await fetch('/api/user/me', {
        headers: {
          'Authorization': `Bearer ${authToken.value}`,
        }
      })

      if (!response.ok) {
        throw new Error('Failed to refresh user data')
      }

      const userData = await response.json()
      currentUser.value = userData

      // Update stored user data
      const storage = localStorage.getItem('authToken') ? localStorage : sessionStorage
      storage.setItem('user', JSON.stringify(userData))

    } catch (err) {
      console.error('Failed to refresh user data:', err)
      // Don't throw error - just log it
    } finally {
      isLoading.value = false
    }
  }

  const checkPermission = (permission: string): boolean => {
    return hasPermission.value(permission)
  }

  const initializeAuth = (): void => {
    // Try to restore auth from storage
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken')
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user')

    if (token && userStr) {
      try {
        const user = JSON.parse(userStr)
        currentUser.value = user
        authToken.value = token
        setAuthHeader(token)

        // Refresh user data in background
        refreshUserData()
      } catch (err) {
        console.error('Failed to restore auth from storage:', err)
        logout()
      }
    }
  }

  const clearError = (): void => {
    error.value = null
  }

  // 🔧 Helper function
  const setAuthHeader = (token: string | null): void => {
    // This would typically set the default Authorization header for your HTTP client
    // Example with axios:
    // if (token) {
    //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // } else {
    //   delete axios.defaults.headers.common['Authorization']
    // }
  }

  // 📤 Return store API
  return {
    // State
    currentUser: readonly(currentUser),
    isLoading: readonly(isLoading),
    error: readonly(error),
    
    // Computed
    isAuthenticated,
    isAdmin,
    isModerator,
    userName,
    userInitials,
    hasPermission,
    
    // Actions
    login,
    register,
    logout,
    updateProfile,
    refreshUserData,
    checkPermission,
    initializeAuth,
    clearError
  }
})

// 🔧 Utility types for external use
export type UserStore = ReturnType<typeof useUserStore>