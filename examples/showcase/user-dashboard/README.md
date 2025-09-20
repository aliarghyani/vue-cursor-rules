# 📱 User Dashboard Example

A complete, production-ready user dashboard demonstrating Vue 3 best practices with authentication, profile management, and responsive design.

## 🎯 What You'll Learn

- ✅ User authentication with JWT tokens
- ✅ Protected routes and navigation guards
- ✅ Form validation and error handling
- ✅ Responsive design with Tailwind CSS
- ✅ State management with Pinia
- ✅ API integration patterns
- ✅ Accessibility compliance
- ✅ Performance optimization

## 🚀 Features

### 🔐 Authentication System
- Login/logout functionality
- JWT token management
- Protected route guards
- Session persistence
- Automatic token refresh

### 👤 Profile Management
- View and edit user profile
- Avatar upload with preview
- Form validation
- Real-time updates
- Error handling

### 📊 Dashboard Overview
- User statistics cards
- Recent activity timeline
- Quick action buttons
- Responsive grid layout
- Dark/light theme support

### 🔔 Notifications
- Real-time notifications
- Toast messages
- Notification center
- Mark as read functionality
- Notification preferences

## 🛠️ Technology Stack

- **Vue 3** - Composition API + `<script setup>`
- **TypeScript** - Full type safety
- **Pinia** - State management
- **Vue Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **Vitest** - Unit testing
- **Playwright** - E2E testing

## 📁 Project Structure

```
user-dashboard/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── auth/           # Authentication components
│   │   ├── profile/        # Profile management
│   │   └── dashboard/      # Dashboard-specific components
│   ├── composables/
│   │   ├── useAuth.ts      # Authentication logic
│   │   ├── useApi.ts       # API integration
│   │   └── useNotifications.ts # Notification system
│   ├── stores/
│   │   ├── auth.ts         # Authentication store
│   │   ├── user.ts         # User data store
│   │   └── notifications.ts # Notification store
│   ├── views/
│   │   ├── LoginView.vue   # Login page
│   │   ├── DashboardView.vue # Main dashboard
│   │   └── ProfileView.vue # Profile management
│   ├── router/
│   │   └── index.ts        # Route configuration
│   ├── assets/             # Static assets
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
├── tests/                  # Test files
├── docs/                   # Documentation
└── public/                 # Public assets
```

## 🎯 Key Components

### 1. Authentication System

**LoginForm.vue** - Complete login form with validation
```vue
<template>
  <form @submit.prevent="handleLogin" class="space-y-6">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email Address
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        autocomplete="email"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        :class="{ 'border-red-300': errors.email }"
      />
      <p v-if="errors.email" class="mt-1 text-sm text-red-600">
        {{ errors.email }}
      </p>
    </div>
    
    <button
      type="submit"
      :disabled="isLoading"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
    >
      {{ isLoading ? 'Signing in...' : 'Sign in' }}
    </button>
  </form>
</template>
```

### 2. Dashboard Cards

**StatsCard.vue** - Reusable statistics card component
```vue
<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="p-5">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <component :is="icon" class="h-6 w-6 text-gray-400" />
        </div>
        <div class="ml-5 w-0 flex-1">
          <dl>
            <dt class="text-sm font-medium text-gray-500 truncate">
              {{ title }}
            </dt>
            <dd class="text-lg font-medium text-gray-900">
              {{ value }}
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div v-if="trend" class="bg-gray-50 px-5 py-3">
      <div class="text-sm">
        <span :class="trendColor" class="font-medium">
          {{ trend.value }}{{ trend.unit }}
        </span>
        <span class="text-gray-500"> {{ trend.label }}</span>
      </div>
    </div>
  </div>
</template>
```

### 3. Profile Management

**ProfileEditor.vue** - Comprehensive profile editing
```vue
<template>
  <div class="space-y-6">
    <!-- Avatar Upload -->
    <div class="flex items-center space-x-6">
      <img
        :src="avatarUrl || defaultAvatar"
        :alt="userStore.user?.name || 'User avatar'"
        class="h-20 w-20 rounded-full object-cover"
      />
      <div>
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          class="hidden"
          @change="handleAvatarUpload"
        />
        <button
          @click="$refs.fileInput.click()"
          class="bg-white border border-gray-300 rounded-md py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Change Avatar
        </button>
      </div>
    </div>

    <!-- Profile Form -->
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Form fields here -->
    </form>
  </div>
</template>
```

## 🎮 Interactive Features

### Real-time Notifications
```typescript
// useNotifications.ts
export function useNotifications() {
  const notifications = ref<Notification[]>([])
  const unreadCount = computed(() => 
    notifications.value.filter(n => !n.read).length
  )

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp'>) => {
    notifications.value.unshift({
      ...notification,
      id: crypto.randomUUID(),
      timestamp: new Date(),
      read: false
    })
  }

  const markAsRead = (id: string) => {
    const notification = notifications.value.find(n => n.id === id)
    if (notification) {
      notification.read = true
    }
  }

  return {
    notifications: readonly(notifications),
    unreadCount,
    addNotification,
    markAsRead
  }
}
```

### Theme Management
```typescript
// useTheme.ts
export function useTheme() {
  const theme = ref<'light' | 'dark'>('light')

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    updateDocumentClass()
    localStorage.setItem('theme', theme.value)
  }

  const updateDocumentClass = () => {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return { theme, toggleTheme }
}
```

## 🧪 Testing

### Unit Tests
```typescript
// ProfileEditor.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileEditor from '../ProfileEditor.vue'

describe('ProfileEditor', () => {
  it('validates required fields', async () => {
    const wrapper = mount(ProfileEditor)
    
    await wrapper.find('form').trigger('submit')
    
    expect(wrapper.find('[data-testid="name-error"]').text())
      .toBe('Name is required')
  })

  it('uploads avatar successfully', async () => {
    const wrapper = mount(ProfileEditor)
    const file = new File(['avatar'], 'avatar.jpg', { type: 'image/jpeg' })
    
    await wrapper.find('input[type="file"]').setValue(file)
    
    expect(wrapper.emitted('avatar-uploaded')).toBeTruthy()
  })
})
```

### E2E Tests
```typescript
// dashboard.spec.ts
import { test, expect } from '@playwright/test'

test('user can login and view dashboard', async ({ page }) => {
  await page.goto('/login')
  
  await page.fill('[data-testid="email"]', 'test@example.com')
  await page.fill('[data-testid="password"]', 'password123')
  await page.click('[data-testid="login-button"]')
  
  await expect(page).toHaveURL('/dashboard')
  await expect(page.locator('[data-testid="welcome-message"]')).toBeVisible()
})
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
```bash
# Copy environment file
cp .env.example .env.local

# Update with your API endpoints
VITE_API_BASE_URL=https://api.yourapp.com
VITE_AUTH_TOKEN_KEY=auth_token
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Run Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:

- **Mobile** (< 640px): Single column layout
- **Tablet** (640px - 1024px): Two column layout
- **Desktop** (> 1024px): Three column layout

```css
/* Example responsive grid */
.dashboard-grid {
  @apply grid gap-6;
  @apply grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}
```

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and roles
- **High Contrast**: Dark theme with proper contrast ratios
- **Focus Management**: Clear focus indicators
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🔧 Customization

### Theming
```css
/* Custom CSS variables for theming */
:root {
  --color-primary: 79 70 229; /* indigo-600 */
  --color-primary-dark: 67 56 202; /* indigo-700 */
  --color-secondary: 156 163 175; /* gray-400 */
}
```

### Configuration
```typescript
// config/dashboard.ts
export const dashboardConfig = {
  features: {
    notifications: true,
    darkMode: true,
    avatarUpload: true,
    profileEdit: true
  },
  limits: {
    avatarSize: 5 * 1024 * 1024, // 5MB
    notificationHistory: 50
  }
}
```

## 🎯 Next Steps

1. **Customize the design** to match your brand
2. **Add more dashboard widgets** for your specific use case
3. **Integrate with your backend API**
4. **Deploy to production** with your preferred hosting service
5. **Add monitoring and analytics**

## 📖 Related Examples

- [E-commerce Catalog](../ecommerce-catalog/) - Product management patterns
- [Blog CMS](../blog-cms/) - Content management patterns
- [Analytics Dashboard](../analytics-dashboard/) - Data visualization patterns

---

This example demonstrates production-ready Vue 3 development with all the best practices built in. Use it as a foundation for your own dashboard applications! 🚀