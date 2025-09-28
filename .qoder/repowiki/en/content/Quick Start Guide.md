# Quick Start Guide

<cite>
**Referenced Files in This Document**   
- [README.md](file://README.md)
- [docs/HOWTO_Cursor.md](file://docs/HOWTO_Cursor.md)
- [package.json](file://package.json)
- [examples/README.md](file://examples/README.md)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Installation Process](#installation-process)
3. [Cursor IDE Configuration](#cursor-ide-configuration)
4. [Rule Categories and Developer Workflow](#rule-categories-and-developer-workflow)
5. [Basic Usage Patterns](#basic-usage-patterns)
6. [Common Setup Issues and Troubleshooting](#common-setup-issues-and-troubleshooting)
7. [Validation and Testing](#validation-and-testing)

## Introduction

The vue-cursor-rules package provides a comprehensive collection of production-ready development rules specifically designed for Vue 3 projects using the Cursor IDE. These rules transform your coding experience by offering intelligent automation, performance optimization patterns, accessibility compliance, and security best practices. The system is designed for zero-configuration setup, allowing developers to immediately benefit from AI-powered suggestions that promote maintainable, performant, and accessible Vue 3 applications.

**Section sources**
- [README.md](file://README.md#L0-L21)

## Installation Process

### Step 1: Clone the Repository
Begin by cloning the vue-cursor-rules repository from GitHub:

```bash
git clone https://github.com/aliarghyani/vue-cursor-rules.git
```

### Step 2: Copy Rules Directory
Copy the `.cursor/rules` directory to your Vue 3 project root:

```bash
cp -r vue-cursor-rules/.cursor ./your-vue-project/
```

This creates the necessary `.cursor/rules` directory structure within your project, which contains all the rule files that will guide the Cursor IDE's behavior during development.

### Step 3: Project Requirements
Ensure your Vue 3 project meets the following requirements:
- Vue 3 with Composition API and `<script setup>` syntax
- TypeScript support (recommended for optimal rule effectiveness)
- Vite as the build tool
- Node.js 16+ and npm 8+

The rules are specifically designed for Vue 3 projects and are not compatible with Vue 2 or Nuxt applications.

**Section sources**
- [README.md](file://README.md#L100-L115)
- [package.json](file://package.json#L1-L15)

## Cursor IDE Configuration

### Opening Your Project
After copying the rules directory, navigate to your Vue 3 project and open it with Cursor IDE:

```bash
cd your-vue-project
cursor .
```

The rules automatically activate when Cursor detects the `.cursor/rules` directory in your project root. No additional configuration is required.

### Budget Mode Configuration
For cost-effective development, enable Budget Mode in Cursor IDE:

1. Access Cursor settings
2. Navigate to Agent Settings
3. Enable "Budget Mode"
4. Configure settings:
   - Token discipline: Micro-changes only, no full-file dumps
   - Intelligent batching: Group related changes by architectural concern
   - Performance-first: Prioritize optimizations that reduce bundle size
   - Code reuse: Prioritize existing patterns and utilities

Budget Mode helps conserve tokens while maintaining development efficiency through evidence-based suggestions that reference existing codebase patterns and architectural guidance.

**Section sources**
- [README.md](file://README.md#L116-L131)
- [docs/HOWTO_Cursor.md](file://docs/HOWTO_Cursor.md#L0-L4)

## Rule Categories and Developer Workflow

The vue-cursor-rules are organized into specific categories that align with different aspects of Vue 3 development. Understanding these categories helps developers leverage the rules effectively throughout their workflow.

### Core Rule Categories

#### Always-On Guardrails
These rules provide fundamental development principles that apply across all files:
- **Agent discipline**: Enforces token conservation and micro-changes
- **Architecture decisions**: Guides framework selection and component design
- **Performance mindset**: Promotes bundle optimization and memory management
- **Type safety**: Ensures strict TypeScript usage and runtime validation

#### Vue 3 Excellence
Specific to Vue 3 development patterns:
- Advanced composition patterns (factory, dependency injection, state machines)
- Performance optimization for reactive systems
- Component architecture best practices
- Lifecycle management and resource cleanup

#### Specialized Domains
Additional categories address specific concerns:
- **Accessibility**: WCAG 2.1 AA compliance, screen reader support, keyboard navigation
- **Security**: XSS prevention, CSRF protection, authentication handling
- **State Management**: Advanced Pinia patterns and store composition
- **API Integration**: Axios patterns and error handling for network requests

Each rule category activates based on file type and context, ensuring relevant suggestions appear when working on specific parts of your application.

**Section sources**
- [README.md](file://README.md#L169-L200)

## Basic Usage Patterns

### Triggering AI Suggestions
AI suggestions are automatically triggered as you code. To maximize their effectiveness:

1. **Use descriptive variable and function names** that clearly indicate intent
2. **Structure components with `<script setup>` syntax** for better type inference
3. **Add TypeScript interfaces** to define data structures
4. **Follow Vue 3 composition API patterns** for reactivity

When writing code, Cursor will suggest improvements based on the rules, such as:
- Adding proper accessibility attributes to elements
- Implementing form validation patterns
- Optimizing reactive dependencies
- Suggesting appropriate error handling

### Interpreting Rule-Based Feedback
Rule-based feedback appears as inline suggestions or code actions. Common feedback patterns include:

#### Component Structure
When creating components, rules may suggest:
- Using `defineProps` and `defineEmits` with TypeScript interfaces
- Implementing proper loading and error states
- Adding appropriate ARIA attributes for accessibility
- Structuring templates for optimal performance

#### State Management
For state management, rules guide you toward:
- Proper Pinia store organization
- Error boundaries with automatic recovery
- Loading state management
- Data caching strategies

#### Performance Optimization
Performance-related suggestions include:
- Identifying unnecessary re-renders
- Recommending memoization patterns
- Suggesting lazy loading for components
- Optimizing computed property dependencies

**Section sources**
- [README.md](file://README.md#L253-L303)
- [examples/README.md](file://examples/README.md#L0-L30)

## Common Setup Issues and Troubleshooting

### Issue 1: Rules Not Appearing in Cursor
If rules don't appear after installation:

1. **Verify directory structure**: Ensure `.cursor/rules` exists in your project root
2. **Check file permissions**: Confirm the directory and files are readable
3. **Restart Cursor IDE**: Close and reopen Cursor to force rule reloading
4. **Validate project type**: Confirm you're working on a Vue 3 project (not Vue 2 or Nuxt)

### Issue 2: Incorrect Paths
Path-related issues commonly occur when:

- The `.cursor` directory is placed in a subdirectory rather than project root
- Case sensitivity issues on certain operating systems
- Special characters in the project path

**Solution**: Ensure the exact path `.cursor/rules` exists directly under your project root with proper casing.

### Issue 3: Missing Dependencies
While the rules themselves have no external dependencies, they work best with:

- TypeScript properly configured in your project
- Vue 3 with Composition API
- Vite as the build tool

If working without TypeScript, some type-related suggestions may be less effective.

### Issue 4: Rule Conflicts
In rare cases, rules might conflict with existing IDE settings:

1. Check Cursor IDE settings for conflicting code style rules
2. Disable other Vue-specific extensions temporarily
3. Test in a fresh Vue 3 + TypeScript project to isolate issues

The most common cause of non-functioning rules is incorrect directory placement. Always verify that `.cursor/rules` is directly in your project root directory.

**Section sources**
- [README.md](file://README.md#L304-L334)
- [docs/HOWTO_Cursor.md](file://docs/HOWTO_Cursor.md#L0-L4)

## Validation and Testing

### Rule Validation Tools
The package includes scripts to validate rule integrity:

```bash
# Check all rules are properly formatted
npm run lint:rules

# Analyze token usage for cost optimization
npm run measure:tokens
```

These scripts ensure rule files meet quality standards and help maintain optimal performance.

### Testing Configuration
To test the rules in action:

1. Create a test Vue 3 + TypeScript project:
```bash
npm create vue@latest test-app -- --template vue-ts
```

2. Copy the `.cursor` directory to the test project
3. Open the project in Cursor IDE
4. Begin coding to observe rule-based suggestions

The examples directory contains practical implementations of common patterns that demonstrate how the rules influence code structure and quality.

**Section sources**
- [package.json](file://package.json#L40-L45)
- [README.md](file://README.md#L253-L265)