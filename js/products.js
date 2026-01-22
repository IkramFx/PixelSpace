// Data untuk Photos Page
const photoProducts = [
    {
        id: 101,
        title: "Paket Foto Landscape Premium",
        category: "Nature",
        description: "Koleksi 100+ foto landscape HD untuk proyek desain Anda.",
        price: "Rp 89.000",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 102,
        title: "Urban Photography Pack",
        category: "Urban",
        description: "Foto-foto urban dan street photography dalam resolusi tinggi.",
        price: "Rp 75.000",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 103,
        title: "Business & Office Photography",
        category: "Business",
        description: "Koleksi foto profesional untuk kebutuhan bisnis dan corporate.",
        price: "Rp 95.000",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 104,
        title: "Abstract & Artistic Photos",
        category: "Art",
        description: "Koleksi foto abstrak dan artistic untuk proyek kreatif.",
        price: "Rp 65.000",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// Data untuk gallery photos
const photosData = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Mountain Landscape",
        price: "Rp 25.000"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Ocean Waves",
        price: "Rp 30.000"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "City Lights",
        price: "Rp 35.000"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Business Analytics",
        price: "Rp 40.000"
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Data Visualization",
        price: "Rp 28.000"
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Office Workspace",
        price: "Rp 32.000"
    }
];

// Data untuk Videos Page
const videoProducts = [
    {
        id: 201,
        title: "4K Nature Footage Pack",
        category: "Nature",
        description: "Koleksi footage alam dalam resolusi 4K untuk video proyek.",
        price: "Rp 149.000",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 202,
        title: "Motion Graphics Template Pack",
        category: "Motion",
        description: "Template After Effects siap pakai untuk video promosi.",
        price: "Rp 199.000",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// Data untuk featured videos
const featuredVideos = [
    {
        id: 1,
        title: "Tutorial Adobe Premiere Pro untuk Pemula",
        youtubeId: "9No-FiEInLA",
        description: "Pelajari dasar-dasar editing video dengan Adobe Premiere Pro"
    },
    {
        id: 2,
        title: "Tips Fotografi Digital Modern",
        youtubeId: "PkZNo7MFNFg",
        description: "Teknik fotografi terbaru untuk hasil yang profesional"
    }
];

// Data untuk tim (About page)
const teamMembers = [
    {
        id: 1,
        name: "Rizky Pratama",
        role: "Frontend Developer",
        bio: "Spesialis dalam React.js dan UI/UX design. Bertanggung jawab atas interface dan user experience PixelSpace.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Sari Dewi",
        role: "Backend Developer",
        bio: "Ahli dalam Node.js dan database management. Mengembangkan sistem pembayaran dan keamanan platform.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Budi Santoso",
        role: "Product Manager",
        bio: "Memastikan PixelSpace memberikan solusi terbaik bagi pengguna dengan fitur-fitur inovatif.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Maya Indah",
        role: "UI/UX Designer",
        bio: "Menciptakan desain yang intuitif dan menarik untuk pengalaman pengguna yang optimal.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

// Data produk digital
const products = [
    {
        id: 1,
        title: "Template Presentasi Premium",
        category: "Template",
        description: "Koleksi lengkap template presentasi modern untuk bisnis, pendidikan, dan kreatif.",
        detailedDescription: "Template presentasi premium ini mencakup 50+ slide unik dengan desain modern, animasi halus, dan layout yang dapat disesuaikan. Cocok untuk presentasi bisnis, akademik, portofolio, dan keperluan kreatif lainnya.",
        price: "Rp 149.000",
        image: "https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "50+ slide unik dengan desain modern",
            "Animasi dan transisi halus",
            "Fully editable di PowerPoint & Google Slides",
            "Termasuk panduan penggunaan",
            "Free updates untuk 1 tahun",
            "Dukungan customer service 24/7"
        ]
    },
    {
        id: 2,
        title: "Masterclass Fotografi Digital",
        category: "Kursus",
        description: "Pelajari teknik fotografi profesional dari dasar hingga mahir.",
        detailedDescription: "Masterclass fotografi digital ini mengajarkan semua aspek fotografi dari dasar hingga tingkat profesional. Kursus terdiri dari 30+ modul video, materi PDF, dan studi kasus nyata.",
        price: "Rp 299.000",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "30+ modul video pembelajaran",
            "Materi PDF lengkap",
            "Studi kasus fotografi profesional",
            "Akses seumur hidup",
            "Sertifikat penyelesaian",
            "Grup komunitas eksklusif"
        ]
    },
    {
        id: 3,
        title: "Paket Ikon Vektor Premium",
        category: "Aset Desain",
        description: "500+ ikon vektor modern untuk proyek desain Anda.",
        detailedDescription: "Paket ikon vektor premium ini berisi lebih dari 500 ikon unik dalam berbagai kategori. Semua ikon dapat diedit dalam format AI, EPS, SVG, dan PNG dengan resolusi tinggi.",
        price: "Rp 89.000",
        image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "500+ ikon vektor unik",
            "Format AI, EPS, SVG, dan PNG",
            "Resolusi tinggi hingga 4096px",
            "Kategori lengkap (UI, bisnis, media sosial, dll)",
            "Commercial license",
            "Free future updates"
        ]
    },
    {
        id: 4,
        title: "E-book Panduan SEO 2023",
        category: "E-book",
        description: "Panduan lengkap optimasi SEO untuk pemula hingga ahli.",
        detailedDescription: "E-book ini merupakan panduan komprehensif tentang SEO terbaru untuk tahun 2023. Membahas teknik on-page, off-page, dan technical SEO dengan studi kasus nyata dan strategi yang terbukti berhasil.",
        price: "Rp 79.000",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "300+ halaman konten lengkap",
            "Teknik SEO terbaru 2023",
            "Studi kasus nyata",
            "Checklist dan template",
            "Update gratis untuk 6 bulan",
            "Akses ke grup diskusi"
        ]
    },
    {
        id: 5,
        title: "Plugin WordPress Premium",
        category: "Plugin",
        description: "Plugin WordPress untuk optimasi kecepatan dan keamanan website.",
        detailedDescription: "Plugin premium ini membantu mengoptimalkan kecepatan, keamanan, dan SEO website WordPress Anda. Dilengkapi dengan caching tingkat lanjut, minifikasi, dan fitur keamanan terbaru.",
        price: "Rp 199.000",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "Advanced caching system",
            "Minifikasi CSS, JS, dan HTML",
            "Firewall dan proteksi malware",
            "Database optimization",
            "Lazy loading images",
            "Support untuk multisite"
        ]
    },
    {
        id: 6,
        title: "Paket Font Eksklusif",
        category: "Aset Desain",
        description: "Koleksi 50 font premium untuk proyek desain Anda.",
        detailedDescription: "Paket font eksklusif ini berisi 50 font premium yang cocok untuk berbagai proyek desain. Setiap font dilengkapi dengan multiple weights, ligatures, dan karakter internasional.",
        price: "Rp 129.000",
        image: "https://images.unsplash.com/photo-1531346688376-ab6275c4725e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: [
            "50 font premium eksklusif",
            "Multiple weights untuk setiap font",
            "Ligatures dan alternates",
            "Karakter internasional",
            "Webfont versions included",
            "Commercial license"
        ]
    }
];

// Data untuk halaman Videos
const videosData = [
    {
        id: 1,
        title: "Introduction to Digital Products",
        youtubeId: "9No-FiEInLA"
    },
    {
        id: 2,
        title: "Creating Successful Digital Products",
        youtubeId: "PkZNo7MFNFg"
    }
];

// State aplikasi untuk produk
let currentCategory = "Semua";
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Fungsi untuk render kategori
function renderCategories() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    const footerCategories = document.getElementById('footerCategories');

    // Kosongkan container categories di main content
    if (categoriesContainer) {
        categoriesContainer.innerHTML = ''; // Kosongkan saja
        categoriesContainer.style.display = 'none'; // Sembunyikan container
    }

    // Render categories di footer (opsional, bisa dihapus juga)
    if (footerCategories) {
        footerCategories.innerHTML = '';
        // Jika tidak ingin kategori di footer, kosongkan saja
    }
}

// Filter products by category
function getFilteredProducts() {
    if (currentCategory === 'Semua') {
        return products;
    }
    return products.filter(product => product.category === currentCategory);
}

// Render products
function renderProducts(productsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    if (productsArray.length === 0) {
        container.innerHTML = '<p class="no-products">Tidak ada produk dalam kategori ini.</p>';
        return;
    }

    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">${product.price}</div>
                    <div>
                        <button class="detail-btn" data-id="${product.id}">Detail</button>
                        <button class="buy-btn" data-id="${product.id}">Beli</button>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(productCard);
    });

    // Add event listeners to buttons
    container.querySelectorAll('.detail-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            showProductDetail(productId);
        });
    });

    container.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

// Render Photos Gallery
function renderPhotosGallery() {
    const photosGallery = document.getElementById('photosGallery');
    if (!photosGallery) return;

    photosGallery.innerHTML = '';

    photosData.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${photo.url}" alt="${photo.title}" class="gallery-img">
            <div class="gallery-overlay">
                <div class="gallery-title">${photo.title}</div>
                <div class="gallery-price">${photo.price}</div>
            </div>
        `;
        photosGallery.appendChild(galleryItem);
    });
}

// Render Photo Products
function renderPhotoProducts() {
    const photoProductsGrid = document.getElementById('photoProductsGrid');
    if (!photoProductsGrid) return;

    renderProducts(photoProducts, 'photoProductsGrid');
}

// Render Video Gallery
function renderVideoGallery() {
    const videoGallery = document.getElementById('videoGallery');
    if (!videoGallery) return;

    videoGallery.innerHTML = '';

    featuredVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item-container';
        videoItem.innerHTML = `
            <div class="video-item">
                <iframe src="https://www.youtube.com/embed/${video.youtubeId}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h4 class="video-title">${video.title}</h4>
                <p class="video-description">${video.description}</p>
            </div>
        `;
        videoGallery.appendChild(videoItem);
    });
}

// Render Team Members
function renderTeamMembers() {
    const teamGrid = document.getElementById('teamMembers');
    if (!teamGrid) return;

    teamGrid.innerHTML = '';

    teamMembers.forEach(member => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member';
        teamMember.innerHTML = `
            <img src="${member.avatar}" alt="${member.name}" class="team-avatar">
            <h3 class="team-name">${member.name}</h3>
            <div class="team-role">${member.role}</div>
            <p class="team-bio">${member.bio}</p>
        `;
        teamGrid.appendChild(teamMember);
    });
}

// Update initProducts function
function initProducts() {
    // Categories sudah dihapus
    renderProducts(getFilteredProducts(), 'productsGrid');
    renderPhotosGallery();
    renderPhotoProducts();
    renderVideoGallery();
    renderVideoProducts();
    renderTeamMembers();
    loadCartFromLocalStorage();

    // Set current year in footer
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

// Show product detail page
function showProductDetail(productId) {
    const allProducts = [...products, ...videoProducts];
    const product = allProducts.find(p => p.id == productId);

    if (!product) return;

    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });

    const productDetailSection = document.getElementById('productDetail');
    if (productDetailSection) {
        productDetailSection.classList.remove('hidden');

        // Render product detail
        productDetailSection.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-content">
                    <div class="product-detail-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-detail-info">
                        <h1>${product.title}</h1>
                        <div class="product-detail-category">${product.category}</div>
                        <div class="product-detail-price">${product.price}</div>
                        <p class="product-detail-description">${product.detailedDescription}</p>
                        
                        <div class="product-detail-features">
                            <h3>Fitur Utama:</h3>
                            <ul>
                                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="product-detail-actions">
                            <button class="back-btn" id="backToProducts">Kembali ke Produk</button>
                            <button class="buy-btn" data-id="${product.id}" style="padding: 12px 30px;">Beli Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('backToProducts').addEventListener('click', showHomePage);
        productDetailSection.querySelector('.buy-btn').addEventListener('click', function () {
            addToCart(productId);
        });

        // Update navbar active state
        document.querySelectorAll('.nav-link').forEach(a => {
            a.classList.remove('active');
        });
    }
}

// Add to cart function
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
        cartItems.push(product);
        updateCartCount();
        saveCartToLocalStorage();
        alert(`"${product.title}" telah ditambahkan ke keranjang.`);
    }
}

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cartItems.length;
    }
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Load cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Render photos gallery
function renderPhotosGallery() {
    const photosGallery = document.getElementById('photosGallery');
    if (!photosGallery) return;

    photosGallery.innerHTML = '';

    photosData.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.title;
        photosGallery.appendChild(img);
    });
}

// Render videos gallery
function renderVideosGallery() {
    const videoGallery = document.getElementById('videoGallery');
    if (!videoGallery) return;

    videoGallery.innerHTML = '';

    videosData.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${video.youtubeId}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        `;
        videoGallery.appendChild(videoItem);
    });
}

// Render video products
function renderVideoProducts() {
    const videoProductsGrid = document.getElementById('videoProductsGrid');
    if (!videoProductsGrid) return;

    renderProducts(videoProducts, 'videoProductsGrid');
}

// Search products
function searchProducts(query) {
    const allProducts = [...products, ...videoProducts];
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );

    // If on home page, show search results in main grid
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid && !productsGrid.parentElement.classList.contains('hidden')) {
        if (filteredProducts.length > 0) {
            renderProducts(filteredProducts, 'productsGrid');
        } else {
            productsGrid.innerHTML = '<p class="no-products">Tidak ada produk yang sesuai dengan pencarian Anda.</p>';
        }
    }
}

// Initialize products module
function initProducts() {
    renderCategories(); // Fungsi ini akan mengosongkan categories
    renderProducts(getFilteredProducts(), 'productsGrid');
    renderPhotosGallery();
    renderVideosGallery();
    renderVideoProducts();
    loadCartFromLocalStorage();

    // Set current year in footer
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

// Export fungsi yang diperlukan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        videoProducts,
        categories,
        renderCategories,
        renderProducts,
        showProductDetail,
        addToCart,
        updateCartCount,
        searchProducts,
        initProducts
    };
}