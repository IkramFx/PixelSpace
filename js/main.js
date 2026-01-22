// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function () {
    // Inisialisasi modul produk
    if (typeof initProducts === 'function') {
        initProducts();
    }

    // Inisialisasi modul auth
    if (typeof initAuth === 'function') {
        initAuth();
    }

    // Setup navigation
    setupNavigation();

    // Setup search functionality
    setupSearch();

    // Setup contact form
    setupContactForm();

    // Setup mobile menu
    setupMobileMenu();
});

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo');

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href').substring(1);

            // Jika klik logo atau home
            if (targetPage === 'home' || this.textContent === 'Home') {
                showHomePage();
            } else {
                navigateToPage(targetPage);
            }

            // Update active link
            navLinks.forEach(a => {
                a.classList.remove('active');
            });
            this.classList.add('active');

            // Close mobile menu if open
            const mobileMenu = document.getElementById('navLinks');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Logo click event
    if (logo) {
        logo.addEventListener('click', function (e) {
            e.preventDefault();
            showHomePage();

            // Update active link
            navLinks.forEach(a => {
                a.classList.remove('active');
            });
            if (navLinks.length > 0) {
                navLinks[0].classList.add('active');
            }
        });
    }
}

// Show home page
function showHomePage() {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });

    const productDetailSection = document.getElementById('productDetail');
    if (productDetailSection) {
        productDetailSection.classList.add('hidden');
    }

    // Show home page (products section)
    const productsSection = document.querySelector('#products').parentElement;
    if (productsSection) {
        productsSection.classList.remove('hidden');
    }
}

// Navigate to other pages
function navigateToPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });

    const productDetailSection = document.getElementById('productDetail');
    if (productDetailSection) {
        productDetailSection.classList.add('hidden');
    }

    // Show target page
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.remove('hidden');

        // Jika halaman videos, render ulang video products
        if (pageName === 'videos') {
            renderVideoProducts();
        }
        // Jika halaman photos, render ulang photo products
        else if (pageName === 'photos') {
            renderPhotoProducts();
        }
    }
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchBtn && searchInput) {
        // Search button click
        searchBtn.addEventListener('click', function () {
            performSearch();
        });

        // Enter key in search input
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Real-time search (optional)
        searchInput.addEventListener('input', function () {
            // Jika ingin search real-time, aktifkan kode di bawah
            // performSearch();
        });
    }
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const query = searchInput.value.trim();

    if (query.length === 0) {
        // Jika search kosong, tampilkan semua produk
        if (typeof getFilteredProducts === 'function' && typeof renderProducts === 'function') {
            renderProducts(getFilteredProducts(), 'productsGrid');
        }
        return;
    }

    // Gunakan fungsi searchProducts dari products.js jika ada
    if (typeof searchProducts === 'function') {
        searchProducts(query);
    } else {
        // Fallback search
        const allProducts = [...products, ...videoProducts];
        const filteredProducts = allProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        const productsGrid = document.getElementById('productsGrid');
        if (productsGrid) {
            if (filteredProducts.length > 0) {
                renderProducts(filteredProducts, 'productsGrid');
            } else {
                productsGrid.innerHTML = '<p class="no-products">Tidak ada produk yang sesuai dengan pencarian Anda.</p>';
            }
        }
    }
}

// Setup contact form
function setupContactForm() {
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const contactForm = document.getElementById('contactForm');

    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', function (e) {
            e.preventDefault();

            const name = document.getElementById('contact-name');
            const email = document.getElementById('contact-email');
            const subject = document.getElementById('contact-subject');
            const message = document.getElementById('contact-message');

            // Validasi sederhana
            if (!name.value || !email.value || !subject.value || !message.value) {
                alert('Harap isi semua field sebelum mengirim pesan.');
                return;
            }

            if (!isValidEmail(email.value)) {
                alert('Format email tidak valid.');
                return;
            }

            // Simulasi pengiriman pesan
            alert('Pesan Anda telah berhasil dikirim! Kami akan membalas dalam waktu 24 jam.');

            // Reset form
            if (contactForm) {
                contactForm.reset();
            } else {
                name.value = '';
                email.value = '';
                subject.value = '';
                message.value = '';
            }
        });
    }
}

// Setup mobile menu
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Validasi email (helper function)
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Cart functionality (jika tidak ada di products.js)
if (typeof addToCart === 'undefined') {
    function addToCart(productId) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (!currentUser) {
            alert('Silakan login terlebih dahulu untuk menambahkan produk ke keranjang.');
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            return;
        }

        const allProducts = [...products, ...videoProducts];
        const product = allProducts.find(p => p.id == productId);

        if (product) {
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                cartCount.textContent = cartItems.length;
            }

            alert(`"${product.title}" telah ditambahkan ke keranjang.`);
        }
    }
}

// Export fungsi jika diperlukan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showHomePage,
        navigateToPage,
        setupNavigation,
        setupSearch,
        setupContactForm,
        setupMobileMenu
    };
}