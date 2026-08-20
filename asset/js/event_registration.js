const events = {

    1: {
        title: "VULPES Gaming Night 2026",
        image: "asset/media/event/UpcomingEvent.jpeg",
        date: "Aug 30, 2026",
        time: "6:30 PM",
        venue: "Heritage Hall, Block A",
        description: "Take a break from the competition and join fellow gamers for a fun-filled night of casual gaming, mini-games, and friendly challenges.",
        expect: [
            "•	🎮 Casual gaming sessions ",
            "•	🕹️ Mini-games and friendly challenges ",
            "•	👥 Meet fellow VULPES members ",
            "•	🎁 Fun prizes and giveaways "
        ]
    },

    2: {
        title: "VULPES Esports Skills Lab",
        image: "asset/media/event/more1.jpeg",
        date: "Sep 5, 2026",
        time: "2:00 PM",
        venue: "Training Room A",
        description: "Improve your esports skills with our training session.",
        expect: [
            "•	🎯 Competitive gaming strategies ",
            "•	🗣️ Team communication techniques ",
            "•	🧠 Game analysis and decision-making ",
            "•	🎮 Practical team exercises "
        ]
    },

    3: {
        title: "Enter the Pack: VULPES New Member Day",
        image: "asset/media/event/more2.jpeg",
        date: "Sep 10, 2026",
        time: "3:00 PM",
        venue: "VULPES Clubhouse",
        description: "Welcome to the pack! Join us for an introduction to VULPES Esports Club and discover our teams, activities, events, and opportunities for the new academic year.",
        expect: [
            "•	🦊 Meet the VULPES committee ",
            "•	🎮 Introduction to our esports teams ",
            "•	👥 Meet new club members ",
            "•	📢 Learn about upcoming events "
        ]
    },

    4: {
        title: "VULPES LAN Party: Power Up 2026",
        image: "asset/media/event/more3.jpeg",
        date: "Sep 15, 2026",
        time: "6:00 PM",
        venue: "Gaming Arena",
        description: "Experience an exciting LAN party with fellow gamers.",
        expect: [
            "•	🖥️ LAN gaming sessions ",
            "•	🎮 Casual matches and mini tournaments ",
            "•	👥 Team up with other VULPES members ",
            "•	🏆 Fun challenges and leaderboards "
        ]
    }
};

const params = new URLSearchParams(window.location.search);

const eventId = params.get("id");

const event = events[eventId];

if (event) {

    document.getElementById("registration-title").textContent = event.title;

    document.getElementById("registration-image").src = event.image;

    document.getElementById("registration-date").textContent = event.date;

    document.getElementById("registration-time").textContent = event.time;

    document.getElementById("registration-venue").textContent = event.venue;

}

function registration(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let student_id = document.getElementById("student_id").value;
    let gmail = document.getElementById("gmail").value;
    let error = document.getElementById("error-message");

    if (gmail === "" || student_id === "" || name === "") {
        window.alert("Please enter your name and student id and gmail .");
    }

    else {
        window.location.href = "club_event.html";
        window.alert("🎉 Congratulations! Your registration was successful.")
    }
}