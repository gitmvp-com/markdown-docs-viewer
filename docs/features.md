# Features

The Markdown Documentation Viewer comes packed with essential features for creating professional documentation.

## Markdown Support

Full Markdown syntax is supported via [marked.js](https://marked.js.org/):

### Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4

### Text Formatting

**Bold text** and *italic text* and ~~strikethrough~~

You can also use `inline code` for technical terms.

### Lists

Unordered lists:
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

Ordered lists:
1. First item
2. Second item
3. Third item

### Links

[External link](https://github.com)

[Internal link](getting-started.md)

### Code Blocks

JavaScript:
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('World');
```

Python:
```python
def greet(name):
    print(f"Hello, {name}!")

greet("World")
```

Bash:
```bash
#!/bin/bash
echo "Hello, World!"
```

### Blockquotes

> This is a blockquote. It can be used for important notes,
> quotes, or callouts to grab the reader's attention.

### Tables

| Feature | Supported | Notes |
|---------|-----------|-------|
| Markdown | ✅ Yes | Full support |
| YAML TOC | ✅ Yes | Easy to edit |
| Search | ✅ Yes | Client-side |
| Syntax Highlighting | ✅ Yes | Via Prism.js |

### Horizontal Rules

---

Use three dashes to create a horizontal rule.

## Table of Contents

The TOC is defined in `toc.yml` using a simple YAML structure:

```yaml
- title: Section Title
  href: docs/section.md
  topics:
    - title: Subsection
      href: docs/subsection.md
```

Features:
- **Nested navigation** - Unlimited depth
- **Active state** - Current page is highlighted
- **Responsive** - Collapsible sidebar on mobile

## Search Functionality

The search feature:

✅ **Real-time filtering** - Results as you type

✅ **Case-insensitive** - Finds matches regardless of capitalization

✅ **Client-side** - No server required, works offline

✅ **Fast** - Instant results

Just type in the search box at the top of the page!

## Syntax Highlighting

Code blocks are automatically highlighted using [Prism.js](https://prismjs.com/).

Supported languages (currently loaded):
- JavaScript
- CSS
- YAML
- Bash
- JSON

You can add more languages by including additional Prism components in `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-python.min.js"></script>
```

## Responsive Design

The viewer is fully responsive:

**Desktop** (> 768px)
- Sidebar always visible
- Wide content area
- Optimal reading experience

**Mobile/Tablet** (≤ 768px)
- Collapsible sidebar
- Toggle button
- Full-width content
- Touch-friendly navigation

## Performance

⚡ **Fast Loading** - Minimal dependencies

⚡ **CDN-hosted Libraries** - Fast global delivery

⚡ **No Build Step** - Instant updates

⚡ **Client-side Rendering** - No server processing

## Browser Support

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Options

### Styling

All styles are in `styles.css` with CSS variables for easy theming:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #f0f4f8;
    --text-color: #333;
    /* ... more variables */
}
```

### Markdown Extensions

You can configure marked.js options in `app.js`:

```javascript
marked.setOptions({
    breaks: true,
    gfm: true,
    // ... more options
});
```

### Custom JavaScript

Add your own functionality by extending the `DocsViewer` class in `app.js`.

## What's Not Included (Intentionally)

To keep this MVP simple:

❌ Authentication - No login system

❌ Server-side Rendering - Client-side only

❌ Build Process - Pure static files

❌ Database - No backend

❌ Content Management - Edit files directly

This makes deployment and maintenance incredibly simple!

## Coming Soon

Potential enhancements for future versions:

- Dark mode toggle
- Print-friendly styling
- PDF export
- Copy code button
- Version selector
- Edit on GitHub links

## Technical Stack

The viewer uses:

- **[Marked.js](https://marked.js.org/)** v9.1.6 - Markdown parser
- **[js-yaml](https://github.com/nodeca/js-yaml)** v4.1.0 - YAML parser
- **[Prism.js](https://prismjs.com/)** v1.29.0 - Syntax highlighting
- **Vanilla JavaScript** - ES6+ features
- **CSS Grid & Flexbox** - Modern layout
- **CSS Variables** - Easy theming

No framework overhead, just the essentials!
