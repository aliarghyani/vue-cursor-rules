# 🚀 Vue 3 Cursor Rules - Production Ready

![GitHub stars](https://img.shields.io/github/stars/aliarghyani/vue-cursor-rules?style=social)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

**The most comprehensive Vue 3 development rules collection** that transforms your coding experience with intelligent automation. Perfect for developers at any level who want to build **production-ready, maintainable, and performant** Vue 3 applications.

## ⚡ Why Choose Vue 3 Cursor Rules?

- 🎯 **Instant Setup**: Copy-paste ready rules that work out of the box
- 🧠 **Smart Automation**: AI-powered suggestions based on your codebase
- 📈 **Performance First**: Built-in optimization patterns
- ♿ **Accessibility Ready**: WCAG 2.1 AA compliance by default
- 🔒 **Security Focused**: XSS and CSRF protection patterns
- 🚀 **Production Tested**: Field-tested patterns for reliable Vue 3 development

## ✅ Core Principles
- Inbox‑Zero: each rule file is tiny (≤4KB), focused, and copy‑paste ready.
- Neutral Core: no lock‑in to any UI kit; optional adapters for Vuetify/Quasar/Element Plus/Tailwind/Headless.
- AI Consistency: standard role + preflight checklist + output contract.
- Modern Vue Only: Composition API + TypeScript; no Options API.
- Practical Examples: complete imports and explicit types.

## 💰 Money-Smart Development

### Budget Mode Features
- **Token discipline**: Micro-changes only, no full-file dumps
- **Intelligent batching**: Group related changes by architectural concern
- **Performance-first**: Suggest optimizations that reduce bundle size
- **Code reuse**: Prioritize existing patterns and utilities

### Development Efficiency
- **Evidence-based suggestions**: Reference existing codebase patterns
- **Architectural guidance**: SOLID principles, clean code practices
- **Error prevention**: TypeScript-first, comprehensive validation
- **Performance optimization**: Memory management, lazy loading

## 🚀 What You Get

### 🎯 **Core Stack (Perfect for Most Projects)**
- **Vue 3** with Composition API + `<script setup>`
- **TypeScript** for type safety and better DX
- **Vite** for lightning-fast development
- **Tailwind CSS** for rapid styling
- **Pinia** for predictable state management

### 🎨 **Smart Development Patterns**
- **Component Architecture**: Clean, reusable, testable components
- **Performance First**: Lazy loading, code splitting, memory management
- **Error Handling**: Graceful failures with user-friendly messages
- **Accessibility**: Screen reader support, keyboard navigation
- **Security**: XSS prevention, secure data handling
- **Testing**: Unit, integration, and e2e test patterns

### 📦 **Popular UI Library Support**
- **Vuetify** - Material Design made easy
- **Ant Design Vue** - Enterprise-class components
- **Element Plus** - Desktop-focused UI library
- **Naive UI** - TypeScript-native components
- **PrimeVue** - Rich component ecosystem
- **Quasar** - Cross-platform development

Note: Core is UI‑agnostic; adapters are optional and minimal — no lock‑in.

### 🛠️ **Essential Developer Tools**
- **Vue Router 4** - Modern client-side routing
- **Vue I18n 9+** - Internationalization made simple
- **Fetch API** - Modern HTTP client with composable patterns
- **VueUse** - Composition utilities collection


### 3️⃣ **Start Coding! 🎉**
Rules automatically activate based on what you're working on:
- Create a `.vue` file → Get Vue 3 + TypeScript patterns
- Work in `/composables` → Get reusable logic patterns  
- Build forms → Get validation and accessibility guidance
- Make API calls → Get fetch patterns with error handling
- Write tests → Get component testing patterns

## 🚀 **Getting Started**

Ready to transform your Vue 3 development experience? Here's what to do:

1. **📋 Clone the repository**: `git clone https://github.com/aliarghyani/vue-cursor-rules.git`
2. **📎 Copy rules to your project**: `cp -r vue-cursor-rules/.cursor ./your-vue-project/`
3. **💻 Open in Cursor IDE**: `cursor your-vue-project`
4. **✨ Start coding**: Rules activate automatically based on file types
5. **📄 Explore examples**: Check the `/examples` folder for working patterns
6. **📆 Read detailed docs**: Visit `/docs` for comprehensive guides

## 🎯 How Rules Work

### 🔄 **Auto-Activation**
Rules activate automatically based on file patterns:
- `*.vue` files → Vue fundamentals and component patterns
- `/composables/**` → Composition function patterns
- `/stores/**` → Pinia state management
- `*.test.ts` → Testing patterns
- `tailwind.config.*` → Tailwind CSS patterns
- UI kit files → Framework-specific adaptations

### 🧠 **Smart Context**
Cursor intelligently suggests relevant patterns:
- Working on forms? Get validation and accessibility patterns
- Making API calls? Get fetch patterns with error handling
- Building components? Get TypeScript and prop patterns
- Writing tests? Get component testing best practices

### 📄 **Real Examples**
Every rule includes copy-paste ready code:
- Complete component examples
- Working API integration patterns
- Production-ready form handling
- Accessible UI components for all major frameworks

### ✅ Preflight Checklist
- Use `<script setup lang="ts">` and Composition API.
- Don’t destructure props; use `toRefs` if necessary.
- Type everything (props, emits, stores, route meta, API shapes).
- Correct reactivity (`ref` vs `reactive`; `storeToRefs` for Pinia).
- Default to UI‑neutral; apply adapter snippets only when needed.

### 📦 Output Contract
- Final code only (no rationale) with complete imports.
- Explicit types and consistent naming: kebab-case props, camelCase emits, PascalCase components.
- Avoid `any` and console noise; include minimal error handling for async.

## 🎯 **What This Is**

- 📄 **13 focused rule files** for Vue 3.4+ development with enhanced TypeScript support
- 🔧 **Shared types** in `types/` for consistent typing across components, APIs, and stores
- ⚙️ **Strict TypeScript config** in `tsconfig.json` for error prevention and best practices
- 🧠 **AI-assisted curation** for practical development patterns
- 🎨 **UI-framework flexible** - works with Vuetify, Quasar, Tailwind, Element Plus
- 🚀 **Production-ready patterns** from real-world Vue projects
- 🔄 **Zero-config** - works immediately after copying files
- 📝 **Copy-paste ready** examples with full TypeScript support

## ⛔ **What This Isn't**

- ❌ Not a framework or boilerplate (just intelligent rules)
- ❌ Not for Vue 2 or Nuxt projects (Vue 3 Composition API only)
- ❌ Not enterprise consulting (practical patterns, not architecture)
- ❌ Not a learning tutorial (assumes basic Vue knowledge)

## 📈 **Repository Overview**

## 📁 Main Structure

```
vue-cursor-rules/
├── .cursor/
│   └── rules/                  # 🎯 Core rule files (13 files)
│       ├── README.mdc          # Rules overview and usage
│       ├── vue-fundamentals.mdc # Core Vue 3 + Composition API
│       ├── typescript-patterns.mdc # TypeScript integration
│       ├── composables.mdc     # Reusable composition functions
│       ├── pinia-stores.mdc    # State management with Pinia
│       ├── vue-router.mdc      # Navigation and routing
│       ├── form-handling.mdc   # Forms and validation
│       ├── api-integration.mdc # Data fetching with fetch
│       ├── component-testing.mdc # Component testing patterns
│       ├── tailwind-patterns.mdc # Utility-first styling
│       ├── ui-kits-guide.mdc   # UI framework integration
│       ├── project-structure.mdc # Directory organization
│       └── prompt-guide.mdc    # Rule creation tips
├── docs/                       # 📄 Detailed documentation
│   ├── FAQ.md              # Common questions and answers
│   ├── FEATURES.md         # Detailed feature descriptions
│   └── USE_CASES.md        # Real-world usage scenarios
├── examples/                   # 📋 Working code samples
│   ├── README.md           # Examples overview
│   ├── basic-component.vue # Basic component patterns
│   ├── form-component.vue  # Form handling examples
│   └── useApi.ts           # API integration composable
├── CONTRIBUTING.md             # Contribution guidelines
├── LICENSE                     # MIT license
├── README.md                   # This file
└── package.json                # Project configuration
```

### 📊 **What's Included**
- **13 rule files** covering comprehensive Vue 3 development
- **Production patterns** from real-world Vue 3 projects  
- **UI kit flexible** - works with popular frameworks
- **Context-aware activation** reduces noise
- **TypeScript-first** with full type safety


## 📈 Development Overview

- **13 rule files** covering all aspects of Vue 3 development
- **Production-tested patterns** from real-world projects
- **Enterprise-ready** error handling and monitoring
- **WCAG 2.1 AA** accessibility compliance
- **Performance-optimized** from day one

## 🤝 **Contributing & Community**

We love contributions! Here's how you can help make Vue 3 Cursor Rules even better:

### 🐛 **Found a Bug?**
[Create an issue](https://github.com/aliarghyani/vue-cursor-rules/issues/new?template=bug_report.md) with detailed reproduction steps.

### 💡 **Have an Idea?**
[Share your feature request](https://github.com/aliarghyani/vue-cursor-rules/issues/new?template=feature_request.md) and let's discuss it!

### 📝 **Want to Contribute Code?**
See our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Creating focused, practical rules (keep each rule under 80 lines)
- Testing against the sample application
- Following our code style and conventions
- Submitting effective pull requests

### 💬 **Join the Discussion**
- 💡 **GitHub Discussions**: [Ask questions and share ideas](https://github.com/aliarghyani/vue-cursor-rules/discussions)
- 🐛 **Issues**: [Report bugs and request features](https://github.com/aliarghyani/vue-cursor-rules/issues)
- 📝 **Contributing**: [Help improve the project](https://github.com/aliarghyani/vue-cursor-rules/blob/main/CONTRIBUTING.md)

### ⭐ **Show Your Support**
If these rules helped you, please:
- ⭐ Star this repository
- 👥 Share with fellow developers
- 💡 Start a [discussion](https://github.com/aliarghyani/vue-cursor-rules/discussions) with your experience
- 🤝 [Contribute](https://github.com/aliarghyani/vue-cursor-rules/blob/main/CONTRIBUTING.md) improvements


### 🤝 **Need Help?**

- **📋 Quick questions**: Check our [FAQ](docs/FAQ.md)
- **📈 Real examples**: Explore [Use Cases](docs/USE_CASES.md)
- **🐛 Found a bug?**: [Create an issue](https://github.com/aliarghyani/vue-cursor-rules/issues)
- **💡 Have ideas?**: [Start a discussion](https://github.com/aliarghyani/vue-cursor-rules/discussions)

---

## 📜 **License & Credits**

**MIT License** - Feel free to use in personal and commercial projects.

**Created with ❤️ by the Vue.js community** - These rules represent best practices and battle-tested patterns for modern Vue 3 development.

### **🔗 Useful Links**
- **Vue 3 Documentation**: [vuejs.org](https://vuejs.org)
- **Cursor IDE**: [cursor.sh](https://cursor.sh)
- **TypeScript**: [typescriptlang.org](https://www.typescriptlang.org)
- **Vite**: [vitejs.dev](https://vitejs.dev)
- **Pinia**: [pinia.vuejs.org](https://pinia.vuejs.org)

## 🔧 TypeScript Enhancements (New!)

### Enhanced TypeScript Support
The project now includes robust TypeScript configurations and shared types for stricter typing and automatic error resolution:

- **Shared Types Directory** (`types/index.ts`): Central repository for interfaces like `User`, `ApiResponse<T>`, `PaginatedResponse<T>`, and utilities. Import them for consistent type safety:
  ```typescript
  import { User, ApiResponse } from './types'
  ```

- **Strict tsconfig.json**: Enables strict mode (`"strict": true`), path mapping (`@/*` and `types/*`), no unused variables/parameters, and Vue 3.4 compiler options. This enforces best practices and catches errors early.

- **Automatic Error Resolution in Rules**: Updated `typescript-patterns.mdc` now detects and fixes common TypeScript errors during code generation:
  - Implicit `any` types → Add explicit typing (e.g., `(user: User) => {}`)
  - Missing imports → Auto-import from `types/`
  - Prop/emit validation → Use generics with `defineProps<Props>()`
  - API responses → Wrap in `ApiResponse<T>`

- **Updated Examples**: All examples now use shared types for real-world type safety demonstration.

### Usage with New Types
```typescript
// In components
import { User } from './types'
const props = defineProps<{ user: User }>()

// In composables
const { data } = useApi<User[]>('/api/users') // data: Ref<User[] | null>

// Error handling
const error: ApiError | null = null // Structured error with code/message
```

These enhancements ensure seamless TypeScript integration without disrupting workflow—AI agents now cross-reference types and fix errors automatically.

*✨ Happy coding with Vue 3! ✨*
