# Installation

Getting started with the Markdown Documentation Viewer is incredibly simple. No complex setup, no build tools, just static files.

## Prerequisites

You only need:

- A web browser (Chrome, Firefox, Safari, Edge)
- A simple HTTP server (for local development)
- A text editor

That's it! No Node.js, no Python, no Ruby required (though you can use them to serve files).

## Quick Start

### Step 1: Get the Files

Clone or download this repository:

```bash
git clone https://github.com/gitmvp-com/markdown-docs-viewer.git
cd markdown-docs-viewer
```

### Step 2: Serve the Files

You need a simple HTTP server because browsers block file:// requests for security.

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js**
```bash
# Using npx (comes with npm)
npx serve

# Or install http-server globally
npm install -g http-server
http-server -p 8000
```

**Option 3: PHP**
```bash
php -S localhost:8000
```

**Option 4: VS Code Extension**

Install the "Live Server" extension in VS Code and click "Go Live" in the status bar.

### Step 3: Open in Browser

Navigate to:
```
http://localhost:8000
```

You should see the documentation viewer with the sidebar navigation and this content!

## Adding Your Own Documentation

### 1. Create Markdown Files

Add your documentation as `.md` files in the `docs/` folder:

```
docs/
├── getting-started.md
├── guide.md
├── api-reference.md
└── tutorials/
    ├── tutorial-1.md
    └── tutorial-2.md
```

### 2. Update the Table of Contents

Edit `toc.yml` to include your new pages:

```yaml
- title: Getting Started
  href: docs/getting-started.md

- title: User Guide
  href: docs/guide.md

- title: Tutorials
  topics:
    - title: Tutorial 1
      href: docs/tutorials/tutorial-1.md
    - title: Tutorial 2
      href: docs/tutorials/tutorial-2.md

- title: API Reference
  href: docs/api-reference.md
```

### 3. Refresh and View

Just refresh your browser! No build step needed.

## Deployment

### GitHub Pages

1. Push your repository to GitHub
2. Go to Settings → Pages
3. Select your main branch
4. Your docs will be live at `https://yourusername.github.io/your-repo/`

### Netlify

1. Connect your GitHub repository
2. No build command needed
3. Publish directory: `/` (root)
4. Deploy!

### Vercel

Same as Netlify - just connect and deploy. No configuration needed.

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0066cc;  /* Change this */
    --secondary-color: #f0f4f8;
    /* ... more variables */
}
```

### Adding a Logo

Replace the emoji in `index.html`:

```html
<h1 class="logo">📚 Docs Viewer</h1>
```

With an image:

```html
<h1 class="logo">
    <img src="logo.png" alt="Logo"> My Docs
</h1>
```

### Custom Domain

Just point your domain to your hosting provider (GitHub Pages, Netlify, etc.) following their instructions.

## Troubleshooting

**Problem**: Markdown files won't load

**Solution**: Make sure you're using an HTTP server, not opening files directly with `file://`

---

**Problem**: Table of contents is empty

**Solution**: Check that `toc.yml` is valid YAML syntax. Use a YAML validator online if needed.

---

**Problem**: Syntax highlighting doesn't work

**Solution**: Ensure you have internet connection (Prism.js loads from CDN)

## Next Steps

Now that you have it installed, explore the [Features](features.md) to see everything you can do!
