document.addEventListener("DOMContentLoaded", function () {

    // Friction Calculator
    function calculateFriction() {

    let mass = Number(document.getElementById("mass").value);
    let muStatic = Number(document.getElementById("staticMu").value);
    let muKinetic = Number(document.getElementById("kineticMu").value);

    let normalForce = mass * 9.81;
    let staticFriction = muStatic * normalForce;
    let kineticFriction = muKinetic * normalForce;

    document.getElementById("normalForce").innerHTML =
        normalForce.toFixed(2) + " N";

    document.getElementById("staticResult").innerHTML =
        staticFriction.toFixed(2) + " N";

    document.getElementById("kineticResult").innerHTML =
        kineticFriction.toFixed(2) + " N";
}
    // Contact Form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Message Sent Successfully!");
            contactForm.reset();
        });
    }

    // Card Animation Setup
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease";
    });

    function animateCards() {
        cards.forEach(function (card) {
            const cardTop = card.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (cardTop < screenHeight - 100) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", animateCards);

    // Run once when page loads
    animateCards();
});