const ticketButtons = document.querySelectorAll(".ticket-btn");

ticketButtons.forEach((button, index) => {

    button.addEventListener("click", function () {
        if (!checkLogin()) {
            return;
        }

        const matchId = index + 1;

        window.location.href = `ticket_purchase.html?id=${matchId}`;

    });

});