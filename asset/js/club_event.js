const eventButtons = document.querySelectorAll(".view-event");

eventButtons.forEach((button, index) => {

    button.addEventListener("click", function () {

        const eventId = index + 1;

        window.location.href = `event_detail.html?id=${eventId}`;

    });

});

