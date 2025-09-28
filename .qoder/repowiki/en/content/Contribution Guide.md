# Contribution Guide

<cite>
**Referenced Files in This Document**   
- [CONTRIBUTING.md](file://CONTRIBUTING.md)
- [package.json](file://package.json)
- [scripts/lint-rules.mjs](file://scripts/lint-rules.mjs)
- [scripts/measure-tokens.mjs](file://scripts/measure-tokens.mjs)
- [examples/basic-component.vue](file://examples/basic-component.vue)
- [examples/form-component.vue](file://examples/form-component.vue)
- [examples/useApi.ts](file://examples/useApi.ts)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Development Environment Setup](#development-environment-setup)
3. [Rule Writing Guidelines](#rule-writing-guidelines)
4. [Testing Procedures](#testing-procedures)
5. [Token Discipline and Budget-Conscious Development](#token-discipline-and-budget-conscious-development)
6. [Pull Request Process](#pull-request-process)
7. [Code Review Expectations](#code-review-expectations)
8. [Backward Compatibility and Versioning](#backward-compatibility-and-versioning)
9. [Examples of Well-Structured Rule Additions](#examples-of-well-structured-rule-additions)
10. [Community Standards](#community-standards)

## Introduction
This guide provides comprehensive instructions for contributing to the vue-cursor-rules repository. It covers the full contribution lifecycle from environment setup to pull request submission, with detailed guidance on rule creation, testing, and community standards. The goal is to make contributions accessible to first-time contributors while providing thorough technical direction for experienced developers.

The vue-cursor-rules project enhances Vue 3 development in the Cursor IDE by providing production-ready rules that promote best practices in TypeScript, performance, accessibility, and state management. Your contributions help thousands of developers write cleaner, more maintainable Vue 3 applications.

**Section sources**
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L1-L20)

## Development Environment Setup
To begin contributing, set up your local development environment following these steps:

### Prerequisites
- Node.js 16+ and npm (specified in package.json engines)
- Git for version control
- Cursor IDE for testing rule effectiveness

### Setup Process
```bash
# Clone the repository
git clone https://github.com/aliarghyani/vue-cursor-rules.git
cd vue-cursor-rules

# Install dependencies
npm install

# Create a feature branch
git checkout -b feature/your-feature-name
```

The repository includes scripts to validate contributions. The `lint:rules` script checks rule format and style, while `measure:tokens` analyzes token consumption impact. These are defined in package.json and executed via npm scripts.

After making changes, test them using the provided examples directory which contains real-world Vue components and composables that demonstrate proper patterns.

**Section sources**
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L45-L75)
- [package.json](file://package.json#L40-L60)
- [examples/basic-component.vue](file://examples/basic-component.vue)
- [examples/form-component.vue](file://examples/form-component.vue)
- [examples/useApi.ts](file://examples/useApi.ts)

## Rule Writing Guidelines
Follow these guidelines when creating or modifying rules to ensure consistency and effectiveness.

### File Structure
Each rule must follow the standardized Markdown structure:
- **Rule Title**: Clear, descriptive title
- **When to Apply**: Conditions and file patterns (e.g., `*.vue`, `composables/*.ts`)
- **Guidelines**: "Do This" (✅) and "Not This" (❌) examples
- **Key Principles**: Bullet points of important concepts
- **Examples**: Complete working code samples

Rules should be focused on a single concern and kept under 80 lines for conciseness.

### Naming Conventions and Categories
Organize rules into appropriate categories using the established directory structure:
- `vue3/` - Vue 3 specific patterns
- `typescript/` - TypeScript best practices
- `performance/` - Optimization techniques
- `accessibility/` - WCAG compliance
- `enterprise/` - Error handling and monitoring
- `state/` - Pinia and state management
- `ui-kits/` - Framework-specific components
- `global/` - Always-on principles

Use imperative language and provide complete, runnable examples with proper TypeScript typing and imports.

**Section sources**
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L100-L180)

## Testing Procedures
Ensure your rule additions don't conflict with existing ones through comprehensive testing.

### Automated Validation
Run the built-in validation scripts:
```bash
# Check rule format and style
npm run lint:rules

# Measure token usage impact
npm run measure:tokens
```

The `lint-rules.mjs` script validates all `.mdc` files in `.cursor/rules`, ensuring no file exceeds the maximum line limit. The `measure-tokens.mjs` script calculates total character count across rules, promoting compact rulesets.

### Manual Testing
Test rules in context using real examples:
```bash
# Use the provided examples
cd examples
# Test rule application on basic-component.vue, form-component.vue, and useApi.ts
```

Verify that rules:
- Provide helpful suggestions without false positives
- Don't trigger on irrelevant files
- Maintain good performance
- Work with both simple and complex patterns

Test edge cases and ensure rules handle various implementation approaches appropriately.

**Section sources**
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L185-L220)
- [scripts/lint-rules.mjs](file://scripts/lint-rules.mjs)
- [scripts/measure-tokens.mjs](file://scripts/measure-tokens.mjs)
- [examples/basic-component.vue](file://examples/basic-component.vue)
- [examples/form-component.vue](file://examples/form-component.vue)
- [examples/useApi.ts](file://examples/useApi.ts)

## Token Discipline and Budget-Conscious Development
While the COST_PLAYBOOK.md file was not found in the repository, the project demonstrates budget-conscious development through its token management practices.

The `measure-tokens.mjs` script emphasizes keeping rulesets compact and preferring agent-select rules. This approach minimizes token consumption in the Cursor IDE, ensuring rules don't negatively impact performance or exceed token budgets.

Key principles for token discipline:
- Keep rule content focused and concise
- Use specific file globs to avoid unnecessary loading
- Prefer targeted rules over broad, comprehensive ones
- Regularly audit total character count across rules
- Consider the cognitive load and processing requirements of each rule

The linting process helps maintain quality by preventing excessively large rule files, with the current configuration rejecting any file over 1000 lines.

**Section sources**
- [scripts/measure-tokens.mjs](file://scripts/measure-tokens.mjs)
- [scripts/lint-rules.mjs](file://scripts/lint-rules.mjs)

## Pull Request Process
Follow this structured process when submitting your contributions.

### Preparation Checklist
Before submitting:
- [ ] Fork the repository and create a feature branch
- [ ] Make focused changes addressing a single issue or feature
- [ ] Write clear, descriptive commit messages
- [ ] Test changes thoroughly using both automated and manual methods
- [ ] Run all validation scripts (`npm run validate`)
- [ ] Update documentation if needed

### Submission Requirements
When creating your pull request:
- Fill out the PR template completely
- Link to related issues or discussions
- Include explanations of changes and their benefits
- Reference the relevant rule categories
- Note any potential compatibility considerations

Maintainers will review PRs within 48 hours. Be prepared to address feedback and make improvements based on reviewer suggestions.

**Section sources**
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L225-L260)

## Code Review Expectations
Contributions are evaluated based on several key criteria:

### Quality Standards
- **Relevance**: Rules must address genuine Vue 3 development challenges
- **Clarity**: Documentation should be comprehensive and easy to understand
- **Specificity**: Rules should have well-defined application conditions
- **Completeness**: Examples must be runnable and include necessary context

### Technical Requirements
- All rules must pass the linting and token measurement scripts
- No degradation of Cursor IDE performance
- Proper categorization according to established taxonomy
- Consistent formatting and style adherence

Reviewers may request revisions to improve precision, reduce false positives, or enhance documentation. Be open to feedback and willing to iterate on your contributions.

**Section sources**
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L225-L260)

## Backward Compatibility and Versioning
The project follows semantic versioning as indicated by the release scripts in package.json (`release`, `release:minor`, `release:major`).

When making changes:
- **Patch releases** (bug fixes): Maintain full backward compatibility
- **Minor releases** (new features): Add functionality without breaking changes
- **Major releases** (breaking changes): Introduce incompatible API changes

For rule modifications:
- Avoid removing existing rules unless absolutely necessary
- Deprecate problematic patterns gradually
- Provide migration guidance for significant changes
- Ensure new rules don't conflict with established patterns

When introducing potentially breaking changes, discuss them in GitHub Discussions first to gather community feedback.

**Section sources**
- [package.json](file://package.json#L55-L60)

## Examples of Well-Structured Rule Additions
The examples directory provides models for effective rule creation.

### Basic Component Pattern
The `basic-component.vue` example demonstrates:
- Proper TypeScript interfaces for props
- Correct use of `withDefaults` and `defineEmits`
- Accessible template structure with appropriate attributes
- Scoped styling with clean class organization

### Form Handling with Validation
The `form-component.vue` example shows:
- Reactive form state management
- Computed properties for form validity
- Watchers for real-time validation
- Proper error handling and user feedback
- Accessibility considerations in form controls

### Composable Function
The `useApi.ts` example illustrates:
- Generic typing for reusable functions
- Proper loading and error states
- Async operation handling with try/catch
- Clean return object structure
- Readonly exposure of internal state

These examples serve as templates for creating rules that promote similar best practices.

**Section sources**
- [examples/basic-component.vue](file://examples/basic-component.vue)
- [examples/form-component.vue](file://examples/form-component.vue)
- [examples/useApi.ts](file://examples/useApi.ts)

## Community Standards
Contributors are expected to adhere to the project's Code of Conduct, which follows the Contributor Covenant. This ensures a welcoming, respectful environment for all participants.

### Recognition
Contributors receive recognition through:
- Listing in the project's contributors section
- Mention in release notes for significant contributions
- Social media highlights
- Invitation to the contributor Discord channel

### Support and Collaboration
Get help and collaborate with the community through:
- **Discord**: Real-time discussion and support
- **GitHub Discussions**: Topic-based conversations
- **Email**: Direct communication for contribution questions

The project welcomes all contribution types: bug reports, feature suggestions, rule improvements, documentation enhancements, and example additions.

**Section sources**
- [CONTRIBUTING.md](file://CONTRIBUTING.md#L265-L280)