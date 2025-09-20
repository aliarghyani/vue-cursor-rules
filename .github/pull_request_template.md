# 🚀 Pull Request

## 📝 Description

Brief description of what this PR does.

Fixes #(issue number)

## 🎯 Type of Change

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Code style/formatting changes
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvements
- [ ] 🧪 Test additions or updates
- [ ] 🔧 Build process or tooling changes

## 🔄 Changes Made

### Added
- List new features or files added

### Changed
- List modified functionality

### Removed
- List deleted functionality

### Fixed
- List bug fixes

## 🧪 Testing

### Manual Testing
- [ ] I have tested this change manually
- [ ] I have tested on multiple browsers (if applicable)
- [ ] I have tested responsive behavior (if applicable)

### Automated Testing
- [ ] I have added unit tests for new functionality
- [ ] I have added integration tests where appropriate
- [ ] All existing tests pass
- [ ] New tests pass

### Test Coverage
- [ ] Code coverage has not decreased
- [ ] Critical paths are covered by tests

## 📋 Rule Validation

If this PR includes new or modified rules:

- [ ] Rules follow the established format and style
- [ ] Rules are under 80 lines each (as per guidelines)
- [ ] Rules include clear "when to apply" conditions
- [ ] Rules have been tested against the sample application
- [ ] Rules use precise globs to avoid irrelevant loading

### Rule Testing Commands
```bash
# Validate rule format
npm run lint:rules

# Test rules against sample app
cd samples/minimal-vue-app
# Test your changes here

# Measure token usage impact
npm run measure:tokens
```

## 📱 Screenshots

If applicable, add screenshots to help reviewers understand the changes.

**Before:**
<!-- Screenshot or description of before state -->

**After:**
<!-- Screenshot or description of after state -->

## 🔗 Related Issues

- Closes #[issue number]
- Related to #[issue number]
- Depends on #[issue number]

## 📖 Documentation

- [ ] I have updated the README if needed
- [ ] I have updated relevant documentation files
- [ ] I have added inline code comments for complex logic
- [ ] I have updated examples if the API changed

## ♿ Accessibility

If this change affects user interface:

- [ ] I have tested with keyboard navigation
- [ ] I have tested with screen readers
- [ ] I have verified color contrast compliance
- [ ] I have added appropriate ARIA labels

## 🌍 Internationalization

If this change affects user-facing text:

- [ ] All text is externalized for translation
- [ ] Text changes are documented
- [ ] I have considered RTL language support

## 🔐 Security

If this change affects security:

- [ ] I have reviewed for potential security vulnerabilities
- [ ] I have followed secure coding practices
- [ ] I have not exposed sensitive information

## 📊 Performance

If this change affects performance:

- [ ] I have measured performance impact
- [ ] I have optimized critical paths
- [ ] I have considered bundle size impact
- [ ] I have tested with large datasets (if applicable)

## 💭 Additional Notes

### Breaking Changes
If this is a breaking change, describe:
- What breaks
- How users should migrate
- Migration guide location

### Deployment Notes
Any special considerations for deployment:
- Database migrations needed
- Environment variable changes
- Cache clearing required

### Future Considerations
- Known limitations of this approach
- Future improvements planned
- Technical debt introduced (if any)

## ✅ Checklist

### Code Quality
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings or errors

### Collaboration
- [ ] I have made my PR title descriptive and clear
- [ ] I have provided sufficient detail in this description
- [ ] I have linked relevant issues
- [ ] I have requested review from appropriate team members

### Testing
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published

## 👥 Reviewers

Please tag relevant reviewers:
- @maintainer1 - for rule changes
- @maintainer2 - for documentation changes  
- @maintainer3 - for testing changes

---

**Thanks for contributing to Vue 3 Cursor Rules! 🎉**

Your contribution helps thousands of Vue developers write better code. We appreciate your effort to make the Vue ecosystem even better!