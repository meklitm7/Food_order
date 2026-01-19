// AASTU Bite - Cart Management System

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('aastuCart')) || [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    setupEventListeners();
    loadOrderSummary(); // Load order summary on page load
});

// Setup event listeners
function setupEventListeners() {
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Quantity controls
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quantity-increase')) {
            updateQuantity(e.target.dataset.id, 1);
        } else if (e.target.classList.contains('quantity-decrease')) {
            updateQuantity(e.target.dataset.id, -1);
        } else if (e.target.classList.contains('remove-item')) {
            removeFromCart(e.target.dataset.id);
        }
    });

    // Order form validation
    const orderForm = document.querySelector('.order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', validateOrderForm);
    }
}

// Add item to cart
function addToCart(e) {
    const card = e.target.closest('.food-card') || e.target.closest('.drink-card') || e.target.closest('.menu-item');
    const name = card.querySelector('h3').textContent;
    const priceText = card.querySelector('p').textContent;
    const price = parseInt(priceText.replace(' ETB', ''));
    const cafeteria = card.querySelector('input[type="radio"]:checked')?.value || 'KK';
    const imgSrc = card.querySelector('img').src;

    const item = {
        id: Date.now().toString(),
        name: name,
        price: price,
        cafeteria: cafeteria,
        img: imgSrc,
        quantity: 1
    };

    // Check if item already exists
    const existingItem = cart.find(cartItem => cartItem.name === name && cartItem.cafeteria === cafeteria);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }

    saveCart();
    updateCartDisplay();
    showNotification('Item added to cart!');
}

// Update item quantity
function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartDisplay();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('aastuCart', JSON.stringify(cart));
}

// Update cart display
function updateCartDisplay() {
    const cartGrid = document.querySelector('.cart-grid');
    const summary = document.querySelector('.summary');

    if (!cartGrid) return;

    if (cart.length === 0) {
        cartGrid.innerHTML = '<p>Your cart is empty</p>';
        if (summary) {
            summary.innerHTML = '<h2>Order Summary</h2><p>Total Items: 0</p><p>Total Price: <strong>0 ETB</strong></p>';
        }
        return;
    }

    let totalItems = 0;
    let totalPrice = 0;

    cartGrid.innerHTML = cart.map(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        return `
            <div class="item">
                <img src="${item.img}" alt="${item.name}">
                <div class="details">
                    <h3>${item.name}</h3>
                    <p>${item.cafeteria}</p>
                    <div class="quantity-controls">
                        <button class="quantity-decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div>
                    <span class="price">${item.price * item.quantity} ETB</span>
                    <button class="remove-btn remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
    }).join('');

    if (summary) {
        summary.innerHTML = `
            <h2>Order Summary</h2>
            <p>Total Items: ${totalItems}</p>
            <p>Total Price: <strong>${totalPrice} ETB</strong></p>
            <button onclick="window.location.href='order.html'">Checkout</button>
        `;
    }
}

// Validate order form
function validateOrderForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('fullName')?.trim();
    const phone = formData.get('phone')?.trim();
    const blockNumber = formData.get('blockNumber')?.trim();
    const dormNumber = formData.get('dormNumber')?.trim();
    const email = formData.get('email')?.trim();

    if (!name || !phone || !blockNumber || !dormNumber || !email) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }

    // Submit order
    submitOrder({ name, phone, blockNumber, dormNumber, email });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Submit order
function submitOrder(customerData) {
    const order = {
        id: Date.now().toString(),
        customer: {
            name: customerData.name,
            phone: customerData.phone,
            blockNumber: customerData.blockNumber,
            dormNumber: customerData.dormNumber,
            email: customerData.email
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        date: new Date().toISOString(),
        status: 'pending'
    };

    // Save order to localStorage (in real app, this would be sent to server)
    const orders = JSON.parse(localStorage.getItem('aastuOrders')) || [];
    orders.push(order);
    localStorage.setItem('aastuOrders', JSON.stringify(orders));

    // Clear cart
    cart = [];
    saveCart();

    showNotification('Order placed successfully!', 'success');

    // Redirect to home or show confirmation
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 2000);
}

// Show notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        backgroundColor: type === 'error' ? '#dc3545' : '#28a745',
        color: 'white',
        borderRadius: '5px',
        zIndex: '1000',
        fontWeight: 'bold'
    });

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Load cart data for order summary
function loadOrderSummary() {
    const orderSummary = document.querySelector('.order-summary');
    if (!orderSummary) return;

    if (cart.length === 0) {
        orderSummary.innerHTML = `
            <h3>Order Summary</h3>
            <p style="color: #666; font-style: italic;">Your cart is empty. Please add some items from the menu before placing an order.</p>
            <p><a href="kk-menu.html" style="color: #d40000; text-decoration: none; font-weight: bold;">← Go to KK Menu</a> | 
               <a href="central-menu.html" style="color: #d40000; text-decoration: none; font-weight: bold;">Go to Central Menu →</a></p>
        `;
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    orderSummary.innerHTML = `
        <h3>Order Summary</h3>
        ${cart.map(item => `<p>${item.name} (${item.cafeteria}) x${item.quantity} - ${item.price * item.quantity} ETB</p>`).join('')}
        <p><strong>Total: ${total} ETB</strong></p>
    `;
}