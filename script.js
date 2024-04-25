const unlockDate = new Date("May 2, 2024 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = unlockDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Unlocking in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("locked-link").style.display = "inline-block";
    }
}, 1000);
const unlockDate = new Date("May 2, 2024 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = unlockDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Unlocking in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("locked-link").style.display = "inline-block";
        document.getElementById("unlock-text").style.display = "block";
    }
}, 1000);

document.getElementById("locked-link").addEventListener("click", function(event) {
    if (new Date() < unlockDate) {
        event.preventDefault(); // Prevent the default action of the link
        alert("The link is locked. You can view it after the timer ends.");
    }
});
