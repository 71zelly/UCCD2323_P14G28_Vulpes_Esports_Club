const newsData = [
    {
        id: 1,
        category: "awards",
        title: "VULPES Esports Club Wins Best University Esports Club 2026",
        date: "AUG 16, 2026",
        image: "asset/media/news/news01.jpg",
        content:
            "VULPES Esports Club has been awarded Best University Esports Club 2026, recognizing our outstanding achievements, teamwork, and contribution to the university esports community."
    },


    {
        id: 2,
        category: "activities",
        title: "VULPES Gaming Night Brings Students Together",
        date: "AUG 10, 2026",
        image: "asset/media/news/news03.jpg",
        content: "Students came together for an exciting night of casual gaming, friendly competition, and community fun."
    },


    {
        id: 3,
        category: "activities",
        title: "Behind the Screens: VULPES Esports Workshop",
        date: "Jul 31, 2026",
        image: "asset/media/news/news05.jpg",
        content: "Members joined our esports workshop to learn more about competitive gaming, teamwork, strategy, and player development."
    },


    {
        id: 4,
        category: "announcement",
        title: "2026/2027 VULPES Membership Registration",
        date: "Jul 20, 2026",
        image: "asset/media/news/news02.png",
        content: "Ready to join the pack? Membership registration for the 2026/2027 academic year is now officially open."
    },


    {
        id: 5,
        category: "awards",
        title: "VULPES Valorant Team Tournament Champion",
        date: "Jul 18, 2026",
        image: "asset/media/news/news04.jpg",
        content: "Our Valorant team secured the championship title after an exciting final match, bringing home another trophy for VULPES."
    },


    {
        id: 6,
        category: "activities",
        title: "Welcome to VULPES: New Member Orientation Day",
        date: "Jul 09, 2026",
        image: "asset/media/news/news06.jpg",
        content: "New members joined us for an introduction to VULPES, our teams, activities, and the exciting year ahead."
    }
];

const newsGrid = document.getElementById("newsGrid");
const filterButtons = document.querySelectorAll(".news-filter-btn");

/* CATEGORY NAME */
function getCategoryName(category) {

    if (category === "awards") {
        return "Awards";
    }
    if (category === "announcement") {
        return "Announcement";
    }
    if (category === "activities") {
        return "Activities";
    }
    return "News";
}


/* CATEGORY ICON */
function getCategoryIcon(category) {
    if (category === "awards") {
        return "🏆";
    }
    if (category === "announcement") {
        return "📢";
    }
    if (category === "activities") {
        return "🎮";
    }
    return "📰";
}

/*  DISPLAY NEWS */
function displayNews(newsList) {
    /* Clear old cards */
    newsGrid.innerHTML = "";

    /* Create News Cards */
    newsList.forEach(function(news) {
        const card = document.createElement("article");
        card.className ="news-card " + news.category;

        /* Store news ID*/
        card.dataset.id = news.id;

        /* Card HTML */
        card.innerHTML = `
            <div class="news-card-image-wrapper">
                <img
                    src="${news.image}"
                    alt="${news.title}"
                    class="news-card-image"
                >
            </div>
            <div class="news-card-content">
                <div class="news-card-category">
                    <span>
                    ${getCategoryIcon(news.category)}
                    </span>

                    ${getCategoryName(news.category)}
                </div>

                <h2 class="news-card-title">
                 ${news.title}
                </h2>

                <div class="news-card-date">
                ${news.date}
                </div>
            </div>
        `;

        /*CLICK CARD*/
        card.addEventListener("click",
            function() {
            window.location.href = "news_detail.html?id=" + news.id;
            }
        );

        /*Add card to page */
        newsGrid.appendChild(card);
    });
}


/* CATEGORY FILTER*/
filterButtons.forEach(function(button) {
    button.addEventListener("click",function() {
             /* Remove active from all buttons */
            filterButtons.forEach(
                function(btn) {
                    btn.classList.remove("active");
                }
            );

            /*Add active to clicked button*/
            this.classList.add("active");

            /* Get selected category*/
            const category = this.dataset.category;

            /*Show all news*/
            if (category === "all") {
                displayNews(newsData);
                return;
            }

            /*Filter news*/
            const filteredNews =
                newsData.filter(
                    function(news) {
                        return (news.category === category);
                    }
                );

            displayNews(filteredNews);
        }
    );
});

displayNews(newsData);