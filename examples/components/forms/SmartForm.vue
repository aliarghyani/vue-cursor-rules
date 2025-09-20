<!-- 
📝 Vue 3 Smart Form Component
✨ Features: Validation, accessibility, TypeScript, error handling
🎯 Perfect for: Contact forms, user registration, data entry
-->

<template>
  <form 
    @submit.prevent="handleSubmit" 
    class="space-y-6 max-w-md mx-auto"
    novalidate
  >
    <!-- Form Title -->
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-900">{{ title }}</h2>
      <p class="mt-2 text-sm text-gray-600">{{ description }}</p>
    </div>

    <!-- Form Fields -->
    <div class="space-y-4">
      <div v-for="field in formFields" :key="field.name">
        <label 
          :for="field.name"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          {{ field.label }}
          <span v-if="field.required" class="text-red-500" aria-label="required">*</span>
        </label>
        
        <input
          :id="field.name"
          v-model="form[field.name]"
          :type="field.type"
          :placeholder="field.placeholder"
          :required="field.required"
          :autocomplete="field.autocomplete"
          :aria-describedby="errors[field.name] ? `${field.name}-error` : undefined"
          :aria-invalid="!!errors[field.name]"
          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                 disabled:bg-gray-50 disabled:text-gray-500"
          :class="{
            'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500': 
              errors[field.name]
          }"
          @blur="validateField(field.name)"
        />
        
        <!-- Error Message -->
        <p 
          v-if="errors[field.name]" 
          :id="`${field.name}-error`"
          class="mt-1 text-sm text-red-600"
          role="alert"
        >
          {{ errors[field.name] }}
        </p>
      </div>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="!isFormValid || isSubmitting"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
             shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
             disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg 
        v-if="isSubmitting" 
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          class="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          stroke-width="4"
        />
        <path 
          class="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {{ isSubmitting ? 'Submitting...' : submitText }}
    </button>

    <!-- Success Message -->
    <div 
      v-if="isSuccess" 
      class="rounded-md bg-green-50 p-4"
      role="alert"
      aria-live="polite"
    >
      <div class="flex">
        <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <div class="ml-3">
          <p class="text-sm font-medium text-green-800">{{ successMessage }}</p>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

// 🎯 Types
export interface FormField {
  name: string
  label: string
  type: string
  placeholder?: string
  required?: boolean
  autocomplete?: string
  validation?: (value: string) => string | null
}

export interface FormData {
  [key: string]: string
}

interface Props {
  title: string
  description?: string
  fields: FormField[]
  submitText?: string
  successMessage?: string
  onSubmit: (data: FormData) => Promise<void>
}

// 📥 Props
const props = withDefaults(defineProps<Props>(), {
  description: '',
  submitText: 'Submit',
  successMessage: 'Form submitted successfully!'
})

// 🎯 Reactive State
const form = reactive<FormData>({})
const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const isSuccess = ref(false)

// 🎮 Computed
const formFields = computed(() => props.fields)

const isFormValid = computed(() => {
  const hasAllRequired = props.fields
    .filter(field => field.required)
    .every(field => form[field.name]?.trim())
  
  const hasNoErrors = Object.keys(errors).length === 0
  
  return hasAllRequired && hasNoErrors
})

// 🔧 Methods
const validateField = (fieldName: string) => {
  const field = props.fields.find(f => f.name === fieldName)
  if (!field) return

  const value = form[fieldName] || ''
  
  // Clear previous error
  delete errors[fieldName]
  
  // Required validation
  if (field.required && !value.trim()) {
    errors[fieldName] = `${field.label} is required`
    return
  }
  
  // Custom validation
  if (field.validation && value) {
    const error = field.validation(value)
    if (error) {
      errors[fieldName] = error
    }
  }
}

const handleSubmit = async () => {
  // Validate all fields
  props.fields.forEach(field => {
    validateField(field.name)
  })
  
  if (!isFormValid.value) return
  
  try {
    isSubmitting.value = true
    isSuccess.value = false
    
    await props.onSubmit(form)
    
    isSuccess.value = true
    
    // Reset form after successful submission
    setTimeout(() => {
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
      isSuccess.value = false
    }, 3000)
    
  } catch (error) {
    console.error('Form submission error:', error)
    // Handle error (could emit an event or show error message)
  } finally {
    isSubmitting.value = false
  }
}

// 🎬 Initialize form data
props.fields.forEach(field => {
  form[field.name] = ''
})
</script>

<style scoped>
/* Additional custom styles if needed */
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1.5rem;
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1rem;
}
</style>