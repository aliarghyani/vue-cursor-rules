# 📚 Vue 3 Cursor Rules — Feature Guide

A practical overview of what the rulepack provides and how it helps you work faster with predictable, modern Vue 3 patterns.

## ⚙️ Core Features

### 🚀 Zero‑Config, Fast Start
- Copy `.cursor/rules` into your project and start coding.
- Context‑aware by file type (e.g., `*.vue`, stores, tests).
- Build‑tool agnostic (works great with Vite).

### 🤖 AI‑Optimized Guardrails
- Consistent role + preflight checklist + output contract in every rule.
- Copy‑pasteable examples with complete imports and explicit types.
- Encourages correct reactivity, typed emits/props, and testable patterns.

### 🎨 UI‑Agnostic Core + Adapters
- Works with vanilla Vue/CSS by default.
- Optional adapter snippets for Vuetify, Quasar, Element Plus, Tailwind/Headless.
- No framework lock‑in; apply adapters only when needed.

## 🧭 Productivity Patterns

### Components
Ask Cursor to scaffold a typed component with `<script setup lang="ts">`, typed emits, and reactivity best practices.

```vue
<script setup lang="ts">
interface Props { label: string; count?: number }
const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'update:count', value: number): void }>()
const n = ref(props.count ?? 0)
function inc() { emit('update:count', ++n.value) }
</script>
```

### Stores (Pinia)
Typed state/getters/actions with `storeToRefs` usage.

```ts
export const useFeature = defineStore('feature', () => {
  const items = ref<string[]>([])
  const loading = ref(false)
  async function fetchItems() { /* ... */ }
  return { items, loading, fetchItems }
})
```

### API Integration
Typed fetch patterns with loading/error handling and minimal retries when appropriate.

```ts
const { data, error, execute } = useApi<User[]>('/api/users')
```

### Forms
Canonical `reactive` form state, computed errors, and adapters for common UI kits.

## 🏗️ Architecture & Quality

- Encourages separation of concerns and feature‑first structure.
- Promotes explicit types and stable composable signatures.
- Performance‑aware patterns (lazy routes, cleanup of effects).

## 🔒 Security & ♿ Accessibility

- Basic reminders for safer data handling (avoid `v-html`, validate input, handle errors).
- Accessibility nudges (semantic HTML, ARIA/keyboard patterns). Not a compliance toolkit.

## 🧪 Testing

- Examples for components/composables; integrate with your preferred testing framework later.
- Tips for testing stores, router, and async flows.

## 👥 Team Benefits

- Consistent patterns across contributors.
- Faster onboarding; clearer shared vocabulary for code reviews.
- Extensible by adding/editing `.mdc` files.

## 💸 Cost & Token Efficiency

- Encourages micro‑changes and pattern reuse.

## 🔧 Customization

- Add or remove `.mdc` files to match your team’s needs.
- Keep files small and focused; prefer adapters over forks of core patterns.




