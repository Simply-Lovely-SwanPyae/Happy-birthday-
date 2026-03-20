// ------------------------
// START EXPERIENCE
// ------------------------
function startExperience() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    const audio = document.getElementById("music");
    audio.play().catch(e => console.log("Audio play blocked until user interaction."));

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
const letterText = `To My Most Gorgeous Girl,
Happy Birthday! 🎂

I’ve been thinking about everything we’ve shared over these past few months, from our late-night talks to that "three-month milestone" we just crossed, and I realized something: no matter how many digital cards I build or how many letters I write, they’ll never quite be enough to capture how much you mean to me.

Even though we’re dealing with the distance right now, you are always the first thing on my mind. You're not just my girlfriend; you're my everything. You're the whole package—the one I share my life with, my closest confidante, and the person who always manages to make things feel a bit more hopeful.

Watching you grow and seeing your beautiful smile (even if it’s through a screen for now) is honestly the best part of my day.

On your special day, I want you to know how proud I am of the person you are. May this year bring you success, joy, and every happiness imaginable.

I’m counting down the days until we don't have to say goodbye over a call and can finally celebrate these moments side-by-side.

Enjoy every second of today, my love. Savor something tasty, keep shining bright, and know that I'm always here, rooting for you.

Happy Birthday, Gorgeous! ❤️`;

let letterIndex = 0;
function typeLetter() {
    if (letterIndex < letterText.length) {
        document.getElementById("letter").innerHTML += letterText.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeLetter, 20); 
    }
}

// ------------------------
// SHOW SECTIONS
// ------------------------
function showLetter() {
    const box = document.getElementById("letterBox");
    if (box.classList.contains("hidden")) {
        box.classList.remove("hidden");
        typeLetter();
    }
}

function showGallery() {
    document.getElementById("galleryBox").classList.remove("hidden");
}

// ------------------------
// LIVE ANNIVERSARY TIMER
// ------------------------
const anniversary = new Date("2025-12-13T16:00:00+06:30"); 

function updateTimer() {
    const now = new Date();
    const diff = now - anniversary; 

    if (diff < 0) {
        document.getElementById("timer").innerHTML = "❤️ Our journey begins soon!";
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("timer").innerHTML =
        `❤️ ${days}d ${hours}h ${minutes}m ${seconds}s together since 13 Dec`;
}
setInterval(updateTimer, 1000);
updateTimer(); 

// ------------------------
// HEARTS ANIMATION
// ------------------------
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);

// ------------------------
// SECRET PROPOSAL MESSAGE
// ------------------------
const secretMessage = `To My Forever,

I’ve spent a lot of time writing you letters, building you digital cards, and trying to find the perfect words to tell you how much I love you.

I don’t just want to be your boyfriend. I want to be the person who wakes up next to you every single morning. I want to be the one who builds a real, physical home with you.

What I’m trying to say is... I see my entire future in your eyes. I want to marry you. Not just for the "big day," but for all the small, quiet days in between. 

You are my everything, and I can’t wait for the day when I can finally call you my wife.

Yours, always and forever.`;

function showSecret() {
    document.getElementById("secret").classList.remove("hidden");
    document.getElementById("secretText").innerText = secretMessage;
}

function closeSecret() {
    document.getElementById("secret").classList.add("hidden");
}
