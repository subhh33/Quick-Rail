// --- DATA MODEL ---
const productsData = [
    // (all product entries — copy exactly from your original file)
    // For brevity here, include the full products list from your original HTML file.
    // I included them verbatim in the final version below.
    // --- START OF PRODUCT LIST ---
    { id: 101, category: 'Meds & First Aid', name: 'Pain Reliever Tablets', price: 25.00, icon: '💊' },
    { id: 102, category: 'Meds & First Aid', name: 'Antacid Sachets (3-Pack)', price: 30.00, icon: '💊' },
    { id: 103, category: 'Meds & First Aid', name: 'Band-Aid Pack (10 ct)', price: 45.00, icon: '🩹' },
    { id: 104, category: 'Meds & First Aid', name: 'Vapour Rub (Small)', price: 60.00, icon: '🌿' },
    { id: 105, category: 'Meds & First Aid', name: 'ORS Powder (Rehydration)', price: 20.00, icon: '💧' },
    { id: 106, category: 'Meds & First Aid', name: 'Cotton & Antiseptic', price: 35.00, icon: '⛑️' },
    { id: 107, category: 'Meds & First Aid', name: 'Fever Thermometer', price: 99.00, icon: '🌡️' },
    { id: 108, category: 'Meds & First Aid', name: 'Motion Sickness Pills', price: 50.00, icon: '🤢' },
    { id: 109, category: 'Meds & First Aid', name: 'Burn Ointment', price: 40.00, icon: '🔥' },
    { id: 110, category: 'Meds & First Aid', name: 'Sanitary Napkins (5 Pcs)', price: 55.00, icon: '🚺' },

    { id: 201, category: 'Baby Care', name: 'Infant Milk Powder (Small)', price: 120.00, icon: '🍼' },
    { id: 202, category: 'Baby Care', name: 'Diapers (Pack of 5)', price: 95.00, icon: '👶' },
    { id: 203, category: 'Baby Care', name: 'Baby Wipes (Travel Pack)', price: 50.00, icon: '🧼' },
    { id: 204, category: 'Baby Care', name: 'Baby Soap (Small)', price: 35.00, icon: '🛁' },
    { id: 205, category: 'Baby Care', name: 'Small Rattle Toy', price: 65.00, icon: '🧸' },
    { id: 206, category: 'Baby Care', name: 'Baby Food Jar (Veg)', price: 75.00, icon: '🥕' },
    { id: 207, category: 'Baby Care', name: 'Teether', price: 85.00, icon: '🦷' },
    { id: 208, category: 'Baby Care', name: 'Pacifier', price: 60.00, icon: '👅' },
    { id: 209, category: 'Baby Care', name: 'Baby Lotion Sachet', price: 25.00, icon: '🧴' },
    { id: 210, category: 'Baby Care', name: 'Sippy Cup', price: 110.00, icon: '🥤' },

    { id: 301, category: 'Toiletries & Hygiene', name: 'Toothbrush Set (2 Pcs)', price: 40.00, icon: '🪥' },
    { id: 302, category: 'Toiletries & Hygiene', name: 'Small Soap & Case', price: 30.00, icon: '🧼' },
    { id: 303, category: 'Toiletries & Hygiene', name: 'Shampoo Sachet (2 Pcs)', price: 10.00, icon: '🧴' },
    { id: 304, category: 'Toiletries & Hygiene', name: 'Hand Sanitizer (50ml)', price: 50.00, icon: '✋' },
    { id: 305, category: 'Toiletries & Hygiene', name: 'Small Hand Towel', price: 80.00, icon: '🧖' },
    { id: 306, category: 'Toiletries & Hygiene', name: 'Disposable Razor (2 Pcs)', price: 45.00, icon: '🔪' },
    { id: 307, category: 'Toiletries & Hygiene', name: 'Travel Deodorant', price: 90.00, icon: '👃' },
    { id: 308, category: 'Toiletries & Hygiene', name: 'Lip Balm', price: 25.00, icon: '💋' },
    { id: 309, category: 'Toiletries & Hygiene', name: 'Wet Wipes (10 Pcs)', price: 35.00, icon: '🧻' },
    { id: 310, category: 'Toiletries & Hygiene', name: 'Comb/Hairbrush', price: 60.00, icon: '💈' },

    { id: 401, category: 'Electronics & Charging', name: 'Universal Charger (C/Micro)', price: 150.00, icon: '🔌' },
    { id: 402, category: 'Electronics & Charging', name: 'Earphones (Wired)', price: 99.00, icon: '🎧' },
    { id: 403, category: 'Electronics & Charging', name: 'Power Bank (Small 5000mAh)', price: 350.00, icon: '🔋' },
    { id: 404, category: 'Electronics & Charging', name: 'AA Batteries (Pack of 2)', price: 50.00, icon: '⚡' },
    { id: 405, category: 'Electronics & Charging', name: 'Extension Cord (2 Socket)', price: 180.00, icon: '🪢' },
    { id: 406, category: 'Electronics & Charging', name: 'LED Flashlight (Small)', price: 120.00, icon: '🔦' },
    { id: 407, category: 'Electronics & Charging', name: 'USB-C Adapter', price: 70.00, icon: '🔄' },
    { id: 408, category: 'Electronics & Charging', name: 'SIM Ejector Pin', price: 10.00, icon: '📍' },
    { id: 409, category: 'Electronics & Charging', name: 'Screen Cleaning Cloth', price: 20.00, icon: '🫧' },
    { id: 410, category: 'Electronics & Charging', name: 'Bluetooth Headset (Basic)', price: 499.00, icon: '🎤' },

    { id: 501, category: 'Quick Snacks & Drinks', name: 'Biscuit Pack (Sweet)', price: 30.00, icon: '🍪' },
    { id: 502, category: 'Quick Snacks & Drinks', name: 'Instant Noodles Cup', price: 50.00, icon: '🍜' },
    { id: 503, category: 'Quick Snacks & Drinks', name: 'Potato Chips (Large)', price: 40.00, icon: '🥔' },
    { id: 504, category: 'Quick Snacks & Drinks', name: 'Water Bottle (1L, Sealed)', price: 20.00, icon: '🧊' },
    { id: 505, category: 'Quick Snacks & Drinks', name: 'Juice Box (Mango)', price: 35.00, icon: '🥭' },
    { id: 506, category: 'Quick Snacks & Drinks', name: 'Roasted Peanuts', price: 25.00, icon: '🥜' },
    { id: 507, category: 'Quick Snacks & Drinks', name: 'Protein Bar', price: 70.00, icon: '💪' },
    { id: 508, category: 'Quick Snacks & Drinks', name: 'Coffee Premix Sachets', price: 45.00, icon: '☕' },
    { id: 509, category: 'Quick Snacks & Drinks', name: 'Fruit (Apple/Banana)', price: 30.00, icon: '🍎' },
    { id: 510, category: 'Quick Snacks & Drinks', name: 'Small Cake/Muffin', price: 60.00, icon: '🍰' },

    { id: 601, category: 'Reading & Entertainment', name: 'Newspaper (Hindi)', price: 10.00, icon: '📰' },
    { id: 602, category: 'Reading & Entertainment', name: 'Paperback Novel (Regional)', price: 150.00, icon: '📚' },
    { id: 603, category: 'Reading & Entertainment', name: 'Crossword/Sudoku Book', price: 75.00, icon: '🧩' },
    { id: 604, category: 'Reading & Entertainment', name: 'Children’s Coloring Book', price: 60.00, icon: '🖍️' },
    { id: 605, category: 'Reading & Entertainment', name: 'Deck of Cards', price: 40.00, icon: '🃏' },
    { id: 606, category: 'Reading & Entertainment', name: 'Pen and Notebook', price: 50.00, icon: '📝' },
    { id: 607, category: 'Reading & Entertainment', name: 'General Knowledge Magazine', price: 80.00, icon: '📖' },
    { id: 608, category: 'Reading & Entertainment', name: 'Puzzle Game (Small)', price: 90.00, icon: '🎲' },
    { id: 609, category: 'Reading & Entertainment', name: 'Sketch Pad', price: 110.00, icon: '🎨' },
    { id: 610, category: 'Reading & Entertainment', name: 'Travel Guide (City)', price: 130.00, icon: '🗺️' },

    { id: 701, category: 'Travel Comfort', name: 'Neck Pillow (Inflatable)', price: 250.00, icon: '🛏️' },
    { id: 702, category: 'Travel Comfort', name: 'Eye Mask & Ear Plugs Set', price: 90.00, icon: '😴' },
    { id: 703, category: 'Travel Comfort', name: 'Light Fleece Blanket', price: 300.00, icon: '🧣' },
    { id: 704, category: 'Travel Comfort', name: 'Collapsible Travel Mug', price: 140.00, icon: '☕' },
    { id: 705, category: 'Travel Comfort', name: 'Inflatable Footrest', price: 380.00, icon: '🦶' },
    { id: 706, category: 'Travel Comfort', name: 'Small Umbrella', price: 160.00, icon: '☔' },
    { id: 707, category: 'Travel Comfort', name: 'Seat Belt Cushion', price: 190.00, icon: '🛡️' },
    { id: 708, category: 'Travel Comfort', name: 'Back Support Pillow', price: 450.00, icon: '🧘' },
    { id: 709, category: 'Travel Comfort', name: 'Air Freshener (Small)', price: 50.00, icon: '🌸' },
    { id: 710, category: 'Travel Comfort', name: 'Compression Socks', price: 220.00, icon: '🧦' },

    { id: 801, category: 'Gifts & Souvenirs', name: 'Single Red Rose', price: 80.00, icon: '🌹' },
    { id: 802, category: 'Gifts & Souvenirs', name: 'Small Box of Chocolates', price: 110.00, icon: '🍫' },
    { id: 803, category: 'Gifts & Souvenirs', name: 'Greeting Card (Blank)', price: 40.00, icon: '💌' },
    { id: 804, category: 'Gifts & Souvenirs', name: 'Small Plush Toy (Train Theme)', price: 199.00, icon: '🚂' },
    { id: 805, category: 'Gifts & Souvenirs', name: 'Local Souvenir Key Chain', price: 70.00, icon: '🔑' },
    { id: 806, category: 'Gifts & Souvenirs', name: 'Scented Candle', price: 130.00, icon: '🕯️' },
    { id: 807, category: 'Gifts & Souvenirs', name: 'Decorative Pen Set', price: 90.00, icon: '🖊️' },
    { id: 808, category: 'Gifts & Souvenirs', name: 'Photo Frame (Small)', price: 160.00, icon: '🖼️' },
    { id: 809, category: 'Gifts & Souvenirs', name: 'Miniature Plant', price: 180.00, icon: '🪴' },
    { id: 810, category: 'Gifts & Souvenirs', name: 'Bracelet/Accessory', price: 210.00, icon: '💎' },

    { id: 901, category: 'Laundry & Clothing', name: 'Disposable Underwear (1 Pcs)', price: 30.00, icon: '👙' },
    { id: 902, category: 'Laundry & Clothing', name: 'Laundry Detergent Sachet', price: 15.00, icon: '🧺' },
    { id: 903, category: 'Laundry & Clothing', name: 'Small Safety Pins (Pack)', price: 20.00, icon: '📌' },
    { id: 904, category: 'Laundry & Clothing', name: 'Stain Remover Pen', price: 70.00, icon: '💦' },
    { id: 905, category: 'Laundry & Clothing', name: 'Small Sewing Kit', price: 50.00, icon: '🧵' },
    { id: 906, category: 'Laundry & Clothing', name: 'Disposable Socks (1 Pair)', price: 40.00, icon: '🧦' },
    { id: 907, category: 'Laundry & Clothing', name: 'Lint Roller (Mini)', price: 65.00, icon: '🪡' },
    { id: 908, category: 'Laundry & Clothing', name: 'Clothesline & Pegs', price: 90.00, icon: '🔗' },
    { id: 909, category: 'Laundry & Clothing', name: 'Travel Shoe Bag', price: 110.00, icon: '👟' },
    { id: 910, category: 'Laundry & Clothing', name: 'Small Hand Wash (Sachet)', price: 10.00, icon: '🤲' },

    { id: 1001, category: 'Miscellaneous Tools', name: 'Small Padlock & Key', price: 120.00, icon: '🔒' },
    { id: 1002, category: 'Miscellaneous Tools', name: 'Duct Tape (Small Roll)', price: 50.00, icon: '🗜️' },
    { id: 1003, category: 'Miscellaneous Tools', name: 'Mini Tool Kit (Screwdriver)', price: 190.00, icon: '🔧' },
    { id: 1004, category: 'Miscellaneous Tools', name: 'Whistle/Emergency Horn', price: 40.00, icon: '🚨' },
    { id: 1005, category: 'Miscellaneous Tools', name: 'Travel First Aid Guide Book', price: 60.00, icon: '📖' },
    { id: 1006, category: 'Miscellaneous Tools', name: 'Bungee Cord Set', price: 100.00, icon: '🎗️' },
    { id: 1007, category: 'Miscellaneous Tools', name: 'Pocket Knife (Utility)', price: 250.00, icon: '🔪' },
    { id: 1008, category: 'Miscellaneous Tools', name: 'Safety Goggles (Basic)', price: 80.00, icon: '👓' },
    { id: 1009, category: 'Miscellaneous Tools', name: 'Sewing Kit (Advanced)', price: 140.00, icon: '🧶' },
    { id: 1010, category: 'Miscellaneous Tools', name: 'Compass (Small)', price: 90.00, icon: '🧭' }
    // --- END OF PRODUCT LIST ---
];

// --- COUPON DEFINITIONS ---
const coupons = [
    { code: 'RAIL30', threshold: 349.00, discountPercent: 30, description: '30% OFF Orders over ₹349' },
    { code: 'RAIL40', threshold: 499.00, discountPercent: 40, description: '40% OFF Orders over ₹499' },
    { code: 'AD50', threshold: 600.00, discountPercent: 50, description: '50% OFF Orders over ₹600' }
];

let cart = [];
let currentCategory = 'Meds & First Aid'; // Default starting category
const REGULAR_DELIVERY_FEE = 15.00;
const FREE_DELIVERY_THRESHOLD = 99.00;
let selectedLocation = 'Varanasi JN, PF 2, Pin Point C';
let freeDeliveryAlreadyAnnounced = false;
let appliedCouponCode = null;

// --- DOM ELEMENTS ---
const homeView = document.getElementById('homeView');
const appView = document.getElementById('appView');
const trainForm = document.getElementById('trainForm');
const platformForm = document.getElementById('platformForm');
const currentLocationDisplay = document.getElementById('currentLocationDisplay');
const appHeaderLocation = document.getElementById('appHeaderLocation');
const mobileCartButton = document.getElementById('mobileCartButton');

const productGrid = document.getElementById('productGrid');
const categoryNav = document.getElementById('categoryNav');
const cartItemsList = document.getElementById('cartItemsList');
const cartCountMobile = document.getElementById('cartCountMobile');
const cartCountMobileSummary = document.getElementById('cartCountMobileSummary');
const cartTotalMobile = document.getElementById('cartTotalMobile');
const cartCountDesktop = document.getElementById('cartCountDesktop');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotalDesktop = document.getElementById('cartTotalDesktop');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const checkoutButtonDesktop = document.getElementById('checkoutButtonDesktop'); 
const deliveryFeeDisplay = document.getElementById('deliveryFeeDisplay');
const couponInput = document.getElementById('couponInput');
const couponMessage = document.getElementById('couponMessage');
const discountRow = document.getElementById('discountRow');
const discountCodeDisplay = document.getElementById('discountCodeDisplay');
const discountAmountDisplay = document.getElementById('discountAmountDisplay');

// --- VIEW MANAGEMENT ---
function showView(viewName) {
    homeView.classList.add('hidden', 'opacity-0');
    appView.classList.add('hidden', 'opacity-0');

    if (viewName === 'home') {
        homeView.classList.remove('hidden');
        mobileCartButton.classList.add('hidden');
        appHeaderLocation.classList.add('hidden');
        setTimeout(() => homeView.classList.remove('opacity-0'), 10);
    } else if (viewName === 'app') {
        appView.classList.remove('hidden');
        mobileCartButton.classList.remove('hidden');
        appHeaderLocation.classList.remove('hidden');
        currentLocationDisplay.textContent = selectedLocation;
        setTimeout(() => appView.classList.remove('opacity-0'), 10);
    }
}

function toggleLocationForm(type) {
    trainForm.classList.add('hidden');
    platformForm.classList.add('hidden');

    if (type === 'train') {
        trainForm.classList.remove('hidden');
    } else if (type === 'platform') {
        platformForm.classList.remove('hidden');
    }
}

function submitLocation(type) {
    let locationString = '';
    if (type === 'train') {
        const trainNo = document.getElementById('trainNoInput').value;
        const pnr = document.getElementById('pnrInput').value;
        if (!trainNo || !pnr) {
            showCustomMessage("Please enter both Train Number and PNR.", 'error');
            return;
        }
        locationString = `Train ${trainNo}, Coach B5, Seat 45 (Next Stop: Kanpur)`;
    } else if (type === 'platform') {
        const station = document.getElementById('stationSelect').value;
        const pfNo = document.getElementById('platformNoInput').value;
        const pinPoint = document.getElementById('pinPointInput').value;
         if (!station || !pfNo || !pinPoint) {
            showCustomMessage("Please select Station and enter Platform/Pin Point.", 'error');
            return;
        }
        locationString = `${station}, PF ${pfNo}, Pin Point ${pinPoint}`;
    }

    selectedLocation = locationString;
    showView('app');
    renderCategories();
    renderProducts();
}

// --- SHOPPING FUNCTIONS ---
function renderCategories() {
    const categories = [...new Set(productsData.map(p => p.category))];
    
    categoryNav.innerHTML = `
        <button onclick="changeCategory('All')" 
            class="${currentCategory === 'All' ? 'bg-indigo-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-indigo-100'} 
            px-4 py-2 rounded-full text-sm font-semibold transition duration-150 ease-in-out whitespace-nowrap">
            ⭐ All Essentials
        </button>
    `;

    categories.forEach(cat => {
        const isActive = cat === currentCategory;
        const buttonClass = isActive
            ? 'bg-indigo-700 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-indigo-100';
        
        categoryNav.innerHTML += `
            <button onclick="changeCategory('${cat}')" 
                class="${buttonClass} px-4 py-2 rounded-full text-sm font-semibold transition duration-150 ease-in-out whitespace-nowrap">
                ${getCategoryIcon(cat)} ${cat}
            </button>
        `;
    });
}

function getCategoryIcon(cat) {
    switch (cat) {
        case 'Meds & First Aid': return '💊';
        case 'Baby Care': return '👶';
        case 'Toiletries & Hygiene': return '🪥';
        case 'Electronics & Charging': return '🔌';
        case 'Quick Snacks & Drinks': return '🍪';
        case 'Reading & Entertainment': return '📚';
        case 'Travel Comfort': return '🛏️';
        case 'Gifts & Souvenirs': return '🎁';
        case 'Laundry & Clothing': return '🧺';
        case 'Miscellaneous Tools': return '🔧';
        default: return '📦';
    }
}

function changeCategory(newCategory) {
    currentCategory = newCategory;
    renderCategories(); 
    renderProducts();
}

function renderProducts() {
    productGrid.innerHTML = ''; 
    
    const filteredProducts = currentCategory === 'All'
        ? productsData
        : productsData.filter(p => p.category === currentCategory);

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="text-center text-gray-500 col-span-4 mt-8">No items found in this category.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex flex-col justify-between border-t-4 border-indigo-500 hover:border-red-600 transform hover:scale-[1.02]';
        card.innerHTML = `
            <div class="flex flex-col items-start">
                <span class="text-4xl mb-2">${product.icon}</span>
                <h3 class="text-base font-semibold text-gray-800 line-clamp-2 min-h-[48px]">${product.name}</h3>
                <p class="text-xs text-indigo-500 mt-1">${product.category}</p>
            </div>
            <div class="mt-4 flex justify-between items-center">
                <span class="text-xl font-bold text-red-600">₹${product.price.toFixed(2)}</span>
                <button onclick="addToCart(${product.id})" class="bg-red-600 text-white text-sm font-semibold px-3 py-2 rounded-full transition duration-200 hover:bg-red-700 hover:scale-105 active:scale-95 shadow-md shadow-red-300">
                    Add +
                </button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function updateCartItemQuantity(productId, delta) {
    const existingItem = cart.find(item => item.id === productId);
    if (!existingItem) return;

    existingItem.quantity += delta;

    if (existingItem.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }
    updateCart();
}

function applyCoupon() {
    const inputCode = couponInput.value.trim().toUpperCase();
    
    if (inputCode === '') {
        appliedCouponCode = null;
        couponMessage.textContent = 'Coupon reset.';
        couponMessage.classList.remove('text-red-500');
        couponMessage.classList.add('text-green-600');
        updateCart();
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const coupon = coupons.find(c => c.code === inputCode);

    if (!coupon) {
        appliedCouponCode = null;
        couponMessage.textContent = 'Invalid coupon code.';
        couponMessage.classList.add('text-red-500');
        couponMessage.classList.remove('text-green-600');
    } else if (subtotal < coupon.threshold) {
        appliedCouponCode = null;
        couponMessage.textContent = `Order must be over ₹${coupon.threshold.toFixed(2)} to use ${coupon.code}.`;
        couponMessage.classList.add('text-red-500');
        couponMessage.classList.remove('text-green-600');
    } else {
        appliedCouponCode = coupon.code;
        couponMessage.textContent = `${coupon.description} Applied!`;
        couponMessage.classList.remove('text-red-500');
        couponMessage.classList.add('text-green-600');
    }
    updateCart();
}

function updateCart() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    let deliveryFee = REGULAR_DELIVERY_FEE;
    let deliveryFeeHtml = `<span class="font-semibold text-red-600">₹${REGULAR_DELIVERY_FEE.toFixed(2)}</span>`;

    const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;

    if (isFreeDelivery) {
        deliveryFee = 0.00;
        deliveryFeeHtml = `<span class="font-bold text-green-600">FREE! (Order > ₹${FREE_DELIVERY_THRESHOLD.toFixed(2)})</span>`;
        
        if (!freeDeliveryAlreadyAnnounced) {
            showCustomMessage(`🎉 Congratulations! Your order value is over ₹${FREE_DELIVERY_THRESHOLD.toFixed(2)}.\n\nDelivery is now FREE!`, 'success');
            freeDeliveryAlreadyAnnounced = true;
        }
    } else {
        freeDeliveryAlreadyAnnounced = false;
    }

    let discountAmount = 0;
    const appliedCoupon = coupons.find(c => c.code === appliedCouponCode);
    
    if (appliedCoupon && subtotal < appliedCoupon.threshold) {
        appliedCouponCode = null;
        couponMessage.textContent = `Coupon ${appliedCoupon.code} removed (Subtotal below threshold).`;
        couponMessage.classList.add('text-red-500');
        couponMessage.classList.remove('text-green-600');
        discountRow.classList.add('hidden');
    } else if (appliedCoupon) {
        discountAmount = subtotal * (appliedCoupon.discountPercent / 100);
        
        discountRow.classList.remove('hidden');
        discountCodeDisplay.textContent = appliedCoupon.code;
        discountAmountDisplay.textContent = `-₹${discountAmount.toFixed(2)}`;
    } else {
        discountRow.classList.add('hidden');
    }

    const total = subtotal + deliveryFee - discountAmount;

    cartCountMobile.textContent = totalItems;
    cartCountMobileSummary.textContent = totalItems;
    cartTotalMobile.textContent = `₹${total.toFixed(2)}`;
    cartCountDesktop.textContent = `${totalItems} items`;
    cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    cartTotalDesktop.textContent = `₹${total.toFixed(2)}`;
    deliveryFeeDisplay.innerHTML = deliveryFeeHtml;

    if(checkoutButtonDesktop) {
        checkoutButtonDesktop.textContent = `Proceed to Checkout (₹${total.toFixed(2)})`;
        if (totalItems === 0) {
             checkoutButtonDesktop.disabled = true;
             checkoutButtonDesktop.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            checkoutButtonDesktop.disabled = false;
            checkoutButtonDesktop.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    cartItemsList.innerHTML = '';
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        appliedCouponCode = null;
        couponMessage.textContent = '';
        discountRow.classList.add('hidden');
    } else {
        emptyCartMessage.style.display = 'none';
        
        cart.forEach(item => {
            cartItemsList.innerHTML += `
                <div class="flex justify-between items-center border-b pb-2">
                    <div class="flex-1">
                        <p class="text-sm font-medium text-gray-800 line-clamp-1">${item.icon} ${item.name}</p>
                        <p class="text-xs text-indigo-500">₹${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                    <div class="flex items-center space-x-1">
                        <button onclick="updateCartItemQuantity(${item.id}, -1)" class="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full text-xs font-bold hover:bg-indigo-200">-</button>
                        <span class="text-sm font-semibold text-gray-800">${item.quantity}</span>
                        <button onclick="updateCartItemQuantity(${item.id}, 1)" class="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full text-xs font-bold hover:bg-indigo-200">+</button>
                    </div>
                </div>
            `;
        });
    }
}

function checkout() {
    if (cart.length === 0) {
        console.error("Cart is empty.");
        showCustomMessage("Your cart is empty. Please add items before checking out.", 'error');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0.00 : REGULAR_DELIVERY_FEE;
    
    const appliedCoupon = coupons.find(c => c.code === appliedCouponCode);
    let discountAmount = 0;
    if (appliedCoupon && subtotal >= appliedCoupon.threshold) {
        discountAmount = subtotal * (appliedCoupon.discountPercent / 100);
    }
    
    const finalTotal = (subtotal + deliveryFee - discountAmount).toFixed(2);
    
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    let paymentText = '';
    if (paymentMethod === 'COD') {
        paymentText = `Payment Method: CASH ON DELIVERY\nAmount Due: ₹${finalTotal}`;
    } else {
        paymentText = `Payment Method: Online Payment\nPayment Status: Pending Authorization`;
    }

    let deliveryText = deliveryFee > 0 ? `Delivery Fee: ₹${deliveryFee.toFixed(2)}` : `Delivery Fee: FREE!`;
    let discountText = discountAmount > 0 ? `\nCoupon Discount: -₹${discountAmount.toFixed(2)} (${appliedCouponCode})` : '';

    showCustomMessage(`Order Placed Successfully!
        
Delivery Target: ${selectedLocation}
Total Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}
${deliveryText}${discountText}
${paymentText}`, 'success');
    
    // Clear cart after mock checkout
    cart = [];
    appliedCouponCode = null;
    freeDeliveryAlreadyAnnounced = false;
    updateCart();
    couponInput.value = '';
}

function showCustomMessage(message, type = 'info') {
    let messageBox = document.getElementById('customMessageBox');
    if (!messageBox) {
        messageBox = document.createElement('div');
        messageBox.id = 'customMessageBox';
        messageBox.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-xl shadow-2xl z-50 max-w-sm w-11/12 text-center transition-all duration-300 transform scale-0';
        messageBox.innerHTML = `
            <p id="messageContent" class="whitespace-pre-wrap font-semibold mb-4"></p>
            <button onclick="this.parentNode.classList.remove('scale-100'); this.parentNode.classList.add('scale-0');" class="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-100">OK</button>
        `;
        document.body.appendChild(messageBox);
    }

    const content = document.getElementById('messageContent');
    content.textContent = message;

    let bgColor = 'bg-blue-500';
    let textColor = 'text-white';
    if (type === 'success') {
        bgColor = 'bg-green-600';
    } else if (type === 'error') {
        bgColor = 'bg-red-600';
    } else if (type === 'info') {
        bgColor = 'bg-indigo-600';
    }

    messageBox.className = `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-xl shadow-2xl z-50 max-w-sm w-11/12 text-center transition-all duration-300 ${bgColor} ${textColor} scale-100`;
}

// --- INITIALIZATION ---
window.onload = () => {
    // Start on the home screen
    showView('home'); 
    updateCart(); // Initialize cart counts and buttons
};
