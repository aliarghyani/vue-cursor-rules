<!--
🎯 Example: How to use SmartForm component
📝 This shows a simple practical usage with validation and API integration
-->

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <SmartForm
      title="Contact Us"
      description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      :fields="contactFormFields"
      submit-text="Send Message"
      success-message="Thank you! We'll get back to you soon."
      :on-submit="handleContactSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import SmartForm from './SmartForm.vue'
import type { FormField } from './SmartForm.vue'

// 📋 Form Configuration
const contactFormFields: FormField[] = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true,
    autocomplete: 'name',
    validation: (value: string) => {
      if (value.length < 2) return 'Name must be at least 2 characters'
      if (value.length > 50) return 'Name must be less than 50 characters'
      return null
    }
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email address',
    required: true,
    autocomplete: 'email',
    validation: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return 'Please enter a valid email address'
      return null
    }
  },
  {
    name: 'company',
    label: 'Company (Optional)',
    type: 'text',
    placeholder: 'Your company name',
    autocomplete: 'organization'
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell us about your project or question...',
    required: true,
    validation: (value: string) => {
      if (value.length < 10) return 'Message must be at least 10 characters'
      if (value.length > 1000) return 'Message must be less than 1000 characters'
      return null
    }
  }
]

// 🚀 Form Submission Handler
const handleContactSubmit = async (formData: Record<string, string>) => {
  // Simulate API call
  console.log('Submitting contact form:', formData)
  
  // Example API integration
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    
    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
    
    const result = await response.json()
    console.log('Form submitted successfully:', result)
    
    // You could also emit an event or call a store action here
    // useContactStore().addSubmission(result)
    
  } catch (error) {
    console.error('Submission error:', error)
    throw error // Re-throw to let SmartForm handle the error
  }
}
</script>

<!-- 
💡 Usage Tips:

1. **Custom Validation**: Add custom validation functions to any field
2. **API Integration**: The onSubmit handler receives form data and should return a Promise
3. **Accessibility**: The form is fully accessible with ARIA labels and keyboard navigation
4. **TypeScript**: Full type safety with interface definitions
5. **Styling**: Uses Tailwind CSS classes, easily customizable

🔧 Customization Examples:

// Add phone number field with validation
{
  name: 'phone',
  label: 'Phone Number',
  type: 'tel',
  autocomplete: 'tel',
  validation: (value: string) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/
    if (value && !phoneRegex.test(value)) return 'Please enter a valid phone number'
    return null
  }
}

// Add file upload field
{
  name: 'attachment',
  label: 'Attachment',
  type: 'file',
  validation: (value: File) => {
    if (value && value.size > 5 * 1024 * 1024) return 'File must be less than 5MB'
    return null
  }
}
-->