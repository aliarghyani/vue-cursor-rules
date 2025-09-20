<!--
🎯 Advanced Vuetify Form Component with Vue 3 Cursor Rules
✨ Features: 
- Full Vuetify integration with Material Design
- Advanced validation with Vuelidate
- File upload with drag & drop
- Multi-step form with progress
- Real-time validation feedback
- Accessibility compliance
- Internationalization support
- Loading states and error handling
- Auto-save functionality
-->

<template>
  <v-container fluid class="pa-0">
    <v-card elevation="2" class="mx-auto" max-width="800">
      <!-- Form Header with Progress -->
      <v-card-title class="d-flex align-center justify-space-between">
        <div>
          <h2 class="text-h5 font-weight-bold">{{ $t('form.title.userRegistration') }}</h2>
          <p class="text-subtitle-2 text-medium-emphasis mb-0">
            {{ $t('form.subtitle.completeProfile') }}
          </p>
        </div>
        <v-chip 
          :color="formProgress === 100 ? 'success' : 'primary'"
          variant="elevated"
        >
          {{ Math.round(formProgress) }}% {{ $t('common.complete') }}
        </v-chip>
      </v-card-title>

      <!-- Progress Bar -->
      <v-progress-linear
        :model-value="formProgress"
        color="primary"
        height="4"
        class="mb-0"
      />

      <v-card-text class="pa-6">
        <!-- Alert Messages -->
        <v-alert
          v-if="submitError"
          type="error"
          variant="tonal"
          closable
          class="mb-4"
          @click:close="submitError = null"
        >
          <template #title>{{ $t('errors.submission.title') }}</template>
          {{ submitError }}
        </v-alert>

        <v-alert
          v-if="autoSaveStatus === 'saved'"
          type="success"
          variant="text"
          class="mb-4"
          density="compact"
        >
          {{ $t('form.autoSave.saved') }} {{ formatDistanceToNow(lastSaved) }}
        </v-alert>

        <!-- Multi-step Form -->
        <v-stepper
          v-model="currentStep"
          :items="stepItems"
          hide-actions
          elevation="0"
          class="bg-transparent"
        >
          <!-- Step 1: Personal Information -->
          <template #item.1>
            <v-form ref="personalInfoForm" @submit.prevent>
              <v-row>
                <!-- Avatar Upload with Crop -->
                <v-col cols="12" class="text-center">
                  <div class="d-flex flex-column align-center">
                    <v-avatar
                      :size="120"
                      class="mb-4 elevation-2"
                      style="border: 3px solid rgb(var(--v-theme-primary))"
                    >
                      <v-img
                        v-if="form.avatar"
                        :src="avatarPreview"
                        :alt="$t('form.fields.avatar.alt', { name: form.firstName })"
                        cover
                      />
                      <v-icon v-else size="60" color="grey-lighten-1">
                        mdi-account-circle
                      </v-icon>
                    </v-avatar>

                    <v-file-input
                      ref="avatarInput"
                      v-model="avatarFile"
                      accept="image/*"
                      :label="$t('form.fields.avatar.label')"
                      prepend-icon=""
                      prepend-inner-icon="mdi-camera"
                      variant="outlined"
                      density="comfortable"
                      class="mb-2"
                      style="max-width: 300px"
                      :error-messages="$v.avatarFile.$errors.map(e => e.$message)"
                      @update:model-value="handleAvatarUpload"
                    />

                    <v-btn
                      v-if="form.avatar"
                      variant="text"
                      size="small"
                      color="error"
                      @click="removeAvatar"
                    >
                      {{ $t('form.actions.removePhoto') }}
                    </v-btn>
                  </div>
                </v-col>

                <!-- Personal Details -->
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.firstName"
                    :label="$t('form.fields.firstName.label')"
                    :placeholder="$t('form.fields.firstName.placeholder')"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-account"
                    :error-messages="$v.firstName.$errors.map(e => e.$message)"
                    :loading="validating.firstName"
                    autocomplete="given-name"
                    @blur="$v.firstName.$touch()"
                    @input="handleFieldChange('firstName')"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.lastName"
                    :label="$t('form.fields.lastName.label')"
                    :placeholder="$t('form.fields.lastName.placeholder')"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-account"
                    :error-messages="$v.lastName.$errors.map(e => e.$message)"
                    :loading="validating.lastName"
                    autocomplete="family-name"
                    @blur="$v.lastName.$touch()"
                    @input="handleFieldChange('lastName')"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.email"
                    :label="$t('form.fields.email.label')"
                    :placeholder="$t('form.fields.email.placeholder')"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    :error-messages="$v.email.$errors.map(e => e.$message)"
                    :loading="validating.email"
                    autocomplete="email"
                    @blur="validateEmailUnique"
                    @input="handleFieldChange('email')"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.phone"
                    :label="$t('form.fields.phone.label')"
                    :placeholder="$t('form.fields.phone.placeholder')"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-phone"
                    type="tel"
                    :error-messages="$v.phone.$errors.map(e => e.$message)"
                    :loading="validating.phone"
                    autocomplete="tel"
                    @blur="$v.phone.$touch()"
                    @input="handleFieldChange('phone')"
                  />
                </v-col>

                <!-- Date of Birth with Calendar -->
                <v-col cols="12" md="6">
                  <v-menu
                    v-model="datePickerMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template #activator="{ props }">
                      <v-text-field
                        v-model="formattedBirthDate"
                        :label="$t('form.fields.birthDate.label')"
                        prepend-inner-icon="mdi-calendar"
                        variant="outlined"
                        density="comfortable"
                        readonly
                        v-bind="props"
                        :error-messages="$v.birthDate.$errors.map(e => e.$message)"
                        autocomplete="bday"
                      />
                    </template>
                    <v-date-picker
                      v-model="form.birthDate"
                      :max="maxBirthDate"
                      :min="minBirthDate"
                      color="primary"
                      @update:model-value="datePickerMenu = false"
                    />
                  </v-menu>
                </v-col>

                <!-- Gender Selection -->
                <v-col cols="12" md="6">
                  <v-select
                    v-model="form.gender"
                    :label="$t('form.fields.gender.label')"
                    :items="genderOptions"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-human-male-female"
                    :error-messages="$v.gender.$errors.map(e => e.$message)"
                    @blur="$v.gender.$touch()"
                    @update:model-value="handleFieldChange('gender')"
                  />
                </v-col>
              </v-row>
            </v-form>
          </template>

          <!-- Step 2: Address Information -->
          <template #item.2>
            <v-form ref="addressForm" @submit.prevent>
              <v-row>
                <!-- Address Autocomplete -->
                <v-col cols="12">
                  <v-combobox
                    v-model="form.address"
                    :label="$t('form.fields.address.label')"
                    :placeholder="$t('form.fields.address.placeholder')"
                    :items="addressSuggestions"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-map-marker"
                    :loading="loadingAddressSuggestions"
                    :error-messages="$v.address.$errors.map(e => e.$message)"
                    autocomplete="street-address"
                    @update:search="searchAddresses"
                    @blur="$v.address.$touch()"
                    @update:model-value="handleAddressSelect"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.city"
                    :label="$t('form.fields.city.label')"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-city"
                    :error-messages="$v.city.$errors.map(e => e.$message)"
                    autocomplete="address-level2"
                    @blur="$v.city.$touch()"
                    @input="handleFieldChange('city')"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-autocomplete
                    v-model="form.country"
                    :label="$t('form.fields.country.label')"
                    :items="countries"
                    item-title="name"
                    item-value="code"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-flag"
                    :error-messages="$v.country.$errors.map(e => e.$message)"
                    autocomplete="country"
                    @update:model-value="handleCountryChange"
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.postalCode"
                    :label="$t('form.fields.postalCode.label')"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-mailbox"
                    :error-messages="$v.postalCode.$errors.map(e => e.$message)"
                    autocomplete="postal-code"
                    @blur="$v.postalCode.$touch()"
                    @input="handleFieldChange('postalCode')"
                  />
                </v-col>
              </v-row>
            </v-form>
          </template>

          <!-- Step 3: Preferences & Verification -->
          <template #item.3>
            <v-form ref="preferencesForm" @submit.prevent>
              <v-row>
                <!-- Preferences -->
                <v-col cols="12">
                  <h3 class="text-h6 mb-4">{{ $t('form.sections.preferences') }}</h3>
                  
                  <v-card variant="outlined" class="mb-4">
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-select
                            v-model="form.language"
                            :label="$t('form.fields.language.label')"
                            :items="languageOptions"
                            variant="outlined"
                            density="comfortable"
                            prepend-inner-icon="mdi-translate"
                          />
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-select
                            v-model="form.timezone"
                            :label="$t('form.fields.timezone.label')"
                            :items="timezoneOptions"
                            variant="outlined"
                            density="comfortable"
                            prepend-inner-icon="mdi-clock"
                          />
                        </v-col>
                      </v-row>

                      <!-- Notification Preferences -->
                      <v-divider class="my-4" />
                      <h4 class="text-subtitle-1 mb-3">{{ $t('form.sections.notifications') }}</h4>
                      
                      <v-switch
                        v-model="form.notifications.email"
                        :label="$t('form.fields.notifications.email')"
                        color="primary"
                        hide-details
                        class="mb-2"
                      />
                      
                      <v-switch
                        v-model="form.notifications.sms"
                        :label="$t('form.fields.notifications.sms')"
                        color="primary"
                        hide-details
                        class="mb-2"
                      />
                      
                      <v-switch
                        v-model="form.notifications.push"
                        :label="$t('form.fields.notifications.push')"
                        color="primary"
                        hide-details
                      />
                    </v-card-text>
                  </v-card>
                </v-col>

                <!-- Terms and Privacy -->
                <v-col cols="12">
                  <v-card variant="outlined">
                    <v-card-text>
                      <h4 class="text-subtitle-1 mb-3">{{ $t('form.sections.legal') }}</h4>
                      
                      <v-checkbox
                        v-model="form.agreeToTerms"
                        :error-messages="$v.agreeToTerms.$errors.map(e => e.$message)"
                        color="primary"
                        @blur="$v.agreeToTerms.$touch()"
                      >
                        <template #label>
                          <span>
                            {{ $t('form.fields.agreeToTerms.prefix') }}
                            <a 
                              :href="$t('form.fields.agreeToTerms.termsLink')" 
                              target="_blank"
                              class="text-primary text-decoration-none"
                              @click.stop
                            >
                              {{ $t('form.fields.agreeToTerms.terms') }}
                            </a>
                            {{ $t('form.fields.agreeToTerms.and') }}
                            <a 
                              :href="$t('form.fields.agreeToTerms.privacyLink')" 
                              target="_blank"
                              class="text-primary text-decoration-none"
                              @click.stop
                            >
                              {{ $t('form.fields.agreeToTerms.privacy') }}
                            </a>
                          </span>
                        </template>
                      </v-checkbox>

                      <v-checkbox
                        v-model="form.subscribeNewsletter"
                        :label="$t('form.fields.subscribeNewsletter.label')"
                        color="primary"
                        hide-details
                      />
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-form>
          </template>
        </v-stepper>
      </v-card-text>

      <!-- Form Actions -->
      <v-card-actions class="pa-6 pt-0">
        <v-btn
          v-if="currentStep > 1"
          variant="outlined"
          color="primary"
          @click="previousStep"
        >
          <v-icon start>mdi-chevron-left</v-icon>
          {{ $t('form.actions.previous') }}
        </v-btn>

        <v-spacer />

        <!-- Auto-save indicator -->
        <v-chip
          v-if="autoSaveStatus"
          :color="autoSaveStatus === 'saving' ? 'warning' : 'success'"
          variant="text"
          size="small"
          class="mr-2"
        >
          <v-icon start size="16">
            {{
              autoSaveStatus === 'saving'
                ? 'mdi-loading mdi-spin'
                : 'mdi-check-circle'
            }}
          </v-icon>
          {{ $t(`form.autoSave.${autoSaveStatus}`) }}
        </v-chip>

        <v-btn
          v-if="currentStep < stepItems.length"
          variant="elevated"
          color="primary"
          :disabled="!isCurrentStepValid"
          @click="nextStep"
        >
          {{ $t('form.actions.next') }}
          <v-icon end>mdi-chevron-right</v-icon>
        </v-btn>

        <v-btn
          v-else
          variant="elevated"
          color="success"
          size="large"
          :loading="submitting"
          :disabled="!isFormValid"
          @click="submitForm"
        >
          <v-icon start>mdi-check</v-icon>
          {{ $t('form.actions.submit') }}
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Image Crop Dialog -->
    <v-dialog v-model="cropDialog" max-width="600px" persistent>
      <v-card>
        <v-card-title>{{ $t('form.imageCrop.title') }}</v-card-title>
        <v-card-text>
          <div ref="cropContainer" class="crop-container">
            <!-- Image cropper would go here -->
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="cropDialog = false">
            {{ $t('common.cancel') }}
          </v-btn>
          <v-btn variant="elevated" color="primary" @click="applyCrop">
            {{ $t('form.imageCrop.apply') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import { formatDistanceToNow } from 'date-fns'
import { useThrottleFn, useDebounceFn } from '@vueuse/core'

// 🎯 Types
export interface UserRegistrationForm {
  // Personal Info
  firstName: string
  lastName: string
  email: string
  phone: string
  birthDate: Date | null
  gender: string
  avatar: string | null

  // Address
  address: string
  city: string
  country: string
  postalCode: string

  // Preferences
  language: string
  timezone: string
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
  }

  // Legal
  agreeToTerms: boolean
  subscribeNewsletter: boolean
}

export interface Props {
  initialData?: Partial<UserRegistrationForm>
  autoSave?: boolean
  onSubmit: (data: UserRegistrationForm) => Promise<void>
  onStepChange?: (step: number) => void
}

// 📥 Props & Emits
const props = withDefaults(defineProps<Props>(), {
  autoSave: true
})

const emit = defineEmits<{
  submit: [data: UserRegistrationForm]
  stepChange: [step: number]
  autoSave: [data: Partial<UserRegistrationForm>]
}>()

// 🌐 Composables
const { t } = useI18n()

// 🔄 Reactive State
const currentStep = ref(1)
const submitting = ref(false)
const submitError = ref<string | null>(null)
const autoSaveStatus = ref<'saving' | 'saved' | null>(null)
const lastSaved = ref<Date | null>(null)
const datePickerMenu = ref(false)
const cropDialog = ref(false)
const avatarFile = ref<File[]>([])
const avatarPreview = ref<string | null>(null)

// Form validation states
const validating = ref({
  firstName: false,
  lastName: false,
  email: false,
  phone: false
})

// Address autocomplete
const addressSuggestions = ref<string[]>([])
const loadingAddressSuggestions = ref(false)

// 📋 Form Data
const form = ref<UserRegistrationForm>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDate: null,
  gender: '',
  avatar: null,
  address: '',
  city: '',
  country: '',
  postalCode: '',
  language: 'en',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  notifications: {
    email: true,
    sms: false,
    push: true
  },
  agreeToTerms: false,
  subscribeNewsletter: false
})

// 🔧 Validation Rules
const rules = computed(() => ({
  firstName: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.firstName.label') }), required),
    minLength: helpers.withMessage(t('validation.minLength', { field: t('form.fields.firstName.label'), min: 2 }), minLength(2))
  },
  lastName: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.lastName.label') }), required),
    minLength: helpers.withMessage(t('validation.minLength', { field: t('form.fields.lastName.label'), min: 2 }), minLength(2))
  },
  email: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.email.label') }), required),
    email: helpers.withMessage(t('validation.email'), email)
  },
  phone: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.phone.label') }), required)
  },
  birthDate: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.birthDate.label') }), required)
  },
  gender: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.gender.label') }), required)
  },
  address: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.address.label') }), required)
  },
  city: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.city.label') }), required)
  },
  country: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.country.label') }), required)
  },
  postalCode: {
    required: helpers.withMessage(t('validation.required', { field: t('form.fields.postalCode.label') }), required)
  },
  agreeToTerms: {
    required: helpers.withMessage(t('validation.agreeToTerms'), (value: boolean) => value === true)
  },
  avatarFile: {}
}))

const $v = useVuelidate(rules, form)

// 🧮 Computed Properties
const stepItems = computed(() => [
  {
    title: t('form.steps.personal.title'),
    subtitle: t('form.steps.personal.subtitle'),
    value: 1
  },
  {
    title: t('form.steps.address.title'),
    subtitle: t('form.steps.address.subtitle'),
    value: 2
  },
  {
    title: t('form.steps.preferences.title'),
    subtitle: t('form.steps.preferences.subtitle'),
    value: 3
  }
])

const formProgress = computed(() => {
  const totalFields = Object.keys(form.value).length
  const completedFields = Object.entries(form.value).filter(([key, value]) => {
    if (key === 'notifications') return true
    if (key === 'subscribeNewsletter') return true
    if (key === 'avatar') return true
    return value !== '' && value !== null && value !== false
  }).length
  
  return (completedFields / totalFields) * 100
})

const isCurrentStepValid = computed(() => {
  switch (currentStep.value) {
    case 1:
      return !$v.value.firstName.$error && !$v.value.lastName.$error && 
             !$v.value.email.$error && !$v.value.phone.$error && 
             !$v.value.birthDate.$error && !$v.value.gender.$error
    case 2:
      return !$v.value.address.$error && !$v.value.city.$error && 
             !$v.value.country.$error && !$v.value.postalCode.$error
    case 3:
      return !$v.value.agreeToTerms.$error
    default:
      return false
  }
})

const isFormValid = computed(() => !$v.value.$error && $v.value.$dirty)

const formattedBirthDate = computed(() => {
  if (!form.value.birthDate) return ''
  return new Intl.DateTimeFormat(form.value.language).format(form.value.birthDate)
})

const maxBirthDate = computed(() => {
  const today = new Date()
  today.setFullYear(today.getFullYear() - 13) // Minimum age 13
  return today.toISOString().split('T')[0]
})

const minBirthDate = computed(() => {
  const oldestDate = new Date()
  oldestDate.setFullYear(oldestDate.getFullYear() - 120)
  return oldestDate.toISOString().split('T')[0]
})

// 📊 Options Data
const genderOptions = computed(() => [
  { title: t('form.options.gender.male'), value: 'male' },
  { title: t('form.options.gender.female'), value: 'female' },
  { title: t('form.options.gender.other'), value: 'other' },
  { title: t('form.options.gender.preferNotToSay'), value: 'prefer_not_to_say' }
])

const languageOptions = computed(() => [
  { title: 'English', value: 'en' },
  { title: 'فارسی', value: 'fa' },
  { title: 'العربية', value: 'ar' },
  { title: 'Français', value: 'fr' },
  { title: 'Deutsch', value: 'de' },
  { title: 'Español', value: 'es' }
])

const countries = ref([
  { name: 'United States', code: 'US' },
  { name: 'Iran', code: 'IR' },
  { name: 'Canada', code: 'CA' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' }
])

const timezoneOptions = computed(() => [
  'UTC',
  'America/New_York',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tehran',
  'Asia/Dubai',
  'Asia/Tokyo