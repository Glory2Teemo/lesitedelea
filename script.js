document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const slots = document.querySelectorAll(".slot");
    const resetButton = document.getElementById("reset-cards");
    const checkOrderButton = document.getElementById("check-order");
    const startSlotsContainer = document.getElementById("start-slots-container");

    cards.forEach(card => {
        card.addEventListener("dragstart", function(e) {
            e.dataTransfer.setData("text/plain", card.getAttribute("data-number"));
            card.classList.add("dragging");
        });

        card.addEventListener("dragend", function() {
            card.classList.remove("dragging");
        });
    });

    slots.forEach(slot => {
        slot.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        slot.addEventListener("drop", function(e) {
            e.preventDefault();
            const number = e.dataTransfer.getData("text/plain");
            const cardToPlace = document.querySelector(`.card[data-number="${number}"]`);
            if (!slot.hasChildNodes()) {
                slot.appendChild(cardToPlace);
            }
        });
    });

    resetButton.addEventListener("click", function() {
        cards.forEach(card => {
            const number = parseInt(card.getAttribute("data-number"), 10);
            startSlotsContainer.children[number - 1].appendChild(card);
        });
    });

    checkOrderButton.addEventListener("click", function() {
        // Définition de l'ordre correct des cartes dans les slots
        const correctOrder = [4, 2, 1, 5, 3];
        let score = 0;

        slots.forEach((slot, index) => {
            const card = slot.firstChild;
            if (card) {
                const cardNumber = parseInt(card.getAttribute("data-number"), 10);
                if (cardNumber === correctOrder[index]) {
                    score += 1;
                }
            }
        });

        alert(`Votre score est de : ${score} / 5`);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const confirmButton = document.getElementById("confirmButton");
    const passwordInput = document.getElementById("passwordInput");

    confirmButton.addEventListener("click", function() {
        const password = passwordInput.value;
        if (password === "pythagore") {
            alert("Le mot de passe est correct !");
        } else {
            alert("Mot de passe incorrect.");
        }
    });
});
