const matches = {

    1: {
        game: "VALORANT",

        title: "Valorant Showdown - Season 1 2026",

        team1: "asset/media/event/Vulpes.png",
        team2: "asset/media/event/Eternal.png",

        time: "5:00 PM",

        date: "Aug 28, 2026",

        venue: "Block M, UTAR"
    },


    2: {
        game: "LOL",

        title: "Summoner Series - Season 2 2026",

        team1: "asset/media/event/Vulpes.png",
        team2: "asset/media/event/GC_club.png",

        time: "4:00 PM",

        date: "Aug 30, 2026",

        venue: "Training Room A"
    }

};


const params = new URLSearchParams(window.location.search);

const matchId = params.get("id");

const match = matches[matchId];

if (match) {

    document.getElementById("confirmation-title").textContent =
        match.title;


    document.getElementById("confirmation-date").textContent =
        match.date;


    document.getElementById("confirmation-time").textContent =
        match.time;


    document.getElementById("confirmation-venue").textContent =
        match.venue;

}

// GENERATE RANDOM TICKET ID
function generateTicketID() {

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let ticketID = "VP";


    for (let i = 0; i < 12; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        ticketID += characters[randomIndex];

    }


    return ticketID;
}


// Display Ticket ID
const ticketID = generateTicketID();

document.getElementById("ticket-id").textContent =
    ticketID;

// GENERATE QR CODE

const qrCode = new QRCode(
    document.getElementById("qrcode"),
    {
        text: ticketID,

        width: 250,

        height: 250
    }
);