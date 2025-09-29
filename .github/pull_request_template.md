# Pull Request

## Description

Brief description of what this PR does.

Fixes #(issue number)

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Code style/formatting changes
- [ ] Refactoring (no functional changes)
- [ ] Performance improvements
- [ ] Test additions or updates
- [ ] Build process or tooling changes

## Changes Made

### Added
- List new features or files added

### Changed
- List modified functionality

### Removed
- List deleted functionality

### Fixed
- List bug fixes

## Testing

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

## Rule Validation (if applicable)

If this PR includes new or modified rules:

- [ ] Rules follow the established format and style
- [ ] Rules are concise (ideally < 4 KB) and ASCII-only
- [ ] Rules include clear "when to apply" conditions
- [ ] Rules have been tested against a sample application
- [ ] Rules use precise globs to avoid irrelevant loading

### Rule Testing Commands
```bash
# Validate rule format
npm run lint:rules

# Optional: check sizes and encoding
npm run check:rules

# Measure token usage impact
npm run measure:tokens
```

## Screenshots

If applicable, add screenshots to help reviewers understand the changes.

**Before:**
<!-- Screenshot or description of before state -->

**After:**
<!-- Screenshot or description of after state -->

## Related Issues

- Closes #[issue number]
- Related to #[issue number]
- Depends on #[issue number]

## Documentation

- [ ] I have updated the README if needed
- [ ] I have updated relevant documentation files
- [ ] I have added inline code comments for complex logic
- [ ] I have updated examples if the API changed

## Accessibility (if UI changes)

- [ ] Keyboard navigation tested
- [ ] Screen reader labels verified
- [ ] Color contrast verified

## Performance (if applicable)

- [ ] Measured performance impact
- [ ] Considered bundle size impact
- [ ] Tested with realistic datasets (if applicable)

## Additional Notes

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

---

Thanks for contributing to Vue 3 Cursor Rules!
