const products = {
    "hoodie-black": {
        name: "VULPES Hoodies (Black)",
        price: "RM 60.00",
        images: [
            "asset/media/store/black_hoodies_front.png",
            "asset/media/store/black_hoodies_back.png",
            "asset/media/store/black_hoodies_model_front.png",
            "asset/media/store/black_hoodies_model_back.png"
        ],
        description: `
        Stay comfortable while showing your support for Vulpes. 
        This black hoodie features the Vulpes branding with a clean esports-inspired design, 
        making it suitable for gaming sessions, events, or everyday wear.
        `,
        hasSize: true
    },

    "hoodie-purple": {
        name: "VULPES Hoodies (Purple)",
        price: "RM 60.00",
        images: [
            "asset/media/store/purple_hoodies_front.png",
            "asset/media/store/purple_hoodies_back.png",
            "asset/media/store/purple_hoodies_model_front.png",
            "asset/media/store/purple_hoodies_model_back.png"
        ],
        description: `
        Show your Vulpes spirit with this stylish purple hoodie. 
        Designed with a bold esports-inspired look, 
        it combines comfort and team identity, 
        making it perfect for gaming events or casual wear.
        `,
        hasSize: true
    },

    "tshirt": {
        name: "VULPES Tshirt",
        price: "RM 40.00",
        images: [
            "asset/media/store/tshirt_front.png",
            "asset/media/store/tshirt_back.png"
        ],
        description: `
        Represent Vulpes wherever you go with this comfortable and casual T-shirt. 
        Featuring the Vulpes branding, 
        it is suitable for everyday wear, gaming events, and supporting the club during competitions.
        `,
        hasSize: true
    },

    "keychain": {
        name: "VULPES Keychain",
        price: "RM 10.00",
        images: [
            "asset/media/store/keychain.png"
        ],
        description: `
        Take a little piece of Vulpes with you wherever you go. 
        This compact Vulpes keychain features the club's branding 
        and is a fun accessory for your keys, backpack, or gaming setup.
        `,
        hasSize: false
    },

    "cap": {
        name: "VULPES Cap",
        price: "RM 30.00",
        images: [
            "asset/media/store/cap.png"
        ],
        description: `
        Complete your esports look with the Vulpes Cap. 
        Featuring the Vulpes logo and a simple design, 
        this cap is perfect for everyday use, gaming events, 
        or showing your support for the club.
        `,
        hasSize: false
    },

    "mousepad": {
        name: "VULPES Mousepad",
        price: "RM 30.00",
        images: [
            "asset/media/store/mousepad.png"
        ],
        description: `
        Upgrade your gaming setup with the Vulpes Mousepad. 
        Featuring Vulpes branding and a clean esports-inspired design, 
        it is a great addition to any gaming desk while showing your support for the club.
        `,
        hasSize: false
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const viewButtons = document.querySelectorAll(".view-btn");

    viewButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const link = button.getAttribute("href");
            if (link) {
                window.location.href = link;
            }
        });
    });
});
