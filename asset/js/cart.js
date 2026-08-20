let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const SHIPPING_FEE = 5.00;
    /* Example discount codes */
    const DISCOUNT_CODES = {
        "VULPES10": 0.10,
        "WELCOME10": 0.10,
        "VULPES20": 0.20
    };

    let currentDiscountRate = 0;

    const cartItemsElement = document.getElementById("cartItems");
    const emptyCartElement = document.getElementById("emptyCart");
    const subtotalElement = document.getElementById("subtotal");
    const discountAmountElement = document.getElementById("discountAmount");
    const shippingElement = document.getElementById("shippingFee");
    const totalElement = document.getElementById("total");
    const discountForm = document.getElementById("discountForm");
    const discountInput = document.getElementById("discountInput");
    const discountMessage = document.getElementById("discountMessage");
    const checkoutBtn = document.getElementById("checkoutBtn");

    /* FORMAT MONEY */
    function formatMoney(amount) {
        return "RM " + Number(amount).toFixed(2);
    }

    /* SAVE CART */
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    /* RENDER CART PRODUCTS */
    function renderCart() {
        cartItemsElement.innerHTML = "";

        /* Empty cart */
        if (cart.length === 0) {

            cartItemsElement.style.display = "none";
            emptyCartElement.style.display = "flex";

            updateSummary();
            return;
        }

        cartItemsElement.style.display = "flex";
        emptyCartElement.style.display = "none";

        /* Generate every product */
        cart.forEach((product, index) => {

            const item = document.createElement("article");

            item.className = "cart-item";

            /* Image */
            const imageBox = document.createElement("div");
            imageBox.className = "product-image-box";

            if (product.image) {

                const image = document.createElement("img");

                image.className = "product-image";
                image.src = product.image;
                image.alt = product.name;

                /* If image cannot be found, show placeholder instead. */
                image.onerror = function () {
                    image.remove();

                    imageBox.innerHTML = `
                        <div class="product-image-placeholder">
                            NO IMAGE
                        </div>
                    `;
                };

                imageBox.appendChild(image);
            } else {
                imageBox.innerHTML = `
                    <div class="product-image-placeholder">
                        NO IMAGE
                    </div>
                `;
            }

            /* Product information */
            const productInfo = document.createElement("div");
            productInfo.className = "product-info";

            /* Product name */
            const name = document.createElement("h3");
            name.className = "product-name";
            name.textContent = product.name;

            /* Price */
            const price = document.createElement("div");

            price.className = "product-price";
            price.textContent = formatMoney(product.price);

            /* Size */
            let sizeHTML = "";
            if (product.size) {
                sizeHTML = `
                    <div class="product-size">
                        <span class="size-label">SIZE:</span>
                        ${escapeHTML(product.size)}
                    </div>
                `;
            }

            /* Bottom row */
            const bottom = document.createElement("div");
            bottom.className = "item-bottom";

            /* Quantity */
            const quantityControl = document.createElement("div");

            quantityControl.className = "quantity-control";

            const minusButton = document.createElement("button");

            minusButton.type = "button";
            minusButton.textContent = "-";

            minusButton.addEventListener("click", function () {
                decreaseQuantity(index);
            });

            const quantityNumber = document.createElement("div");

            quantityNumber.className = "quantity-number";
            quantityNumber.textContent = product.quantity;

            const plusButton = document.createElement("button");

            plusButton.type = "button";
            plusButton.textContent = "+";

            plusButton.addEventListener("click", function () {
                increaseQuantity(index);
            });

            quantityControl.appendChild(minusButton);
            quantityControl.appendChild(quantityNumber);
            quantityControl.appendChild(plusButton);

            /* Remove */
            const removeButton = document.createElement("button");

            removeButton.type = "button";
            removeButton.className = "remove-btn";
            removeButton.textContent = "Remove";

            removeButton.addEventListener("click", function () {
                removeProduct(index);
            });

            bottom.appendChild(quantityControl);
            bottom.appendChild(removeButton);

            productInfo.innerHTML = `
                <h3 class="product-name"></h3>
                <div class="product-price"></div>
                ${sizeHTML}
            `;

            productInfo.querySelector(".product-name").textContent = product.name;
            productInfo.querySelector(".product-price").textContent = formatMoney(product.price);

            productInfo.appendChild(bottom);

            item.appendChild(imageBox);
            item.appendChild(productInfo);

            cartItemsElement.appendChild(item);
        });

        updateSummary();
    }

    function escapeHTML(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /* INCREASE QUANTITY */
    function increaseQuantity(index) {
        cart[index].quantity += 1;
        saveCart();
        renderCart();
    }

    /* DECREASE QUANTITY */
    function decreaseQuantity(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            /* If quantity is already 1, clicking "-" removes the item. */
            cart.splice(index, 1);
        }
        saveCart();
        renderCart();
    }

    /* REMOVE PRODUCT */
    function removeProduct(index) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }

    function calculateSubtotal() {
        return cart.reduce(function(total, product) {
            return total + (Number(product.price) * Number(product.quantity));
        }, 0);
    }

    function updateSummary() {
        const subtotal = calculateSubtotal();
        const discountAmount = subtotal * currentDiscountRate;
        const total = subtotal - discountAmount + (cart.length > 0 ? SHIPPING_FEE : 0);

        subtotalElement.textContent = formatMoney(subtotal);
        discountAmountElement.textContent = formatMoney(discountAmount);
        shippingElement.textContent = formatMoney(cart.length > 0 ? SHIPPING_FEE : 0);
        totalElement.textContent = formatMoney(total);
    }

    /* DISCOUNT CODE */
    discountForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const code = discountInput.value.trim().toUpperCase();

        if (!code) {
            currentDiscountRate = 0;
            discountMessage.textContent = "PLEASE ENTER A DISCOUNT CODE.";
            discountMessage.className = "discount-message error";

            updateSummary();
            return;
        }

        if (DISCOUNT_CODES[code]) {
            currentDiscountRate = DISCOUNT_CODES[code];
            const percentage = currentDiscountRate * 100;

            discountMessage.textContent = `${percentage}% DISCOUNT APPLIED`;
            discountMessage.className = "discount-message success";
        } else {
            currentDiscountRate = 0;
            discountMessage.textContent = "PLEASE ENTER A VALID DISCOUNT CODE.";
            discountMessage.className = "discount-message error";
        }

        updateSummary();
    });

    checkoutBtn.addEventListener("click", function() {
        if (cart.length === 0) {
            window.alert("YOUR CART IS EMPTY.");
            return;
        }

        const subtotal = calculateSubtotal();
        const discount = subtotal * currentDiscountRate
        const shipping = SHIPPING_FEE;
        const total = subtotal - discount + shipping;

        alert("CHECKOUT\n\n" + "TOTAL: " + formatMoney(total));
    });

    renderCart();