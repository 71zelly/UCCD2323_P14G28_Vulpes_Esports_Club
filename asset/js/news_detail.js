const newsData = [
    {
        id: 1,
        category: "awards",
        title: "VULPES Esports Club Wins Best University Esports Club 2026",
        date: "AUG 16, 2026",
        image: "asset/media/news/news01.jpg",
        content:
            `VULPES Esports Club has been awarded Best University Esports Club 2026, recognizing our outstanding achievements, teamwork, and contribution to the university esports community.
            We are proud to announce that VULPES Esports Club has been named Best University Esports Club 2026. This achievement reflects the dedication of our players, committee members, coaches, and supporters throughout the year.
            From competitive tournaments to community activities, every member of VULPES has contributed to making this achievement possible.
            Thank you to everyone who has supported VULPES. This award is not just ours — it belongs to the whole VULPES community.
            `
    },


    {
        id: 2,
        category: "activities",
        title: "VULPES Gaming Night Brings Students Together",
        date: "AUG 10, 2026",
        image: "asset/media/news/news03.jpg",
        content:
            `Students came together for an exciting night of casual gaming, friendly competition, and community fun.
            The VULPES Gaming Night brought together students from different faculties for an evening filled with games, laughter, and friendly competition.
            Participants had the opportunity to meet new friends, play their favorite games, and experience the VULPES community.
            Thank you to everyone who joined us. We can't wait to see you at our next event!
            `
    },


    {
        id: 3,
        category: "activities",
        title: "Behind the Screens: VULPES Esports Workshop",
        date: "Jul 31, 2026",
        image: "asset/media/news/news05.jpg",
        content: 
            `Members joined our esports workshop to learn more about competitive gaming, teamwork, strategy, and player development.
            VULPES recently hosted an esports workshop designed to help members develop their competitive gaming skills.
            The session covered topics including team communication, game strategy, practice routines, and competitive mindset.
            Members also had the opportunity to interact with experienced players and share their own gaming experiences.
            `
    },


    {
        id: 4,
        category: "announcement",
        title: "2026/2027 VULPES Membership Registration",
        date: "Jul 20, 2026",
        image: "asset/media/news/news02.png",
        content: 
            `Ready to join the pack? Membership registration for the 2026/2027 academic year is now officially open.
            Membership registration for the 2026/2027 academic year is now open to all students interested in esports and gaming.
            As a VULPES member, you can participate in club activities, gaming events, tournaments, workshops, and other exclusive activities.
            Join the pack and start your journey with VULPES!
            `
    },


    {
        id: 5,
        category: "awards",
        title: "VULPES Valorant Team Tournament Champion",
        date: "Jul 18, 2026",
        image: "asset/media/news/news04.jpg",
        content: 
            `After weeks of preparation and intense matches, the VULPES Valorant Team has claimed the Tournament Championship.
            The team showed outstanding teamwork, communication, and determination throughout the competition. After a close final series, VULPES emerged victorious and secured the championship trophy.
            Congratulations to all our players for this incredible achievement!
            `
    },


    {
        id: 6,
        category: "activities",
        title: "Welcome to VULPES: New Member Orientation Day",
        date: "Jul 09, 2026",
        image: "asset/media/news/news06.jpg",
        content: 
            `Our New Member Orientation Day welcomed students who recently joined the VULPES community.
            During the session, new members learned more about our esports teams, upcoming tournaments, club activities, and opportunities to get involved.
            It was a great opportunity for everyone to meet the committee and fellow members.
            `
    }
];

/* Get news ID from URL */
const urlParams = new URLSearchParams(window.location.search);
const newsId = Number(urlParams.get("id"));

/* Find selected news */
const selectedNews = newsData.find(function (news) {
    return news.id === newsId;
});

/* Category name */
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

/* Display news */
if (selectedNews) {
    document.getElementById("newsImage").src = selectedNews.image;
    document.getElementById("newsImage").alt = selectedNews.title;
    document.getElementById("newsCategory").textContent = getCategoryIcon(selectedNews.category) + " " + getCategoryName(selectedNews.category);
    document.getElementById("newsDate").textContent = selectedNews.date;
    document.getElementById("newsTitle").textContent = selectedNews.title;
    document.getElementById("newsContent").textContent = selectedNews.content;

}