# Vue 3 Cursor Rules (Enterprise Edition)

**World-class Vue 3 development rules** for senior developers and enterprise teams. Production-minded **Cursor Rules** focused on **Vue 3** (Nuxt excluded) with enterprise-grade patterns.

## 🚀 Enterprise Features

### 🎯 Core Technologies
- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript** (Strict type safety)
- **Vite** (Build optimization)
- **Tailwind CSS** (Utility-first styling)
- **Pinia** (Advanced state management)

### 🏗️ Advanced Patterns
- **Enterprise Architecture**: SOLID principles, dependency injection, modular design
- **Performance Monitoring**: Web Vitals, bundle analysis, memory management
- **Error Handling**: Comprehensive error taxonomy, recovery strategies
- **Accessibility**: WCAG 2.1 AA compliance, screen reader support
- **Security**: XSS prevention, CSRF protection, secure coding practices
- **Testing**: Unit/integration/e2e patterns with TypeScript

### 📦 UI Kit Integrations
- **Vuetify** - Material Design components
- **Ant Design Vue** - Enterprise-class UI components  
- **Element Plus** - Desktop-focused component library
- **Naive UI** - TypeScript-friendly components
- **PrimeVue** - Rich component ecosystem
- **Quasar** - Cross-platform framework

### 🔧 Developer Libraries
- **Vue Router 4** - Client-side routing
- **Vue I18n 9+** - Internationalization
- **Axios** - HTTP client with interceptors
- **vue3-datepicker** - Date selection components

## 🎓 Quick Start (Cursor)

1. **Copy** `.cursor/rules` into your Vue 3 project
2. **Open Cursor** and start coding
3. **Rules auto-apply** based on file globs and detected dependencies
4. **Budget Mode** enabled by default for cost-effective development

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

## 📁 Repository Structure

```
.cursor/rules/
├── budget-optimized/     # Cost-effective development patterns
├── vue3/                # Vue 3 composition patterns & anti-patterns
├── typescript/          # Advanced TypeScript & type safety
├── performance/         # Monitoring & optimization
├── enterprise/          # Error handling & logging
├── accessibility/       # WCAG 2.1 AA compliance
├── state/              # Advanced Pinia patterns
├── net/                # Axios & API integration
├── i18n/               # Vue I18n patterns
├── widgets/            # Component libraries
├── ui-kits/            # UI framework integrations
├── global/             # Always-on guardrails
└── meta/               # Rule creation guidelines

docs/
├── HOWTO_Cursor.md     # Cursor integration guide
├── COST_PLAYBOOK.md    # Token & time discipline
└── UI_KITS_MIXING.md   # UI framework mixing strategies

scripts/
├── lint-rules.mjs      # Rule validation
└── measure-tokens.mjs  # Token usage analysis

samples/minimal-vue-app/ # Testing playground
```

## 🔍 Rule Categories

### 🛡️ Always-On Guardrails
- **Agent discipline**: Token conservation, micro-changes
- **Architecture decisions**: Framework selection, component design
- **Performance mindset**: Bundle optimization, memory management
- **Type safety**: Strict TypeScript, runtime validation

### 🎨 Vue 3 Excellence
- **Advanced composition patterns**: Factory, dependency injection, state machines
- **Performance optimization**: Memory management, reactive efficiency
- **Component architecture**: Presentational vs container separation
- **Lifecycle management**: Cleanup, resource management

### 🔒 Enterprise Security
- **XSS prevention**: Template security, input sanitization
- **CSRF protection**: Token validation, secure headers
- **Authentication**: JWT handling, session management
- **Authorization**: Role-based access control (RBAC)

### ♿ Accessibility First
- **WCAG 2.1 AA compliance**: Semantic HTML, ARIA patterns
- **Screen reader support**: Live regions, announcements
- **Keyboard navigation**: Focus management, skip links
- **Inclusive design**: Color contrast, motion preferences

### 📊 Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS measurement
- **Bundle analysis**: Code splitting, tree shaking
- **Memory profiling**: Leak detection, cleanup patterns
- **Real-time monitoring**: Performance metrics, error tracking

### 🧪 Testing Excellence
- **Unit testing**: Pure functions, composables
- **Integration testing**: Component interactions
- **E2E testing**: User workflows, critical paths
- **Accessibility testing**: Screen reader simulation

## 🎯 Target Audience

### Perfect For:
- **Senior Vue developers** building production applications
- **Enterprise teams** requiring maintainable, scalable code
- **Tech leads** establishing coding standards
- **Consultants** delivering high-quality client projects
- **Open source maintainers** seeking best practices

### Not Suitable For:
- **Nuxt projects** (intentionally excluded)
- **Vue 2** applications
- **Prototype/quick demos** (too strict for rapid prototyping)
- **Learning projects** (may be overwhelming for beginners)

## 🔧 Advanced Usage

### Custom Rule Creation
```bash
# Validate all rules
npm run lint:rules

# Measure token usage
npm run measure:tokens

# Test with sample app
cd samples && npm create vite@latest minimal-vue-app -- --template vue-ts
```

### Integration Examples
```typescript
// Enterprise store pattern
const userStore = createApiStore('users', userService)

// Performance monitoring
const { renderTime } = usePerformanceMonitoring('UserDashboard')

// Error handling
const { handleWithRetry } = useErrorHandling()

// Accessibility
const { announce, trapFocus } = useAccessibility()
```

## 📈 Development Stats

- **25+ rule files** covering all aspects of Vue 3 development
- **~15,000 lines** of production-tested patterns
- **Enterprise-grade** error handling and monitoring
- **WCAG 2.1 AA** accessibility compliance
- **Performance-optimized** from day one

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Creating focused, practical rules
- Testing against the sample application
- Maintaining token efficiency
- Following the budget-conscious development approach

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

> **Built by senior Vue developers, for senior Vue developers.** These rules represent years of production experience, enterprise requirements, and performance optimization techniques.