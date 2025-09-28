
# FAQ & Troubleshooting

<cite>
**Referenced Files in This Document**   
- [FAQ.md](file://docs/FAQ.md)
- [CONTRIBUTING.md](file://CONTRIBUTING.md)
- [package.json](file://package.json)
- [lint-rules.mjs](file://scripts/lint-rules.mjs)
- [measure-tokens.mjs](file://scripts/measure-tokens.mjs)
</cite>

## Table of Contents
1. [Setup Issues](#setup-issues)
2. [Rule Application](#rule-application)
3. [IDE Integration](#ide-integration)
4. [Performance Concerns](#performance-concerns)
5. [Accessibility Validation](#accessibility-validation)
6. [Preventative Best Practices](#preventative-best-practices)

## Setup Issues

This section addresses common problems encountered during initial configuration and project setup.

### Q: Why aren't the rules working in my IDE?
**A:** The rules are specifically designed for Cursor IDE and will not function in other editors like VS Code. Verify that:
1. You are using Cursor IDE (not a similar editor)
2. The `.cursor/rules/` directory exists at your project root
3. Your project has been opened directly in Cursor
4. The rules files have `.md` or `.mdc` extensions

Run `npm run validate` to check rule integrity and ensure proper file structure.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L28-L30)
- [package.json](file://package.json#L45-L47)

### Q: Can I use these rules with Vue 2 projects?
**A:** No. These rules are built exclusively for Vue 3 with Composition API. Vue 2 uses different patterns, including Options API syntax and legacy reactivity systems, which are incompatible with these rules. Migrate to Vue 3 before implementing this ruleset.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L14-L16)

### Q: Do I need TypeScript to use the rules?
**A:** While optional, TypeScript is strongly recommended. The rules provide enhanced type safety, better autocompletion, and more precise suggestions when used with TypeScript. JavaScript projects will still benefit from structural guidance but miss out on type-level validation.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L18-L20)

### Q: What if I'm using Nuxt?
**A:** These rules focus on standard Vue 3 development without Nuxt-specific conventions. While core Vue 3 patterns still apply, Nuxt's directory structure, server-side rendering, and module system differ significantly. Use these rules as a foundation but adapt them to Nuxt's architecture.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L22-L24)

## Rule Application

Guidance on managing, customizing, and troubleshooting rule behavior.

### Q: How do I disable specific rules?
**A:** Remove or rename unwanted rule files in the `.cursor/rules/` directory. For example:
1. Delete the entire `accessibility/` folder to disable accessibility rules
2. Rename `performance/optimize-rendering.mdc` to `performance/_disabled-optimize-rendering.mdc`
3. Remove framework-specific folders like `ui-kits/vuetify/` if unused

After changes, restart Cursor to reload the ruleset.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L33-L35)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L129-L131)

### Q: Can I add custom rules?
**A:** Yes. Create new `.md` or `.mdc` files in `.cursor/rules/` following the existing format:
1. Structure each rule with clear "When to Apply" conditions
2. Include both positive ("Do This") and negative ("Not This") examples
3. Keep rules focused on single concerns
4. Test with `npm run lint:rules` and `npm run measure:tokens`

See CONTRIBUTING.md for detailed guidelines.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L37-L39)
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L105-L144)

### Q: The rules seem too strict. How can I relax them?
**A:** Customize based on project needs:
1. Remove strict TypeScript rules for rapid prototyping
2. Disable performance optimization rules in development
3. Modify error handling patterns to match team preferences
4. Adjust file globs to limit rule scope

Adopt rules incrementally rather than enforcing all at once.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L197-L201)

### Q: I'm getting too many suggestions. How do I reduce noise?
**A:** Implement these strategies:
1. Enable Budget Mode for fewer, more targeted suggestions
2. Delete unused rule categories (e.g., remove `enterprise/` folder)
3. Use specific file globs to limit rule application scope
4. Adjust Cursor's suggestion frequency settings

Monitor effectiveness by testing in a sample app first.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L203-L207)

## IDE Integration

Troubleshooting Cursor IDE-specific behaviors and integration issues.

### Q: Are the rules compatible with my UI framework?
**A:** Yes. Supported frameworks include:
- ✅ Vuetify
- ✅ Ant Design Vue
- ✅ Element Plus
- ✅ Naive UI
- ✅ PrimeVue
- ✅ Quasar
- ✅ Tailwind CSS

The rules automatically detect installed frameworks and suggest appropriate patterns. Ensure your framework is properly installed in `package.json`.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L42-L49)

### Q: I'm using Vuetify. Do I need special setup?
**A:** No additional configuration needed. The rules detect Vuetify through package dependencies and component usage patterns. Simply install Vuetify via npm/yarn and import it in your project. Rules will automatically suggest Vuetify-specific components and props.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L157-L159)

### Q: What about Tailwind CSS integration?
**A:** Fully supported. When Tailwind CSS is detected:
1. Rules suggest utility-first class patterns
2. Responsive design recommendations appear
3. Accessibility-focused styling guidance is provided
4. JIT compilation best practices are enforced

Ensure `tailwind.config.js` exists and PostCSS is configured.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L161-L164)

### Q: Can I mix multiple UI frameworks?
**A:** Not recommended. Combining frameworks leads to:
- Increased bundle size
- Style conflicts
- Inconsistent UX
- Maintenance complexity

Choose one primary framework. If integration is unavoidable, isolate framework usage by feature modules and document exceptions clearly.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L166-L168)

## Performance Concerns

Addressing efficiency, token usage, and resource optimization.

### Q: Do these rules increase Cursor API costs?
**A:** No. The rules incorporate cost-saving patterns:
- Micro-changes only (small, focused edits)
- Intelligent batching of related modifications
- Pattern reuse instead of redundant generation
- Elimination of unnecessary refactoring

Run `npm run measure:tokens` to analyze actual token consumption impact.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L138-L141)
- [measure-tokens.mjs](file://scripts/measure-tokens.mjs#L1-L18)

### Q: What is "Budget Mode"?
**A:** Budget Mode optimizes AI interactions by:
1. Prioritizing minimal code changes
2. Reusing existing patterns and components
3. Avoiding speculative refactoring
4. Grouping related updates into single operations

This reduces both token usage and processing time while maintaining code quality.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L143-L147)

### Q: How do I monitor token usage?
**A:** Use the built-in measurement script:
```bash
npm run measure:tokens
```
This calculates total character count across all rules, providing a proxy for token consumption. Keep rulesets compact and prefer agent-select rules for better efficiency.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L149-L151)
- [measure-tokens.mjs](file://scripts/measure-tokens.mjs#L1-L18)

### Q: Are there performance impacts on Cursor?
**A:** Potential impacts include:
- Slower startup when loading large rulesets
- Increased memory usage with many active rules
- Delayed suggestions if rules are poorly optimized

Mitigate by:
1. Removing unused rule categories
2. Keeping individual rules under 80 lines
3. Using specific file globs to limit scope
4. Running `npm run lint:rules` regularly

**Section sources**
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L215-L222)
- [lint-rules.mjs](file://scripts/lint-rules.mjs#L1-L24)

## Accessibility Validation

Ensuring compliance with accessibility standards and inclusive design principles.

### Q: What accessibility level do the rules target?
**A:** WCAG 2.1 AA compliance by default. Rules enforce:
- Semantic HTML structure
- Proper ARIA attribute usage
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast
- Focus management

These meet most legal and organizational accessibility requirements.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L175-L179)

### Q: Can I adjust the accessibility requirements?
**A:** Yes. Modify or remove accessibility rules based on project needs:
1. Delete the `accessibility/` directory entirely for non-public projects
2. Edit specific rules to match target compliance level (A, AA, or AAA)
3. Customize color contrast thresholds
4. Adjust ARIA implementation depth

Document any deviations for audit purposes.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L181-L183)

### Q: Do the rules help with security?
**A:** Yes. Security patterns include:
- XSS prevention through proper data binding
- CSRF protection in form submissions
- Secure authentication flows
- Input validation and sanitization
- Safe external resource handling

These complement accessibility rules to create robust, secure applications.

**Section sources**
- [FAQ.md](file://docs/FAQ.md#L171-L174)

### Q: Are UI examples accessible by default?
**A:** Yes. All rule examples follow accessibility best practices:
- Semantic element selection
- Proper heading hierarchy
- Accessible form controls
- Alternative text for images
- Keyboard operable components

Verify with automated tools like Axe or Lighthouse for production applications.

**Section sources**
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L224-L227)

## Preventative Best Practices

Proactive measures to avoid common issues and maintain long-term code health.

### Q: Should I use these rules for every Vue 3 project?
**A:** Recommended for:
- Production applications
- Team-based development
- Long-lived projects
- Public-facing websites

Consider skipping for:
- Learning prototypes
- One-off experiments
- Legacy migrations
- Time-constrained demos

Adopt based on project