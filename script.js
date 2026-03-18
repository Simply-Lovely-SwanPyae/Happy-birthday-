// ------------------------
// START EXPERIENCE
// ------------------------
function startExperience() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("music").play();

    animateName();
}

// ------------------------
// NAME ANIMATION
// ------------------------
const nameText = "Eain Lin Htet ❤️";
let nameIndex = 0;

function animateName() {
    if (nameIndex < nameText.length) {
        document.getElementById("herName").innerHTML += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(animateName, 100);
    }
}

// ------------------------
// BIRTHDAY LETTER
// ------------------------
const text = `To My Most Gorgeous Girl,
Happy Birthday! 🎂

I’ve been thinking about everything we’ve shared over these past few months, from our late-night talks to that "three-month milestone" we just crossed, and I realized something: no matter how many digital cards I build or how many letters I write, they’ll never quite be enough to capture how much you mean to me.

Even though we’re dealing with the distance right now, you are always the first thing on my mind. You're not just my girlfriend; you're my everything. You're the whole package—the one I share my life with, my closest confidante, and the person who always manages to make things feel a bit more hopeful.

Watching you grow and seeing your beautiful smile (even if it’s through a screen for now) is honestly the best part of my day.

On your special day, I want you to know how proud I am of the person you are. May this year bring you success, joy, and every happiness imaginable.

I’m counting down the days until we don't have to say goodbye over a call and can finally celebrate these moments side-by-side.

Enjoy every second of today, my love. Savor something tasty, keep shining bright, and know that I'm always here, rooting for you.

Happy Birthday, Gorgeous! ❤️`;

let i = 0;
function typeLetter() {
    if (i < text.length) {
        document.getElementById("letter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeLetter, 15); // smooth typing
    }
}

// ------------------------
// SHOW SECTIONS
// ------------------------
function showLetter() {
    document.getElementById("letterBox").classList.remove("hidden");
    typeLetter();
}
function showGallery() {
    document.getElementById("galleryBox").classList.remove("hidden");
}

// ------------------------
// LIVE ANNIVERSARY TIMER SINCE 13 DEC 4 PM MYANMAR TIME
// ------------------------
const anniversary = new Date("2025-12-13T16:00:00+06:30"); // Dec 13, 4 PM Myanmar time

function updateTimer() {
    const now = new Date();
    const diff = now - anniversary; // milliseconds since anniversary

    if (diff < 0) {
        document.getElementById("timer").innerHTML = "❤️ Our anniversary hasn't started yet!";
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("timer").innerHTML =
        `❤️ ${days}d ${hours}h ${minutes}m ${seconds}s together since 13 Dec 4 PM`;
}

setInterval(updateTimer, 1000);
updateTimer(); // initialize immediately

// ------------------------
// HEARTS ANIMATION
// ------------------------
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);

// ------------------------
// SECRET PROPOSAL MESSAGE
// ------------------------
const secretMessage = `To My Forever,

I’ve spent a lot of time writing you letters, building you digital cards, and trying to find the perfect words to tell you how much I love you. But as I look at where we are and where we’re going, I realize there’s one thing I haven't said clearly enough yet.

I don’t just want to be your boyfriend, and I don’t just want to be your best friend from a distance. I want to be the person who wakes up next to you every single morning. I want to be the one who shares every meal with you, who supports every dream you have, and who builds a real, physical home with you.

What I’m trying to say is... I see my entire future in your eyes. Through the long calls and the countdowns until we see each other, I’ve realized that you are the only person I want to walk through life with.

I want to marry you. Not just for the "big day," but for all the small, quiet days in between. I want to build a life where "goodbye" isn't something we ever have to say again.

You are my everything, and I can’t wait for the day when I can finally call you my wife.

Yours, always and forever.`;

// ------------------------
// LONG PRESS SECRET (MOBILE + DESKTOP)
// ------------------------
let pressTimer;

function showSecret() {
    document.getElementById("secret").classList.remove("hidden");
    document.getElementById("secretText").innerText = secretMessage;
}

// Mobile
document.body.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevent copy menu
    pressTimer = setTimeout(showSecret, 1500);
});
document.body.addEventListener("touchend", () => clearTimeout(pressTimer));

// Desktop
document.body.addEventListener("mousedown", () => {
    pressTimer = setTimeout(showSecret, 1500);
});
document.body.addEventListener("mouseup", () => clearTimeout(pressTimer));

// Close secret on tap
document.getElementById("secret").addEventListener("click", () => {
    document.getElementById("secret").classList.add("hidden");
});