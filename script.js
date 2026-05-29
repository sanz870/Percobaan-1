// ============================
// LOADER HILANG
// ============================

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2000);

});

// ============================
// MUSIC BUTTON
// ============================

window.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bg-music");
    const button = document.getElementById("music-btn");

    button.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            button.innerHTML = "🎶 Musik ON";

        } else {

            music.pause();

            button.innerHTML = "🎵 Putar Musik";

        }

    });

});

// ============================
// COUNTDOWN
// ============================

const targetDate = new Date("December 28, 2026 08:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".countdown-box").innerHTML =
            "<h2>Acara Dimulai</h2>";

    }

}, 1000);

// ============================
// ANIMASI SCROLL
// ============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(
    ".card-mempelai, .event-card, .gallery-item, .story-item, .quote-box, .time"
);

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ============================
// PETALS EFFECT
// ============================

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    petal.style.fontSize =
        Math.random() * 20 + 20 + "px";

    document.body.appendChild(petal);

    setTimeout(function () {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 500);

// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ============================
// RSVP FORM
// ============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Terima kasih atas ucapan dan doa nya ❤️");

    form.reset();

});

// ============================
// PARALLAX HERO
// ============================

window.addEventListener("scroll", function () {

    const scrollY = window.scrollY;

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY =
        scrollY * 0.5 + "px";

});

// ============================
// STYLE TAMBAHAN DARI JS
// ============================

const style = document.createElement("style");

style.innerHTML = `

.hidden{
    opacity:0;
    transform:translateY(80px);
    transition:all 1s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}

.petal{
    position:fixed;
    top:-10%;
    z-index:999;
    pointer-events:none;
    animation:fall linear forwards;
}

@keyframes fall{

    to{
        transform:translateY(120vh) rotate(360deg);
    }

}

`;

document.head.appendChild(style);

// ============================
// CONSOLE
// ============================

console.log("Wedding Invitation Ready ❤️");