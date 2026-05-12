// script.js

// ================= TYPING EFFECT =================

const texts = [
  "SOC Operations & Defensive Security",
  "Penetration Testing & Networking",
  "Cybersecurity Student & Researcher",
  "Building Secure Digital Systems"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

  const fullText = texts[index];

  if (!isDeleting) {

    typingElement.textContent =
      fullText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === fullText.length) {

      isDeleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

    setTimeout(typeEffect, 50);

  } else {

    typingElement.textContent =
      fullText.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      isDeleting = false;

      index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, 30);
  }
}

typeEffect();


// ================= ACTIVE NAV =================

const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let fromTop = window.scrollY;

  links.forEach(link => {

    const section =
      document.querySelector(link.getAttribute("href"));

    if (!section) return;

    if (
      section.offsetTop <= fromTop + 120 &&
      section.offsetTop + section.offsetHeight > fromTop + 120
    ) {

      link.classList.add("active");

    } else {

      link.classList.remove("active");
    }
  });
});


// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");
      }
    });
  },

  {
    threshold:0.15
  }
);

reveals.forEach(el => observer.observe(el));


// ================= MATRIX BACKGROUND =================

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const letters =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 14;

const columns = canvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++){

  drops[x] = 1;
}

function drawMatrix(){

  ctx.fillStyle = "rgba(0,0,0,0.18)";

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = "rgba(0,255,136,0.45)";

  ctx.font = fontSize + "px monospace";

  for(let i = 0; i < drops.length; i++){

    const text =
    letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(
      text,
      i * fontSize,
      drops[i] * fontSize
    );

    if(
      drops[i] * fontSize > canvas.height &&
      Math.random() > 0.975
    ){

      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 40);

window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;
});





 