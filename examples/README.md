# Vue 3 Examples

## Essential Examples

### 1. Basic Component (`basic-component.vue`)
- Standard component structure
- Props and emits with TypeScript
- Event handling

### 2. Form Component (`form-component.vue`)
- Form validation patterns
- Reactive state management
- Error handling

### 3. API Composable (`useApi.ts`)
- Reusable API logic
- Loading and error states
- TypeScript generics

## Extended Patterns

### 4. API Service (`api-service.ts`)
- Centralized HTTP helper used by rule examples
- Shared JSON parsing and error propagation

### 5. Fetch Composable (`use-fetch.ts`)
- Lightweight wrapper around the API service
- Returns `{ data, loading, error, execute }`

### 6. Tailwind Button Variants (`tailwind-button.vue`)
- Computed class maps for variants and sizes
- Matches Tailwind rule guidance

### 7. Tailwind Responsive Layout (`tailwind-responsive.vue`)
- Mobile-first grid and typography utilities
- Slot-based layout for reuse

### 8. Tailwind Animations (`tailwind-animations.vue`)
- Utility-first motion patterns
- Scoped keyframes for custom effects

## Usage

Copy these patterns into your Vue 3 project. All examples use:
- `<script setup>` syntax
- TypeScript interfaces where relevant
- Composition API
- Modern Vue 3 patterns

## Related Rules

See the Cursor rules for detailed guidance:
- `.cursor/rules/api-integration.mdc`
- `.cursor/rules/form-handling.mdc`
- `.cursor/rules/tailwind-patterns.mdc`

## How to run the examples quickly
1. Scaffold a Vue 3 + TypeScript app (`npm create vue@latest my-app -- --template vue-ts`).
2. Copy any file from this folder into `my-app/src` (keep the same subfolder names where applicable).
3. Install optional helpers referenced by the rules, e.g. `npm install @vueuse/core` when using the composable patterns.
4. Start the dev server (`npm run dev`) and confirm the behaviour matches the rule expectations.
