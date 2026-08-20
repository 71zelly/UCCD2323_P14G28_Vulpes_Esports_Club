const matches = {

    1: {
        game: "VALORANT",
        title: "Valorant Showdown - Season 1 2026",

        team1: "asset/media/event/Vulpes.png",
        team2: "asset/media/event/Eternal.png",

        time: "5:00 PM",
        date: "AUG 28, 2026"
    },

    2: {
        game: "LOL",
        title: "Summoner Series - Season 2 2026",

        team1: "asset/media/event/Vulpes.png",
        team2: "asset/media/event/GC_club.png",

        time: "4:00 PM",
        date: "AUG 30, 2026"
    }

};

const params = new URLSearchParams(window.location.search);

const matchId = params.get("id");

const match = matches[matchId];


if (match) {

    document.getElementById("ticket-game").textContent = match.game;

    document.getElementById("ticket-title").textContent = match.title;

    document.getElementById("ticket-team1").src = match.team1;

    document.getElementById("ticket-team2").src = match.team2;

    document.getElementById("ticket-time").textContent = match.time;

    document.getElementById("ticket-date").textContent = match.date;

}

//===============================================QUANTITY===========================================
let quantity = 1;


function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("quantity").textContent = quantity;
    }
}


function increaseQuantity() {
    quantity++;
    document.getElementById("quantity").textContent = quantity;
}

//================================================TICKET CONFIEM=====================================
function confirmTicket() {
    window.location.href = "ticket_confirmation.html?id=" + matchId;
}