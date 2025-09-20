<!--
🎯 Example: Using the useApi composable
📝 This shows practical usage for data fetching with Vue 3
-->

<template>
  <div class="p-6">
    <!-- User List Example -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Users List</h2>
      
      <!-- Loading State -->
      <div v-if="usersApi.isLoading.value" class="flex items-center justify-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span class="ml-2">Loading users...</span>
      </div>
      
      <!-- Error State -->
      <div v-else-if="usersApi.hasError.value" class="bg-red-50 border border-red-200 rounded-md p-4">
        <h3 class="text-red-800 font-medium">Error loading users</h3>
        <p class="text-red-600 text-sm mt-1">{{ usersApi.error.value?.message }}</p>
        <button 
          @click="usersApi.refresh()"
          class="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
      
      <!-- Success State -->
      <div v-else-if="usersApi.hasData.value">
        <div class="flex justify-between items-center mb-4">
          <p class="text-gray-600">{{ usersApi.data.value?.length }} users found</p>
          <button 
            @click="usersApi.refresh()"
            class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
        
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="user in usersApi.data.value" 
            :key="user.id"
            class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <h3 class="font-medium text-gray-900">{{ user.name }}</h3>
            <p class="text-gray-600 text-sm">{{ user.email }}</p>
            <p class="text-gray-500 text-xs mt-2">{{ user.company.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Create User Form -->
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Create New User</h2>
      
      <form @submit.prevent="handleCreateUser" class="max-w-md space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            v-model="newUser.name"
            type="text" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            v-model="newUser.email"
            type="email" 
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button 
          type="submit"
          :disabled="createUserMutation.isLoading.value"
          class="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
        >
          {{ createUserMutation.isLoading.value ? 'Creating...' : 'Create User' }}
        </button>
        
        <!-- Create User Error -->
        <div v-if="createUserMutation.hasError.value" class="text-red-600 text-sm">
          Error: {{ createUserMutation.error.value?.message }}
        </div>
      </form>
    </section>

    <!-- Paginated List Example -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Posts (Paginated)</h2>
      
      <!-- Search -->
      <div class="mb-4">
        <input 
          v-model="searchQuery"
          @input="handleSearch"
          type="text"
          placeholder="Search posts..."
          class="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <!-- Posts List -->
      <div v-if="postsApi.hasData.value" class="space-y-4">
        <article 
          v-for="post in postsApi.data.value" 
          :key="post.id"
          class="bg-white border border-gray-200 rounded-lg p-4"
        >
          <h3 class="font-medium text-gray-900 mb-2">{{ post.title }}</h3>
          <p class="text-gray-600 text-sm">{{ post.body }}</p>
        </article>
        
        <!-- Pagination -->
        <div class="flex justify-between items-center mt-6">
          <button 
            @click="postsApi.prevPage()"
            :disabled="postsApi.page.value === 1"
            class="px-3 py-1 bg-gray-600 text-white rounded text-sm disabled:opacity-50"
          >
            Previous
          </button>
          
          <span class="text-gray-600">Page {{ postsApi.page.value }}</span>
          
          <button 
            @click="postsApi.nextPage()"
            :disabled="!postsApi.data.value || postsApi.data.value.length < 10"
            class="px-3 py-1 bg-gray-600 text-white rounded text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// Note: Import your useApi composable here
// import { useApi, useApiList, useApiMutation } from '@/composables/useApi'

// 🔧 For this example, we'll simulate the composable
// In real usage, uncomment the import above

// 🎯 Types
interface User {
  id: number
  name: string
  email: string
  company: { name: string }
}

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

// 📋 Reactive Data
const newUser = reactive({
  name: '',
  email: ''
})

const searchQuery = ref('')

// 🚀 API Calls
// Fetch users list
const usersApi = useApi<User[]>('https://jsonplaceholder.typicode.com/users', {
  transform: (data: any[]) => data.slice(0, 6), // Limit to 6 users for demo
  onSuccess: (data) => {
    console.log('Users loaded:', data.length)
  },
  onError: (error) => {
    console.error('Failed to load users:', error)
  }
})

// Create user mutation
const createUserMutation = useApiMutation<typeof newUser, User>(
  'https://jsonplaceholder.typicode.com/users',
  {
    method: 'POST',
    onSuccess: (user) => {
      console.log('User created:', user)
      // Clear form
      newUser.name = ''
      newUser.email = ''
      // Refresh users list
      usersApi.refresh()
    }
  }
)

// Paginated posts
const postsApi = useApiList<Post>(
  'https://jsonplaceholder.typicode.com/posts',
  {
    pageSize: 5,
    sortBy: 'id',
    sortOrder: 'desc'
  }
)

// 🎮 Event Handlers
const handleCreateUser = async () => {
  try {
    await createUserMutation.execute(newUser)
  } catch (error) {
    // Error handling is done in the composable
  }
}

const handleSearch = debounce((e: Event) => {
  const query = (e.target as HTMLInputElement).value
  postsApi.search(query)
}, 300)

// 🔧 Utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Initialize paginated posts
postsApi.execute()
</script>

<!--
💡 Key Features Demonstrated:

1. **Automatic Loading States**: Loading, error, and success states are handled automatically
2. **Error Handling**: Comprehensive error display with retry functionality
3. **Caching**: GET requests are cached automatically (5-minute default)
4. **Request Deduplication**: Multiple requests to the same endpoint are deduplicated
5. **Mutation Handling**: POST/PUT/DELETE operations with separate error handling
6. **Pagination**: Built-in pagination support with search functionality
7. **TypeScript**: Full type safety throughout the application

🎯 Real-World Usage Tips:

1. **Error Boundaries**: Wrap components in error boundaries for better UX
2. **Loading Skeletons**: Replace loading spinners with skeleton screens
3. **Optimistic Updates**: Update UI immediately, rollback on error
4. **Background Refresh**: Refresh data in the background when user returns
5. **Offline Support**: Cache responses for offline functionality

🔧 Customization Examples:

// Custom transform function
const usersApi = useApi('/api/users', {
  transform: (data) => data.map(user => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName}`
  }))
})

// Custom retry logic
const criticalApi = useApi('/api/critical-data', {
  retryAttempts: 5,
  retryDelay: 2000,
  onError: (error) => {
    // Send to error reporting service
    errorReporting.captureException(error)
  }
})

// Cache configuration
const staticDataApi = useApi('/api/config', {
  cache: true,
  cacheDuration: 30 * 60 * 1000, // 30 minutes
  immediate: true
})
-->