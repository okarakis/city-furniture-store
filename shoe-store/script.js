// Product Data
const products = [
    {
        id: 1,
        name: "Air Runner Pro",
        category: "running",
        price: 129.99,
        description: "Lightweight running shoes with superior cushioning",
        emoji: "👟"
    },
    {
        id: 2,
        name: "Urban Sneaker",
        category: "casual",
        price: 89.99,
        description: "Stylish everyday sneakers for urban lifestyle",
        emoji: "👟"
    },
    {
        id: 3,
        name: "Classic Oxford",
        category: "formal",
        price: 149.99,
        description: "Elegant leather shoes for formal occasions",
        emoji: "👞"
    },
    {
        id: 4,
        name: "Sprint Elite",
        category: "running",
        price: 159.99,
        description: "Professional running shoes for athletes",
        emoji: "👟"
    },
    {
        id: 5,
        name: "Comfort Walk",
        category: "casual",
        price: 79.99,
        description: "All-day comfort for casual wear",
        emoji: "👟"
    },
    {
        id: 6,
        name: "Business Pro",
        category: "formal",
        price: 169.99,
        description: "Premium leather dress shoes",
        emoji: "👞"
    },
    {
        id: 7,
        name: "Trail Blazer",
        category: "running",
        price: 139.99,
        description: "Durable shoes for trail running",
        emoji: "🥾"
    },
    {
        id: 8,
        name: "Street Style",
        category: "casual",
        price: 99.99,
        description: "Trendy sneakers with modern design",
        emoji: "👟"
    },
    {
        id: 9,
        name: "Executive Leather",
        category: "formal",
        price: 189.99,
        description: "Handcrafted Italian leather shoes",
        emoji: "👞"
    }
];

// Shopping Cart
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    setupFilterButtons();
    setupCartModal();
    setupContactForm();
});

// Display Products
function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">${product.emoji}</div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
    return card;
}

// Setup Filter Buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            if (filter === 'all') {
                displayProducts(products);
            } else {
                const filtered = products.filter(product => product.category === filter);
                displayProducts(filtered);
            }
        });
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartCount();
        showNotification(`${product.name} added to cart!`);
    }
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Setup Cart Modal
function setupCartModal() {
    const modal = document.getElementById('cartModal');
    const cartIcon = document.querySelector('.cart-icon');
    const closeBtn = document.querySelector('.close');
    
    cartIcon.addEventListener('click', function() {
        displayCartItems();
        modal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Display Cart Items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e0e0e0;';
        itemElement.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p style="color: #666;">Quantity: ${item.quantity}</p>
            </div>
            <div style="text-align: right;">
                <p style="font-weight: bold; color: #667eea;">$${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})" style="background: #ff4757; color: white; border: none; padding: 0.25rem 0.75rem; border-radius: 15px; cursor: pointer; margin-top: 0.5rem;">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCartItems();
    showNotification('Item removed from cart');
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Add animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Setup Contact Form
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}

// Scroll to Products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Made with Bob
