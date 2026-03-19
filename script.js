// Slider functionality
const slides = document.querySelectorAll(".slider-item");
const dots = document.querySelectorAll(".dot");
const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    if (dots[i]) dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextbtn.addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

prevbtn.addEventListener("click", () => {
  prevSlide();
  resetInterval();
});
let slideInterval = setInterval(nextSlide, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  localStorage.setItem("ageConfirmed", "true");
  ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alert("Acceso denegado. Sitio solo para mayores de 18 años.");
  window.close();
  window.location.href = "https://www.google.pl";
});

// Mobile hamburger menu behavior
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

let backdrop = document.createElement("div");
backdrop.className = "mobile-menu-backdrop";
document.body.appendChild(backdrop);

function openMobileMenu() {
  mobileMenu.setAttribute("aria-hidden", "false");
  hamburger.setAttribute("aria-expanded", "true");
  backdrop.classList.add("visible");
  document.body.classList.add("locked");
  const firstLink = mobileMenu.querySelector("a");
  if (firstLink) firstLink.focus();
}

function closeMobileMenu() {
  mobileMenu.setAttribute("aria-hidden", "true");
  hamburger.setAttribute("aria-expanded", "false");
  backdrop.classList.remove("visible");
  document.body.classList.remove("locked");
  hamburger.focus();
}

if (hamburger) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMobileMenu();
    else openMobileMenu();
  });
}

if (mobileClose) {
  mobileClose.addEventListener("click", closeMobileMenu);
}

backdrop.addEventListener("click", closeMobileMenu);

// close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (mobileMenu && mobileMenu.getAttribute("aria-hidden") === "false") {
      closeMobileMenu();
    }
  }
});

// city div
const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");
city.addEventListener("click", toggleCont);
function toggleCont() {
  city.classList.toggle("active");
  Array.from(cont).forEach((el) => {
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
}

const yearSpan = document.querySelector('#year');
if (yearSpan) {
  yearSpan.innerText = new Date().getFullYear();
}
