<!-- Basic Vue 3 Component Example -->
<template>
  <div class="user-card">
    <img :src="user.avatar" :alt="user.name" loading="lazy">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <button @click="handleEdit" :disabled="loading">
      {{ loading ? 'Loading...' : 'Edit' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { User } from '../types'

interface Props {
  user: User
  loading?: boolean
}

interface Emits {
  (e: 'edit', user: User): void
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

const emit = defineEmits<Emits>()

const handleEdit = () => {
  emit('edit', props.user)
}
</script>

<style scoped>
.user-card {
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.user-card img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
</style>