import { ref, onMounted } from 'vue'
import { api } from './api-service'

export function useFetch<T>(url: string, immediate = true) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const execute = async () => {
    try {
      loading.value = true
      error.value = null
      data.value = await api.get<T>(url)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  if (immediate) {
    onMounted(execute)
  }

  return { data, loading, error, execute }
}
