<!-- Form Component with Validation -->
<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="field">
      <label for="email">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        :class="{ error: errors.email }"
        required
      >
      <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
    </div>

    <div class="field">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="form.password"
        type="password"
        :class="{ error: errors.password }"
        required
      >
      <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
    </div>

    <button type="submit" :disabled="isSubmitting || !isValid">
      {{ isSubmitting ? 'Submitting...' : 'Submit' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref, computed, watch } from 'vue'

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
}

const emit = defineEmits<{
  (e: 'submit', data: FormData): void
}>()

const form = reactive<FormData>({
  email: '',
  password: ''
})

const errors = reactive<FormErrors>({})
const isSubmitting = ref(false)

const isValid = computed(() => {
  return form.email && form.password && !Object.values(errors).some(Boolean)
})

const validateEmail = (email: string): string | undefined => {
  if (!email) return 'Email is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email'
  return undefined
}

const validatePassword = (password: string): string | undefined => {
  if (!password) return 'Password is required'
  if (password.length < 8) return 'Password must be at least 8 characters'
  return undefined
}

watch(() => form.email, (email) => {
  errors.email = validateEmail(email)
})

watch(() => form.password, (password) => {
  errors.password = validatePassword(password)
})

const handleSubmit = async () => {
  errors.email = validateEmail(form.email)
  errors.password = validatePassword(form.password)
  
  if (!isValid.value) return
  
  isSubmitting.value = true
  try {
    emit('submit', { ...form })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.form {
  max-width: 400px;
  margin: 0 auto;
}

.field {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}

input.error {
  border-color: #ef4444;
}

.error-text {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}
</style>