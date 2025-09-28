# Rule Categories

<cite>
**Referenced Files in This Document**   
- [README.md](file://README.md)
- [CONTRIBUTING.md](file://CONTRIBUTING.md)
- [scripts/lint-rules.mjs](file://scripts/lint-rules.mjs)
- [scripts/measure-tokens.mjs](file://scripts/measure-tokens.mjs)
- [examples/form-component.vue](file://examples/form-component.vue)
- [examples/useApi.ts](file://examples/useApi.ts)
</cite>

## Table of Contents
1. [Vue 3 Patterns](#vue-3-patterns)
2. [TypeScript Safety](#typescript-safety)
3. [Performance Optimization](#performance-optimization)
4. [Accessibility](#accessibility)
5. [Security](#security)
6. [State Management](#state-management)
7. [API Integration](#api-integration)
8. [Internationalization](#internationalization)
9. [UI Frameworks](#ui-frameworks)
10. [Budget Optimization](#budget-optimization)
11. [Category Relationships and Adoption Guidance](#category-relationships-and-adoption-guidance)

## Vue 3 Patterns

The `vue3/` rule category establishes foundational patterns for modern Vue 3 development using the Composition API. These rules guide proper usage of reactive primitives like `ref()` and `reactive()`, ensuring developers correctly manage reactivity and avoid common pitfalls such as losing reactivity when destructuring.

This category enforces architectural best practices including component separation (presentational vs. container components), lifecycle management with proper cleanup, and advanced composition patterns like dependency injection and state machines. Rules ensure that reactive data is properly declared and used within the `setup()` function or `<script setup>` syntax.

Implementation patterns emphasize factory functions for creating reusable composables and proper handling of lifecycle hooks to prevent memory leaks. The rules also promote clean component architecture by encouraging single responsibility principles and proper prop validation.

**Section sources**
- [README.md](file://README.md#L184-L212)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L122-L182)
- [examples/form-component.vue](file://examples/form-component.vue#L51-L113)

## TypeScript Safety

The `typescript/` rule category ensures robust type safety throughout Vue applications. These rules enforce strict TypeScript configuration, proper interface definitions, and effective use of advanced typing features like discriminated unions and branded types to prevent runtime errors.

Rules in this category mandate explicit typing for props, emits, and composable return values, eliminating the use of implicit `any` types. They promote type guards for runtime type checking and encourage the use of utility types like `Partial`, `Pick`, and `Omit` for flexible type manipulation.

The implementation emphasizes type-safe patterns for reactive state, ensuring that `ref()` and `reactive()` are properly typed. It also covers generic composables that maintain type inference across different usage contexts. Configuration options include enforcing strict mode and specific tsconfig.json settings to maximize type safety.

**Section sources**
- [README.md](file://README.md#L184-L212)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L122-L182)
- [examples/form-component.vue](file://examples/form-component.vue#L51-L113)

## Performance Optimization

The `performance/` category focuses on application efficiency through monitoring and optimization techniques. Rules enforce Core Web Vitals tracking, bundle analysis, and memory profiling to identify performance bottlenecks early in development.

Implementation patterns include lazy loading of components and routes, code splitting strategies, and efficient reactive patterns that minimize unnecessary re-renders. The rules also address memory management by promoting proper cleanup of event listeners, timers, and subscriptions in component unmount hooks.

Performance monitoring hooks provide real-time feedback on render times and memory usage, allowing developers to set thresholds and receive alerts when performance degrades. Configuration options enable teams to customize performance budgets and monitoring intensity based on project requirements.

**Section sources**
- [README.md](file://README.md#L184-L212)
- [scripts/lint-rules.mjs](file://scripts/lint-rules.mjs#L0-L24)
- [scripts/measure-tokens.mjs](file://scripts/measure-tokens.mjs#L0-L18)

## Accessibility

The `accessibility/` category ensures WCAG 2.1 AA compliance by enforcing inclusive design principles. Rules mandate semantic HTML structure, proper ARIA attributes, keyboard navigation support, and screen reader compatibility throughout Vue applications.

Implementation patterns include focus management strategies, skip links for navigation, live regions for dynamic content updates, and proper form labeling. The rules also address color contrast requirements, motion preferences, and other inclusive design considerations.

Accessibility helpers as composables provide standardized solutions for common accessibility challenges. Configuration options allow teams to adjust accessibility standards based on their target audience and regulatory requirements.

**Section sources**
- [README.md](file://README.md#L184-L212)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L122-L182)

## Security

The `enterprise/` security rules protect applications from common vulnerabilities like XSS and CSRF attacks. Rules enforce input sanitization, secure template practices, proper JWT handling, and role-based access control implementation.

Implementation patterns include secure HTTP header configuration, token validation middleware, and safe DOM manipulation practices that prevent injection attacks. The rules also cover authentication flows and session management best practices.

Configuration options enable teams to define security policies, specify token expiration times, and configure authorization levels based on application requirements. These rules work in conjunction with enterprise error handling to provide comprehensive security coverage.

**Section sources**
- [README.md](file://README.md#L184-L212)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L122-L182)

## State Management

The `state/` category provides advanced patterns for Pinia store management. Rules enforce proper store organization, type-safe state definitions, and effective state mutation practices that maintain predictability and debuggability.

Implementation patterns include modular store design, optimistic update strategies, real-time synchronization, and advanced caching mechanisms. The rules also cover store composition patterns that allow for reusable state logic across multiple components.

Configuration options support various persistence strategies, caching TTL settings, and synchronization behaviors. These rules ensure that state management remains scalable and maintainable as applications grow in complexity.

**Section sources**
- [README.md](file://README.md#L184-L212)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L122-L182)

## API Integration

The `net/` category standardizes API integration patterns using Axios and similar libraries. Rules enforce consistent error handling, request/response interception, retry logic, and caching strategies for all external service communications.

Implementation patterns include type-safe API clients, automatic token refresh, request cancellation, and loading state management. The example `useApi` composable demonstrates a standardized approach to API calls with built-in error handling and reactive state management.

Configuration options allow customization of retry attempts, backoff strategies, cache invalidation policies, and timeout durations based on specific API requirements and network conditions.

**Section sources**
- [examples/useApi.ts](file://examples/useApi.ts#L0-L41)
- [README.md](file://README.md#L253-L303)

## Internationalization

The `i18n/` category establishes patterns for Vue I18n implementation, enabling applications to support multiple languages efficiently. Rules enforce proper locale management, translation key organization, and dynamic content localization.

Implementation patterns include lazy loading of language packs, pluralization rules, date/number formatting, and right-to-left language support. The rules also cover extraction of translatable strings and integration with translation management systems.

Configuration options support various fallback strategies, missing key handling, and dynamic language switching based on user preferences or browser settings.

**Section sources**
- [README.md](file://README.md#L146-L182)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L122-L182)

## UI Frameworks

The `ui-kits/` and `widgets/` categories provide integration patterns for popular Vue UI libraries including Vuetify, Element Plus, Ant Design Vue, Naive UI, PrimeVue, and Quasar. Rules ensure consistent usage of framework components while maintaining accessibility and performance.

Implementation patterns address theme customization, component styling overrides, and proper integration of framework-specific features. The rules also cover mixing components from different UI libraries when necessary, with guidance on avoiding style conflicts.

Configuration options include theme variables, component defaults, and framework-specific settings that can be standardized across projects.

**Section sources**
- [README.md](file://README.md#L89-L131)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L122-L182)

## Budget Optimization

The `budget-optimized/` and `global/` categories promote cost-effective AI-assisted development by minimizing token consumption. Rules enforce agent discipline, micro-changes, and intelligent batching of related modifications.

Implementation patterns include token conservation strategies, preference for agent-select rules over full-file processing, and evidence-based suggestions that reference existing codebase patterns. The `measure-tokens.mjs` script quantifies the impact of rules on token usage.

Configuration options allow teams to balance between comprehensive guidance and budget constraints. These rules ensure sustainable development practices when using AI coding assistants like Cursor.

**Section sources**
- [scripts/measure-tokens.mjs](file://scripts/measure-tokens.mjs#L0-L18)
- [README.md](file://README.md#L132-L144)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L122-L182)

## Category Relationships and Adoption Guidance

The rule categories are designed to work synergistically, with TypeScript rules complementing Vue 3 patterns by providing compile-time guarantees for runtime behavior. Security rules enhance state management by protecting sensitive data, while accessibility rules improve UI framework implementations.

For new projects, prioritize adoption in this order: Vue 3 Patterns → TypeScript Safety → Accessibility → Security → State Management → API Integration → Performance Optimization → Internationalization → UI Frameworks → Budget Optimization.

Enterprise teams should implement all categories systematically, while individual developers may focus on Vue 3 Patterns, TypeScript Safety, and Accessibility initially. The linting and token measurement scripts provide validation tools for ensuring rule quality and efficiency.

**Section sources**
- [README.md](file://README.md#L146-L182)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L43-L104)
- [scripts/lint-rules.mjs](file://scripts/lint-rules.mjs#L0-L24)
- [scripts/measure-tokens.mjs](file://scripts/measure-tokens.mjs#L0-L18)