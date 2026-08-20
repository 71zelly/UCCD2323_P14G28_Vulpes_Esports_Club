document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const product = products[productId];

    /* ================= GET HTML ELEMENTS ================= */
    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const productDescription = document.getElementById("productDescription");
    const productImage = document.getElementById("mainProductImage");
    const productThumbnails = document.getElementById("productThumbnails");
    const sizeGroup = document.getElementById("sizeGroup");
    const sizeButtonsContainer = document.getElementById("sizeButtons");
    const quantityValue = document.getElementById("quantityValue");
    const quantityMinus = document.getElementById("quantityMinus");
    const quantityPlus = document.getElementById("quantityPlus");
    const addToCartButton = document.getElementById("addToCartBtn");
    const cartMessage = document.getElementById("cartMessage");

    /* ================= PRODUCT INFORMATION ================= */
    productName.textContent = product.name;
    productPrice.textContent = product.price;
    productDescription.textContent = product.description;
    document.title = product.name + " | The Way To The Top";

    /* ================= MAIN IMAGE ================= */
    productImage.src = product.images[0];
    productImage.alt = product.name;

    /* ================= THUMBNAILS ================= */
    productThumbnails.innerHTML = "";

    product.images.forEach(
        function (image, index) {
            const thumbnail = document.createElement("button");

            thumbnail.type = "button";
            thumbnail.className = "thumbnail";

            /* First image */
            if (index === 0) {
                thumbnail.classList.add("active");
            }

            thumbnail.innerHTML = `
                <img
                    src="${image}"
                    alt="${product.name}">
            `;

            /* Change main image */
            thumbnail.addEventListener(
                "click",
                function () {
                    productImage.src = image;
                    const allThumbnails = document.querySelectorAll(".thumbnail");

                    allThumbnails.forEach(
                        function (item) {
                            item.classList.remove("active");
                        }
                    );

                    thumbnail.classList.add("active");
                }
            );

            productThumbnails.appendChild(thumbnail);
        }
    );

    /* ================= SIZE ================= */
    if (product.hasSize === true) {
        sizeGroup.style.display = "block";
        sizeButtonsContainer.innerHTML = "";

        const sizes = [
            "S",
            "M",
            "L"
        ];

        /* Create buttons */
        sizes.forEach(
            function (size) {
                const button = document.createElement("button");

                button.type = "button";
                button.className = "size-btn";
                button.textContent = size;
                button.dataset.size = size;

                /* Click size */
                button.addEventListener("click",
                    function () {
                        const allSizeButtons = document.querySelectorAll(".size-btn");

                        allSizeButtons.forEach(
                            function (item) {
                                item.classList.remove("active");
                            }
                        );
                        button.classList.add("active");
                    }
                );
                sizeButtonsContainer.appendChild(button);
            }
        );
    } else {
        sizeGroup.style.display = "none";
    }

    /* ================= QUANTITY ================= */
    let quantity = 1;

    quantityMinus.addEventListener("click",
        function () {
            if (quantity > 1) {
                quantity--;
                quantityValue.textContent = quantity;
            }
        }
    );

    quantityPlus.addEventListener("click",
        function () {
            if (quantity < 10) {
                quantity++;
                quantityValue.textContent = quantity;
            }
        }
    );

    addToCartButton.addEventListener("click", function () {
        if (!checkLogin()) {
            return;
        }

        let selectedSize = null;

        /* ================= CHECK SIZE ================= */
        if (product.hasSize === true) {
            const selectedSizeButton =
                document.querySelector(".size-btn.active");

            if (!selectedSizeButton) {
                cartMessage.textContent = "Please select a size.";
                cartMessage.style.color = "#ff7b9c";
                return;
            }
            selectedSize = selectedSizeButton.dataset.size;
        }

        /* ================= GET CART ================= */
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        /* ================= CART ITEM ID ================= */
        const cartItemId = product.hasSize
            ? `${productId}-${selectedSize}`
            : productId;

        /* ================= CHECK EXISTING PRODUCT ================= */
        const existingProduct = cart.find(
            function (item) {
                return item.cartItemId === cartItemId;
            }
        );

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({
                cartItemId: cartItemId,
                productId: productId,
                name: product.name,
                price: parseFloat(product.price.replace("RM", "").trim()),
                image: product.images[0],
                size: selectedSize,
                quantity: quantity
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        cartMessage.textContent = "✓ Added to cart!";
        cartMessage.style.color = "#65ffb3";
    });
});