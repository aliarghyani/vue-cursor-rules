# Vue 3 Cursor Rules

Lightweight, production-ready rules for Cursor IDE that make Vue 3 development faster and more consistent. Curated for modern Vue 3.4+, TypeScript, Pinia, Router v4+, Tailwind, Vitest + Vue Test Utils, and Vite.

[MIT License](LICENSE) • [Contributing](CONTRIBUTING.md)

## Why This

- Practical, copy-paste-ready patterns for 80%+ daily Vue tasks.
- UI-kit neutral core with optional adaptations (Vuetify, Quasar, Element Plus, Tailwind UI).
- Optimized for AI consistency in Cursor (clear roles, core rules, chain-of-thought).
- Inbox-Zero size discipline: simple, focused, and fast to read.

Two weeks of focused, real-world curation using AI as an assistant — guided by hands-on Vue experience and feedback on common developer obstacles (forms, API integration, testing, and structure).

## What You Get

- Composition API patterns: props/emits, reactivity, computed, watch.
- Composables and stores: clean reusable logic, Pinia stores.
- Forms: validation, loading/error states, submission flows.
- API integration: typed fetch patterns, error handling.
- Router: navigation patterns and guards.
- Testing: Vitest + Vue Test Utils basics.
- Tailwind: practical styling patterns (optional, not required).

## Quick Start

1) Copy rules into your repository
```
cp -r .cursor ./your-vue-project/
```

2) Open in Cursor and start coding
```
cd your-vue-project
cursor .
```

Rules auto-activate based on file context. For example:
- `.vue` files → fundamentals
- `/composables` → composables patterns
- `/stores` → Pinia patterns
- `.test.ts`/`.spec.ts` → testing patterns
- `tailwind.config.*` → Tailwind patterns
- UI kits in templates → see `ui-kits-guide.mdc`

## What’s Inside

Flat, zero-config structure in `.cursor/rules/`:
- `README.mdc`
- `vue-fundamentals.mdc`
- `composables.mdc`
- `pinia-stores.mdc`
- `vue-router.mdc`
- `form-handling.mdc`
- `api-integration.mdc`
- `component-testing.mdc`
- `typescript-patterns.mdc`
- `tailwind-patterns.mdc`
- `project-structure.mdc`
- `prompt-guide.mdc`
- `ui-kits-guide.mdc`

Metrics: 11–13 files, ~26–42.5 KB total; each file < 4 KB (guideline).

## UI Kits Without Lock-In

Core logic stays identical across kits (composables, reactivity). Only templates change.
- Tailwind UI / Headless UI → utility classes + semantic HTML
- Vuetify → Material components
- Quasar → cross-platform components
- Element Plus → enterprise-friendly components

See `.cursor/rules/ui-kits-guide.mdc` for side-by-side variants.

## Philosophy

- Vue 3.4+, Composition API first
- TypeScript for clarity and safety
- UI-framework agnostic by default
- No legacy Options API
- No SSR/Nuxt (keep it simple and focused)

## Examples

See `examples/` for component, form, and API patterns that mirror the rules.

## Contributing

PRs welcome. Please keep rules compact (<4 KB), ASCII-only, and follow the rule template (role, core rules, chain-of-thought, examples, UI kit adaptations). See `CONTRIBUTING.md`.

## License

MIT

