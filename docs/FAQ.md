# ❓ Frequently Asked Questions

Get answers to common questions about Vue 3 Cursor Rules.


### Q: Do I need to know Vue 3 to use these rules?
**A:** Basic Vue 3 knowledge helps, but the rules nudge you toward best practices as you code. If you’re new, start with the [official Vue 3 guide](https://vuejs.org/guide/) and use these rules to accelerate.

### Q: Can I use this with Vue 2 projects?
**A:** No. These rules target Vue 3.4+ with the Composition API.

### Q: Do I need TypeScript?
**A:** Not required, but strongly recommended. The rules shine with TypeScript.

### Q: What if I’m using Nuxt?
**A:** The rules focus on plain Vue 3 apps (no Nuxt/SSR). Nuxt has its own patterns.

## 🧩 Technical Questions

### Q: Why aren’t the rules working in my IDE?
**A:** Use Cursor IDE and ensure `.cursor/rules/` is in your project root.

### Q: Can I disable specific rules?
**A:** Yes. Delete or rename specific `.mdc` files inside `.cursor/rules/` (e.g., remove `tailwind-patterns.mdc` if you don’t use Tailwind). The rules are modular.

### Q: How do I add custom rules?
**A:** Add new `.mdc` files in `.cursor/rules/` following the existing format. See [CONTRIBUTING.md](../CONTRIBUTING.md).

### Q: Are the rules compatible with my UI framework?
**A:** The core is UI‑agnostic. Use optional adapter snippets for common kits (Vuetify, Quasar, Element Plus, Tailwind/Headless) only when needed.

### Q: Do the rules work with my build tool?
**A:** Yes. They focus on Vue code patterns, not build configs (works with Vite, etc.).

## 🧠 Usage & Best Practices

### Q: Should I use these rules for every Vue 3 project?
**A:** They’re optimized for production apps that value maintainability and consistency. For quick prototypes, you can selectively use files.

### Q: How do I know if the rules are helping?
**A:** Expect faster scaffolding, more consistent patterns, fewer foot‑guns in reactivity/typing, and clearer testing approaches.

### Q: For junior and senior devs?
**A:** Juniors learn good habits; seniors speed up routine tasks and enforce team consistency.

## 🛠️ Customization

### Q: Can I modify the rules for my team?
**A:** Yes. Fork and tailor the files to your standards. Keep them small and focused.

### Q: How do I keep custom rules updated?
**A:** Maintain a branch for customizations; periodically rebase/merge from upstream; test before rollout.

### Q: Can I contribute improvements back?
**A:** Gladly. See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## 💸 Performance & Cost

### Q: Do these rules increase costs?
**A:** The rules promote token‑efficient workflows (micro‑changes, reuse, batching). Keep prompts specific and incremental to reduce tokens.

## 🎨 Framework‑Specific

### Q: I’m using Vuetify. Any setup?
**A:** No rule‑level setup. Use the neutral core and apply Vuetify adapter snippets when building Vuetify components.

### Q: Tailwind CSS?
**A:** Optional. See `tailwind-patterns.mdc` for copy‑ready examples. There’s no auto‑detection.

### Q: Can I mix UI frameworks?
**A:** Possible, but not recommended. Prefer one primary kit for consistency.

## 🔒 Security & ♿ Accessibility

### Q: Do the rules help with security?
**A:** They include basic reminders and examples (XSS prevention, input validation, safer fetch patterns). They are not a security library.

### Q: What accessibility level do the rules target?
**A:** They encourage good practices (semantic HTML, ARIA, keyboard navigation), but do not guarantee compliance by themselves.

## 🧪 Testing

### Q: What testing setup is recommended?
**A:** Use your preferred testing framework when you add it to your project. The rules include general component/composable testing patterns you can adapt.

## 🧭 Troubleshooting

- Too many suggestions? Remove unused rule files, keep prompts specific, and prefer incremental tasks.
- Conflicts with your style? Adopt gradually, tweak files to match your conventions.
- TypeScript noise? Ensure your `tsconfig.json` is strict but appropriate for your repo.

## 🤝 Community & Updates

- Questions: GitHub Discussions
- Bugs/Features: GitHub Issues
- Contributions: See CONTRIBUTING.md
- License: MIT
