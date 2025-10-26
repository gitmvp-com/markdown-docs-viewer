// Documentation Viewer Application

class DocsViewer {
    constructor() {
        this.toc = [];
        this.currentDoc = null;
        this.searchIndex = [];
        this.init();
    }

    async init() {
        // Load table of contents
        await this.loadTOC();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Handle initial load (check URL hash)
        this.handleInitialLoad();
    }

    async loadTOC() {
        try {
            const response = await fetch('toc.yml');
            const yamlText = await response.text();
            this.toc = jsyaml.load(yamlText);
            this.renderTOC();
            this.buildSearchIndex();
        } catch (error) {
            console.error('Error loading TOC:', error);
            document.getElementById('toc').innerHTML = 
                '<div class="error-message">Failed to load table of contents.</div>';
        }
    }

    renderTOC() {
        const tocElement = document.getElementById('toc');
        tocElement.innerHTML = '';
        
        const tocList = this.createTOCList(this.toc);
        tocElement.appendChild(tocList);
    }

    createTOCList(items, level = 0) {
        const ul = document.createElement('div');
        
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'toc-item';
            
            if (item.title && !item.href) {
                // Section title without link
                const title = document.createElement('div');
                title.className = 'toc-title';
                title.textContent = item.title;
                div.appendChild(title);
            } else if (item.href) {
                // Clickable link
                const link = document.createElement('a');
                link.className = 'toc-link';
                link.href = '#' + item.href;
                link.textContent = item.title || this.extractTitleFromPath(item.href);
                link.onclick = (e) => {
                    e.preventDefault();
                    this.loadDocument(item.href);
                    this.setActiveLink(link);
                };
                div.appendChild(link);
            }
            
            // Handle nested topics
            if (item.topics && item.topics.length > 0) {
                const nestedList = this.createTOCList(item.topics, level + 1);
                nestedList.className = 'toc-group';
                div.appendChild(nestedList);
            }
            
            ul.appendChild(div);
        });
        
        return ul;
    }

    extractTitleFromPath(path) {
        // Extract filename and convert to title
        const filename = path.split('/').pop().replace('.md', '');
        return filename
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    async loadDocument(path) {
        const contentElement = document.getElementById('content');
        contentElement.innerHTML = '<div class="loading-spinner">Loading...</div>';
        
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Document not found');
            }
            
            const markdown = await response.text();
            const html = marked.parse(markdown);
            contentElement.innerHTML = html;
            
            // Update URL hash
            window.location.hash = path;
            this.currentDoc = path;
            
            // Highlight code blocks
            this.highlightCode();
            
            // Scroll to top
            contentElement.scrollTop = 0;
            
            // Close sidebar on mobile
            this.closeSidebarOnMobile();
        } catch (error) {
            console.error('Error loading document:', error);
            contentElement.innerHTML = 
                `<div class="error-message">
                    <h2>Document Not Found</h2>
                    <p>The requested document "${path}" could not be loaded.</p>
                    <p>Please select another topic from the sidebar.</p>
                </div>`;
        }
    }

    highlightCode() {
        document.querySelectorAll('pre code').forEach((block) => {
            Prism.highlightElement(block);
        });
    }

    setActiveLink(activeLink) {
        // Remove active class from all links
        document.querySelectorAll('.toc-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    buildSearchIndex() {
        this.searchIndex = [];
        this.indexTOCItems(this.toc);
    }

    indexTOCItems(items) {
        items.forEach(item => {
            if (item.href) {
                this.searchIndex.push({
                    title: item.title || this.extractTitleFromPath(item.href),
                    href: item.href
                });
            }
            if (item.topics) {
                this.indexTOCItems(item.topics);
            }
        });
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Sidebar toggle for mobile
        const toggleBtn = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('sidebar');
        
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            }
        });

        // Handle browser back/forward
        window.addEventListener('hashchange', () => {
            this.handleHashChange();
        });
    }

    handleSearch(query) {
        if (!query || query.length < 2) {
            this.renderTOC();
            return;
        }

        const results = this.searchIndex.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        const tocElement = document.getElementById('toc');
        tocElement.innerHTML = '';

        if (results.length === 0) {
            tocElement.innerHTML = '<div class="loading">No results found</div>';
            return;
        }

        const resultsContainer = document.createElement('div');
        results.forEach(result => {
            const div = document.createElement('div');
            div.className = 'toc-item';
            
            const link = document.createElement('a');
            link.className = 'toc-link';
            link.href = '#' + result.href;
            link.textContent = result.title;
            link.onclick = (e) => {
                e.preventDefault();
                this.loadDocument(result.href);
                this.setActiveLink(link);
            };
            
            div.appendChild(link);
            resultsContainer.appendChild(div);
        });

        tocElement.appendChild(resultsContainer);
    }

    handleInitialLoad() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            this.loadDocument(hash);
        }
    }

    handleHashChange() {
        const hash = window.location.hash.slice(1);
        if (hash && hash !== this.currentDoc) {
            this.loadDocument(hash);
        }
    }

    closeSidebarOnMobile() {
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('open');
        }
    }
}

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new DocsViewer();
    });
} else {
    new DocsViewer();
}
