# Contributing

We welcome contributions to the Markdown Documentation Viewer! This guide will help you get started.

## How to Contribute

There are many ways you can contribute:

### 1. Report Bugs

Found a bug? Please open an issue on GitHub with:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Browser and OS** information
- **Screenshots** if applicable

### 2. Suggest Features

Have an idea? We'd love to hear it!

Open an issue with:
- **Feature description** - What do you want to add?
- **Use case** - Why is this useful?
- **Examples** - How would it work?

### 3. Improve Documentation

Documentation can always be better:

- Fix typos or unclear explanations
- Add examples or use cases
- Improve code comments
- Translate to other languages

### 4. Submit Code

Ready to code? Here's how:

#### Step 1: Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/markdown-docs-viewer.git
cd markdown-docs-viewer
```

#### Step 2: Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/dark-mode`
- `fix/mobile-sidebar`
- `docs/improve-installation`

#### Step 3: Make Your Changes

Edit the relevant files:
- `index.html` - Structure
- `styles.css` - Styling
- `app.js` - Logic
- `docs/*.md` - Documentation

#### Step 4: Test Locally

```bash
# Serve locally
python -m http.server 8000

# Or use your preferred method
```

Test in multiple browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

#### Step 5: Commit Your Changes

Write clear commit messages:

```bash
git add .
git commit -m "Add dark mode toggle feature"

# Or for fixes:
git commit -m "Fix mobile sidebar not closing on link click"
```

Good commit messages:
- Start with a verb (Add, Fix, Update, Remove)
- Be specific and concise
- Reference issues if applicable (#123)

#### Step 6: Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- **Clear title** - What does this PR do?
- **Description** - Why is this change needed?
- **Testing** - How did you test it?
- **Screenshots** - For UI changes

## Code Style Guidelines

### JavaScript

```javascript
// Use ES6+ features
const myFunction = (param) => {
    // Use meaningful variable names
    const meaningfulName = param.value;
    
    // Add comments for complex logic
    return meaningfulName;
};

// Use async/await for promises
async function loadData() {
    const data = await fetch('api/data');
    return data.json();
}
```

### CSS

```css
/* Use CSS variables for theming */
:root {
    --primary-color: #0066cc;
}

/* Group related properties */
.element {
    /* Layout */
    display: flex;
    margin: 1rem;
    
    /* Typography */
    font-size: 1rem;
    color: var(--primary-color);
}

/* Use meaningful class names */
.sidebar-toggle { /* Good */ }
.st { /* Bad */ }
```

### Markdown

```markdown
# Use ATX-style headings (with #)

## Not underlined headings

- Use asterisks for unordered lists
- Not hyphens or plus signs

**Bold** and *italic* with asterisks
```

## File Organization

```
markdown-docs-viewer/
├── index.html          # Main entry point
├── styles.css          # All styles (keep organized)
├── app.js              # Application logic
├── toc.yml             # Table of contents
├── docs/               # Documentation content
│   ├── getting-started.md
│   └── ...
├── .editorconfig       # Editor settings
└── README.md           # Project readme
```

Keep it simple - don't add unnecessary files or dependencies!

## Testing Checklist

Before submitting a PR, verify:

- [ ] Code works in Chrome/Edge
- [ ] Code works in Firefox
- [ ] Code works in Safari
- [ ] Mobile responsive (test on device or dev tools)
- [ ] No console errors
- [ ] Search still works
- [ ] TOC navigation works
- [ ] Markdown renders correctly
- [ ] Code is commented where needed
- [ ] Follows existing code style

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of:

- Age, body size, disability
- Ethnicity, gender identity
- Experience level
- Nationality, personal appearance
- Race, religion
- Sexual identity and orientation

### Our Standards

**Positive behavior:**

✅ Being respectful of differing viewpoints

✅ Accepting constructive criticism gracefully

✅ Focusing on what's best for the community

✅ Showing empathy towards others

**Unacceptable behavior:**

❌ Trolling, insulting comments, personal attacks

❌ Public or private harassment

❌ Publishing others' private information

❌ Other unprofessional conduct

### Enforcement

Instances of unacceptable behavior may be reported to the project team. All complaints will be reviewed and investigated.

## Questions?

Not sure about something? Feel free to:

- Open an issue for discussion
- Ask in your Pull Request
- Check existing issues and PRs

## Recognition

All contributors will be recognized in the project README. Thank you for making this project better! 🎉

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the Markdown Documentation Viewer! 🚀
