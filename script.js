// START
function startExperience() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("music").play();

    animateName();
}

// NAME
const nameText = "Eain Lin Htet ❤️";
let nameIndex = 0;

function animateName() {
    if (nameIndex < nameText.length) {
        document.getElementById("herName").innerHTML += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(animateName, 100);
    }
}

// LETTER (YOUR FULL ONE)
const text = `To My Most Gorgeous Girl,
Happy Birthday! 🎂

I’ve been thinking about everything we’ve shared over these past few months, from our late-night talks to that "three-month milestone" we just crossed, and I realized something: no matter how many digital cards I build or how many letters I write, they’ll never quite be enough to capture how much you mean to me.
​Even though we’re dealing with the distance right now, you are always the first thing on my mind. You aren't just my girlfriend; you’re my "combo meal"—my partner, my absolute best friend, and the person who makes everything feel a little brighter. Watching you grow and seeing your beautiful smile (even if it’s through a screen for now) is honestly the best part of my day.
​On your special day, I want you to know how proud I am of the person you are. You deserve a year full of success, laughter, and all the happiness in the world. I’m counting down the days until we don't have to say goodbye over a call and can finally celebrate these moments side-by-side.
​Enjoy every second of today, my love. Eat something delicious, stay as radiant as ever, and remember that I’m always right here cheering you on.   

Happy Birthday, Gorgeous! ❤️`;

let i = 0;

function typeLetter() {
    if (i < text.length) {
        document.getElementById("letter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeLetter, 25);
    }
}

// SHOW
function showLetter() {
    document.getElementById("letterBox").classList.remove("hidden");
    typeLetter();
}

function showGallery() {
    document.getElementById("galleryBox").classList.remove("hidden");
}

// TIMER
const startDate = new Date("2025-12-13T16:00:00+06:30");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);

    document.getElementById("timer").innerHTML =
        `❤️ ${days} days ${hours} hours with you`;
}
setInterval(updateTimer, 1000);

// HEARTS
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random()*3+2)+"s";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);

// SECRET (YOUR PROPOSAL FULL)
const secretMessage = `To My Forever,

I’ve spent a lot of time writing you letters, building you digital cards, and trying to find the perfect words to tell you how much I love you...

I want to marry you.

You are my everything, and I can’t wait for the day when I can finally call you my wife.

Yours, always and forever.`;

// LONG PRESS
let pressTimer;

document.body.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
        document.getElementById("secret").classList.remove("hidden");
        document.getElementById("secretText").innerText = secretMessage;
    }, 1500);
});

document.body.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
});

// CLOSE SECRET
document.getElementById("secret").addEventListener("click", () => {
    document.getElementById("secret").classList.add("hidden");
});