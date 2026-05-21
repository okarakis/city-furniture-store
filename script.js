let cartCount = 0;

const cartCountElement = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.cart-icon');
const cartStatus = document.querySelector('#cart-status');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const productCards = document.querySelectorAll('.product-card');
const navLinks = document.querySelectorAll('.nav a');
const revealItems = document.querySelectorAll('.reveal-on-scroll');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function announceStatus(message) {
    if (cartStatus) {
        cartStatus.textContent = message;
    }
}

function updateCartCount() {
    if (!cartCountElement) {
        return;
    }

    cartCountElement.textContent = String(cartCount);
    announceStatus(`Cart updated. ${cartCount} item${cartCount === 1 ? '' : 's'} in cart.`);

    if (!prefersReducedMotion) {
        cartCountElement.style.transform = 'scale(1.5)';
        window.setTimeout(() => {
            cartCountElement.style.transform = 'scale(1)';
        }, 200);
    }
}

function showProductDetails(card) {
    const productName = card.querySelector('.product-name')?.textContent;
    const productPrice = card.querySelector('.product-price')?.textContent;

    if (!productName || !productPrice) {
        return;
    }

    announceStatus(`${productName} costs ${productPrice}. Use Add to Cart to include it in your cart.`);
}

addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();

        cartCount += 1;
        updateCartCount();

        button.textContent = 'Added!';
        button.disabled = true;

        if (cartIcon && !prefersReducedMotion) {
            cartIcon.style.animation = 'none';
            window.setTimeout(() => {
                cartIcon.style.animation = 'cartBounce 0.5s ease';
            }, 10);
        }

        window.setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.disabled = false;
        }, 1500);
    });
});

productCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        if (event.target.closest('.add-to-cart-btn')) {
            return;
        }

        showProductDetails(card);
    });
});

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');

        if (!href || !href.startsWith('#')) {
            return;
        }

        const targetElement = document.querySelector(href);

        if (!targetElement) {
            return;
        }

        event.preventDefault();
        targetElement.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
        });
        link.blur();
    });
});

if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute('id');

            if (!id || !entry.isIntersecting) {
                return;
            }

            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        });
    }, {
        threshold: 0.35
    });

    document.querySelectorAll('section[id], header[id]').forEach((section) => {
        sectionObserver.observe(section);
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach((item) => {
        if (prefersReducedMotion) {
            item.classList.add('is-visible');
            return;
        }

        revealObserver.observe(item);
    });
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        const message = cartCount === 0
            ? 'Your cart is empty. Add some furniture to get started!'
            : `You have ${cartCount} item${cartCount === 1 ? '' : 's'} in your cart. Checkout functionality is coming soon.`;

        announceStatus(message);
    });
}

// Made with Bob

// Product data
const products = {
    'modern-sofa': {
        name: 'Modern Sofa',
        price: 1299,
        description: 'Experience ultimate comfort with our Modern Sofa. This elegant 3-seater features premium fabric upholstery, solid wood frame, and plush cushioning. Perfect for contemporary living spaces, it combines style with durability.',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop'
        ],
        badge: 'New',
        badgeClass: 'product-badge--new',
        features: [
            'Premium fabric upholstery',
            'Solid hardwood frame construction',
            'High-density foam cushions',
            'Removable cushion covers',
            'Seats up to 3 people comfortably',
            '5-year warranty included'
        ],
        specs: {
            'Dimensions': '84" W x 36" D x 32" H',
            'Material': 'Fabric, Hardwood',
            'Color': 'Gray',
            'Weight': '120 lbs',
            'Assembly': 'Required'
        },
        sku: 'CF-MS-001',
        category: 'Living Room'
    },
    'dining-table': {
        name: 'Dining Table',
        price: 899,
        description: 'Gather around this beautiful solid wood dining table. Crafted from premium oak, it comfortably seats 6 people. The timeless design complements any dining room décor while providing a sturdy surface for family meals and entertaining.',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1595428773637-3b0c3c6f0e8d?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=600&h=600&fit=crop'
        ],
        badge: null,
        features: [
            'Solid oak wood construction',
            'Seats 6 people comfortably',
            'Natural wood grain finish',
            'Scratch-resistant surface',
            'Easy to clean and maintain',
            '10-year structural warranty'
        ],
        specs: {
            'Dimensions': '72" L x 36" W x 30" H',
            'Material': 'Solid Oak Wood',
            'Color': 'Natural Oak',
            'Weight': '95 lbs',
            'Assembly': 'Minimal assembly required'
        },
        sku: 'CF-DT-002',
        category: 'Dining Room'
    },
    'office-chair': {
        name: 'Office Chair',
        price: 349,
        description: 'Work in comfort with our ergonomic office chair. Featuring adjustable lumbar support, breathable mesh back, and smooth-rolling casters, this chair is designed to support your posture during long work sessions.',
        image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&h=600&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&h=600&fit=crop'
        ],
        badge: 'Sale',
        badgeClass: 'product-badge--sale',
        features: [
            'Ergonomic design with lumbar support',
            'Breathable mesh back',
            'Adjustable height and armrests',
            '360-degree swivel',
            'Smooth-rolling casters',
            'Weight capacity: 250 lbs'
        ],
        specs: {
            'Dimensions': '25" W x 25" D x 38-42" H',
            'Material': 'Mesh, Steel, Plastic',
            'Color': 'Black',
            'Weight': '35 lbs',
            'Assembly': 'Required'
        },
        sku: 'CF-OC-003',
        category: 'Office'
    },
    'bookshelf': {
        name: 'Bookshelf',
        price: 449,
        description: 'Organize your books and display your treasures with this modern 5-tier bookshelf. The open design creates an airy feel while providing ample storage space. Perfect for home offices, living rooms, or bedrooms.',
        image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1595428773637-3b0c3c6f0e8d?w=600&h=600&fit=crop'
        ],
        badge: null,
        features: [
            '5 spacious shelves',
            'Modern open design',
            'Sturdy metal frame',
            'Easy to assemble',
            'Holds up to 150 lbs total',
            'Anti-tip hardware included'
        ],
        specs: {
            'Dimensions': '32" W x 12" D x 71" H',
            'Material': 'Wood, Metal',
            'Color': 'Walnut Brown',
            'Weight': '45 lbs',
            'Assembly': 'Required'
        },
        sku: 'CF-BS-004',
        category: 'Storage'
    },
    'bed-frame': {
        name: 'Bed Frame',
        price: 799,
        description: 'Sleep in style with our upholstered bed frame. The plush headboard provides comfortable support for reading or watching TV, while the sturdy construction ensures years of restful nights. Queen size fits standard mattresses.',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop'
        ],
        badge: null,
        features: [
            'Upholstered headboard',
            'Queen size (fits standard mattress)',
            'Solid wood slat support',
            'No box spring required',
            'Easy assembly',
            '7-year warranty'
        ],
        specs: {
            'Dimensions': '64" W x 84" L x 48" H',
            'Material': 'Fabric, Wood',
            'Color': 'Light Gray',
            'Weight': '85 lbs',
            'Assembly': 'Required'
        },
        sku: 'CF-BF-005',
        category: 'Bedroom'
    },
    'coffee-table': {
        name: 'Coffee Table',
        price: 299,
        description: 'Add a touch of elegance to your living room with this glass-top coffee table. The tempered glass top sits beautifully on a solid wooden base, creating a perfect centerpiece for your seating area.',
        image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&h=600&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop'
        ],
        badge: 'Popular',
        badgeClass: 'product-badge--popular',
        features: [
            'Tempered glass top',
            'Solid wood base',
            'Modern design',
            'Easy to clean',
            'Sturdy construction',
            'Weight capacity: 100 lbs'
        ],
        specs: {
            'Dimensions': '48" L x 24" W x 18" H',
            'Material': 'Tempered Glass, Wood',
            'Color': 'Clear Glass, Walnut Base',
            'Weight': '40 lbs',
            'Assembly': 'Minimal assembly required'
        },
        sku: 'CF-CT-006',
        category: 'Living Room'
    }
};

// Product Detail Page Functionality
function initProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    if (!productId || !products[productId]) {
        window.location.href = 'index.html';
        return;
    }

    const product = products[productId];
    loadProductDetails(product, productId);
    setupProductDetailInteractions(product);
    loadRelatedProducts(productId);
}

function loadProductDetails(product, productId) {
    // Update page title
    document.title = `${product.name} - City Furniture`;
    document.getElementById('page-title').textContent = `${product.name} - City Furniture`;

    // Update breadcrumb
    const breadcrumbProduct = document.getElementById('breadcrumb-product');
    if (breadcrumbProduct) {
        breadcrumbProduct.textContent = product.name;
    }

    // Update main image
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }

    // Update badge
    const badge = document.getElementById('product-badge');
    if (badge && product.badge) {
        badge.textContent = product.badge;
        badge.className = `product-badge ${product.badgeClass}`;
        badge.style.display = 'block';
    }

    // Load thumbnail gallery
    const thumbnailGallery = document.getElementById('thumbnail-gallery');
    if (thumbnailGallery && product.images) {
        thumbnailGallery.innerHTML = '';
        product.images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${product.name} view ${index + 1}`;
            img.className = `thumbnail-image${index === 0 ? ' active' : ''}`;
            img.addEventListener('click', () => {
                mainImage.src = imgSrc;
                document.querySelectorAll('.thumbnail-image').forEach(thumb => {
                    thumb.classList.remove('active');
                });
                img.classList.add('active');
            });
            thumbnailGallery.appendChild(img);
        });
    }

    // Update product info
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-price').textContent = `$${product.price.toLocaleString()}`;
    document.getElementById('product-description').textContent = product.description;

    // Load features
    const featuresList = document.getElementById('product-features');
    if (featuresList && product.features) {
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }

    // Load specifications
    const specsList = document.getElementById('product-specs');
    if (specsList && product.specs) {
        specsList.innerHTML = '';
        Object.entries(product.specs).forEach(([key, value]) => {
            const dt = document.createElement('dt');
            dt.textContent = key;
            const dd = document.createElement('dd');
            dd.textContent = value;
            specsList.appendChild(dt);
            specsList.appendChild(dd);
        });
    }

    // Update meta information
    document.getElementById('product-sku').textContent = product.sku;
    document.getElementById('product-category').textContent = product.category;
}

function setupProductDetailInteractions(product) {
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const addToCartBtn = document.getElementById('add-to-cart-detail');

    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }

    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            const maxValue = parseInt(quantityInput.max);
            if (currentValue < maxValue) {
                quantityInput.value = currentValue + 1;
            }
        });
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            cartCount += quantity;
            updateCartCount();

            addToCartBtn.textContent = `Added ${quantity} to Cart!`;
            addToCartBtn.disabled = true;

            if (cartIcon && !prefersReducedMotion) {
                cartIcon.style.animation = 'none';
                window.setTimeout(() => {
                    cartIcon.style.animation = 'cartBounce 0.5s ease';
                }, 10);
            }

            window.setTimeout(() => {
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.disabled = false;
            }, 2000);
        });
    }
}

function loadRelatedProducts(currentProductId) {
    const relatedGrid = document.getElementById('related-products-grid');
    if (!relatedGrid) return;

    relatedGrid.innerHTML = '';
    
    // Get up to 3 random products excluding the current one
    const productIds = Object.keys(products).filter(id => id !== currentProductId);
    const shuffled = productIds.sort(() => 0.5 - Math.random());
    const selectedIds = shuffled.slice(0, 3);

    selectedIds.forEach(productId => {
        const product = products[productId];
        const card = createProductCard(product, productId);
        relatedGrid.appendChild(card);
    });
}

function createProductCard(product, productId) {
    const article = document.createElement('article');
    article.className = 'product-card';

    const imageDiv = document.createElement('div');
    imageDiv.className = 'product-image';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.width = 400;
    img.height = 300;
    img.loading = 'lazy';
    imageDiv.appendChild(img);

    if (product.badge) {
        const badge = document.createElement('span');
        badge.className = `product-badge ${product.badgeClass}`;
        badge.textContent = product.badge;
        imageDiv.appendChild(badge);
    }

    const infoDiv = document.createElement('div');
    infoDiv.className = 'product-info';

    const name = document.createElement('h3');
    name.className = 'product-name';
    name.textContent = product.name;

    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.description.substring(0, 60) + '...';

    const footer = document.createElement('div');
    footer.className = 'product-footer';

    const price = document.createElement('span');
    price.className = 'product-price';
    price.textContent = `$${product.price.toLocaleString()}`;

    const button = document.createElement('button');
    button.className = 'add-to-cart-btn';
    button.type = 'button';
    button.textContent = 'View Details';
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = `product-detail.html?product=${productId}`;
    });

    footer.appendChild(price);
    footer.appendChild(button);

    infoDiv.appendChild(name);
    infoDiv.appendChild(description);
    infoDiv.appendChild(footer);

    article.appendChild(imageDiv);
    article.appendChild(infoDiv);

    return article;
}

// Check if we're on the product detail page
if (window.location.pathname.includes('product-detail.html')) {
    document.addEventListener('DOMContentLoaded', initProductDetailPage);
}
