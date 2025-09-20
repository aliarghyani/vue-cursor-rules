# 🤝 Contributing to Vue 3 Cursor Rules

We're thrilled that you want to contribute to Vue 3 Cursor Rules! This project thrives because of contributors like you who help make Vue 3 development better for everyone.

## 🎯 Ways to Contribute

### 🐛 **Report Bugs**
Found a bug? Help us fix it!
- Use our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
- Include reproduction steps and environment details
- Check existing issues first to avoid duplicates

### 💡 **Suggest Features**
Have an idea for improvement?
- Use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
- Explain the problem you're solving
- Provide clear use cases and examples

### 📝 **Improve Rules**
Help make our rules even better!
- Fix unclear or outdated rules
- Add missing patterns for common use cases
- Improve rule precision and effectiveness

### 📚 **Enhance Documentation**
Help others understand and use the rules!
- Fix typos and improve clarity
- Add missing examples
- Create tutorials and guides

### 🧪 **Add Examples**
Show the rules in action!
- Create real-world usage examples
- Build complete application showcases
- Demonstrate best practices

## 🛠️ Development Setup

### Prerequisites
- Node.js 16+ and npm
- Cursor IDE for testing
- Git for version control

### Quick Start
```bash
# 1. Fork and clone the repository
git clone https://github.com/aliarghyani/vue-cursor-rules.git
cd vue-cursor-rules

# 2. Install dependencies
npm install

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes
# ... edit files ...

# 5. Test your changes
npm run lint:rules
npm run measure:tokens

# 6. Test with sample app
cd samples/minimal-vue-app
npm install
npm run dev
# Test your rules in Cursor

# 7. Commit and push
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name

# 8. Create a Pull Request
```

## 📋 Rule Writing Guidelines

### ✅ **Rule Best Practices**

1. **Keep it concise**: Each rule file should be under 80 lines
2. **Be specific**: Use precise globs and clear "when to apply" conditions
3. **Provide examples**: Include code examples showing the pattern
4. **Focus on one thing**: Each rule should address a single concern
5. **Use imperative language**: Write clear, actionable instructions

### 📄 **Rule File Structure**

```markdown
# Rule Title

## When to Apply
- Clear conditions for when this rule should be used
- File patterns (e.g., `*.vue`, `composables/*.ts`)
- Project characteristics

## Guidelines

### Do This ✅
```typescript
// Good example with explanation
const user = ref<User | null>(null)
```

### Not This ❌
```typescript
// Bad example with explanation why
const user = ref(null)
```

## Key Principles
- Bullet point of important concepts
- Focus on maintainability and performance
- Consider accessibility and security

## Examples

### Basic Usage
```vue
<!-- Complete working example -->
```

### Advanced Pattern
```vue
<!-- More complex example -->
```
```

### 🎯 **Rule Categories**

- **`vue3/`** - Vue 3 specific patterns and anti-patterns
- **`typescript/`** - TypeScript best practices and type safety
- **`performance/`** - Performance optimization techniques
- **`accessibility/`** - WCAG compliance and inclusive design
- **`enterprise/`** - Error handling, logging, monitoring
- **`state/`** - Pinia and state management patterns
- **`ui-kits/`** - Framework-specific component patterns
- **`global/`** - Always-on development principles

## 🧪 Testing Your Changes

### 1. **Rule Validation**
```bash
# Check rule format and style
npm run lint:rules
```

### 2. **Token Usage Analysis**
```bash
# Measure impact on token consumption
npm run measure:tokens
```

### 3. **Manual Testing**
```bash
# Test with the sample application
cd samples/minimal-vue-app
npm install
npm run dev

# Open in Cursor and test your rules
cursor .
```

### 4. **Real Project Testing**
- Test your rules in a real Vue 3 project
- Verify they provide helpful suggestions
- Ensure they don't trigger on irrelevant files
- Check performance impact

## 📊 Quality Standards

### ✅ **Code Quality**
- All rules must be tested against the sample app
- Rules should be specific to avoid false positives
- Examples must be complete and runnable
- Documentation should be clear and comprehensive

### 🚀 **Performance**
- Rules should not significantly impact Cursor's response time
- Use specific file globs to avoid unnecessary loading
- Keep rule content focused and concise
- Measure token usage impact

### ♿ **Accessibility**
- All UI examples must be accessible
- Include ARIA patterns where appropriate
- Consider keyboard navigation and screen readers
- Follow WCAG 2.1 AA guidelines

## 🔄 Pull Request Process

### 1. **Before Submitting**
- [ ] Fork the repository and create a feature branch
- [ ] Write clear, focused commits with descriptive messages
- [ ] Test your changes thoroughly
- [ ] Update documentation if needed
- [ ] Run all validation scripts

### 2. **PR Requirements**
- [ ] Fill out the PR template completely
- [ ] Link related issues
- [ ] Include screenshots for UI changes
- [ ] Add tests for new functionality
- [ ] Ensure CI passes

### 3. **Review Process**
- Maintainers will review your PR within 48 hours
- Address feedback promptly and thoughtfully
- Keep PRs focused on a single feature or fix
- Be open to suggestions and improvements

## 🎨 Style Guidelines

### 📝 **Markdown Style**
- Use clear headings and consistent formatting
- Include emojis for visual organization
- Use code blocks with proper syntax highlighting
- Keep lines under 80 characters when possible

### 💻 **Code Examples**
- Use TypeScript for all examples
- Include proper imports and typing
- Show complete, working examples
- Explain complex patterns with comments

### 🗂️ **File Organization**
- Group related rules in appropriate directories
- Use descriptive file names
- Keep directory structure shallow
- Include README files for complex sections

## 🌟 Recognition

We appreciate all contributions! Contributors will be:

- ✨ **Listed in our Contributors section**
- 🎉 **Mentioned in release notes for significant contributions**
- 🏆 **Highlighted on social media**
- 💫 **Invited to join our contributor Discord channel**

## 🤔 Questions?

### Get Help
- 💬 **Discord**: [Join our community](https://discord.gg/vue-cursor-rules)
- 📧 **Email**: contribute@vue-cursor-rules.com
- 💡 **Discussions**: [GitHub Discussions](https://github.com/aliarghyani/vue-cursor-rules/discussions)

### Common Questions
- **"How do I know if my rule is good?"** - Test it on real projects and see if it provides helpful suggestions
- **"Can I modify existing rules?"** - Yes! Improvements to existing rules are very welcome
- **"What if my idea is too specific?"** - Start a discussion! We can help generalize it
- **"How do I handle breaking changes?"** - Follow semantic versioning and provide migration guides

## 📜 Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code. Please report unacceptable behavior to [conduct@vue-cursor-rules.com](mailto:conduct@vue-cursor-rules.com).

---

**Thank you for making Vue 3 development better for everyone! 🚀**

*Your contributions help thousands of developers write cleaner, more maintainable Vue 3 applications. Every improvement, no matter how small, makes a difference.*