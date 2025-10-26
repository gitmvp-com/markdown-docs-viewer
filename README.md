# Markdown Documentation Viewer MVP

A simple, lightweight documentation viewer built with vanilla JavaScript, inspired by OutSystems/docs-odc.

## Features

- 📝 **Markdown Rendering**: Uses marked.js for fast and accurate Markdown parsing
- 🗂️ **YAML Table of Contents**: Structured navigation from `toc.yml`
- 🔍 **Search Functionality**: Quick search through documentation
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Syntax Highlighting**: Code blocks with Prism.js
- 🚀 **No Build Required**: Pure HTML/CSS/JavaScript

## Quick Start

1. Clone this repository:
   ```bash
   git clone https://github.com/gitmvp-com/markdown-docs-viewer.git
   cd markdown-docs-viewer
   ```

2. Serve the files with any static server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser to `http://localhost:8000`

## Project Structure

```
markdown-docs-viewer/
├── index.html              # Main HTML file
├── styles.css              # Styling
├── app.js                  # Application logic
├── toc.yml                 # Table of contents
├── docs/                   # Markdown documentation files
│   ├── getting-started.md
│   ├── installation.md
│   ├── features.md
│   └── contributing.md
├── .editorconfig          # Editor configuration
└── README.md              # This file
```

## Adding Documentation

1. Create Markdown files in the `docs/` directory
2. Update `toc.yml` to include your new pages:

```yaml
- title: Getting Started
  href: docs/getting-started.md
- title: Installation
  href: docs/installation.md
  topics:
    - title: Prerequisites
      href: docs/installation/prerequisites.md
```

## Configuration

Edit `toc.yml` to customize your documentation structure. The TOC supports:
- Nested topics (unlimited depth)
- Custom titles
- Direct links to Markdown files

## Technologies Used

- **Marked.js** (v9.1.6): Markdown parser and compiler
- **js-yaml** (v4.1.0): YAML parser
- **Prism.js** (v1.29.0): Syntax highlighting
- Vanilla JavaScript (ES6+)
- CSS3 with CSS Grid and Flexbox

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Inspired By

This project is an MVP version inspired by [OutSystems/docs-odc](https://github.com/OutSystems/docs-odc), simplified for easy deployment and maintenance.

## License

MIT License - Feel free to use this for your own documentation needs!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
