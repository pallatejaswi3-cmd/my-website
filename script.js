const products = [

    {
        id: 1,
        name: "Premium Headphones",
        category: "Electronics",
        price: 2499,
        oldPrice: 3999,
        rating: 4.8,
        discount: "38% OFF",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 1999,
        oldPrice: 3499,
        rating: 4.6,
        discount: "43% OFF",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 3,
        name: "Running Shoes",
        category: "Shoes",
        price: 1799,
        oldPrice: 2999,
        rating: 4.7,
        discount: "40% OFF",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 4,
        name: "Women's Fashion Dress",
        category: "Fashion",
        price: 1299,
        oldPrice: 2499,
        rating: 4.5,
        discount: "48% OFF",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 5,
        name: "Wireless Speaker",
        category: "Electronics",
        price: 1499,
        oldPrice: 2499,
        rating: 4.4,
        discount: "40% OFF",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 6,
        name: "Classic Sunglasses",
        category: "Accessories",
        price: 799,
        oldPrice: 1499,
        rating: 4.3,
        discount: "47% OFF",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 7,
        name: "Beauty Skin Care",
        category: "Beauty",
        price: 999,
        oldPrice: 1699,
        rating: 4.6,
        discount: "41% OFF",
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 8,
        name: "Men's Casual Shirt",
        category: "Fashion",
        price: 899,
        oldPrice: 1599,
        rating: 4.2,
        discount: "44% OFF",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 9,
        name: "Laptop",
        category: "Electronics",
        price: 54999,
        oldPrice: 69999,
        rating: 4.9,
        discount: "21% OFF",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 10,
        name: "Backpack",
        category: "Accessories",
        price: 1199,
        oldPrice: 1999,
        rating: 4.4,
        discount: "40% OFF",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 11,
        name: "Sports Shoes",
        category: "Shoes",
        price: 2199,
        oldPrice: 3499,
        rating: 4.7,
        discount: "37% OFF",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 12,
        name: "Makeup Kit",
        category: "Beauty",
        price: 1499,
        oldPrice: 2499,
        rating: 4.5,
        discount: "40% OFF",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80"
    }

];


let cart = [];
let wishlist = [];


/* DISPLAY PRODUCTS */

function displayProducts(list = products) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `

            <span class="discount">
                ${product.discount}
            </span>

            <button class="wishlist"
                onclick="addWishlist(${product.id})">

                ❤️

            </button>

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>

                <span class="price">
                    ₹${product.price}
                </span>

                <span class="old-price">
                    ₹${product.oldPrice}
                </span>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})">

                    🛒 Add to Cart

                </button>

            </div>
        `;

        grid.appendChild(card);

    });

}


/* ADD TO CART */

function addToCart(id) {

    const product = products.find(p => p.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updateCart();

    showNotification("Product added to cart 🛒");
}


/* UPDATE CART */

function updateCart() {

    const cartItems = document.getElementById("cartItems");

    const cartCount = document.getElementById("cartCount");

    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        count += item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <img src="${item.image}">

                <div>

                    <h4>${item.name}</h4>

                    <p>₹${item.price}</p>

                    <div class="quantity">

                        <button onclick="changeQuantity(${item.id}, -1)">
                            -
                        </button>

                        ${item.quantity}

                        <button onclick="changeQuantity(${item.id}, 1)">
                            +
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

    cartCount.innerText = count;

    cartTotal.innerText = total.toLocaleString("en-IN");

}


/* CHANGE QUANTITY */

function changeQuantity(id, change) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        cart = cart.filter(product => product.id !== id);

    }

    updateCart();
}


/* OPEN CART */

function openCart() {

    document.getElementById("cartPanel")
        .classList.add("active");

    document.getElementById("overlay")
        .classList.add("active");

}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cartPanel")
        .classList.remove("active");

    document.getElementById("overlay")
        .classList.remove("active");

}


/* SEARCH */

function searchProducts() {

    const value =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const result = products.filter(product =>
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
    );

    displayProducts(result);

}


/* CATEGORY */

function filterCategory(category) {

    const result =
        products.filter(product =>
            product.category === category
        );

    displayProducts(result);

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* SHOW ALL */

function showAllProducts() {

    displayProducts(products);

}


/* SORT */

function sortProducts() {

    const value =
        document.getElementById("sortProducts").value;

    let result = [...products];

    if (value === "low") {

        result.sort((a, b) =>
            a.price - b.price
        );

    }

    if (value === "high") {

        result.sort((a, b) =>
            b.price - a.price
        );

    }

    if (value === "rating") {

        result.sort((a, b) =>
            b.rating - a.rating
        );

    }

    displayProducts(result);

}


/* WISHLIST */

function addWishlist(id) {

    const product = products.find(p => p.id === id);

    if (!wishlist.includes(product)) {

        wishlist.push(product);

        showNotification(
            "Added to wishlist ❤️"
        );

    } else {

        showNotification(
            "Already in wishlist ❤️"
        );

    }

    document.getElementById("wishCount")
        .innerText = wishlist.length;

}


function showWishlist() {

    if (wishlist.length === 0) {

        alert("Your wishlist is empty ❤️");

        return;
    }

    displayProducts(wishlist);

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* DARK MODE */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

}


/* NOTIFICATION */

function showNotification(message) {

    const notification =
        document.getElementById("notification");

    notification.innerText = message;

    notification.style.display = "block";

    setTimeout(() => {

        notification.style.display = "none";

    }, 2000);

}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    alert(
        "Thank you for shopping with ShopZone! 🎉\n\n" +
        "Checkout feature can be connected to a payment gateway later."
    );

}


/* SCROLL */

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* SEARCH USING ENTER */

document.getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            searchProducts();

        }

    });


/* LOAD PRODUCTS */

displayProducts();