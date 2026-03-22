const cards = document.querySelectorAll(".event-card");
const scrollContainer = document.querySelector(".events-scroll");

let currentIndex = 0;
let isAnimating = false;


// OPEN EVENT PAGE
function openEvent(page) {
  window.location.href = page;
}


// MOVE TO CARD (SMOOTH CENTER)
function goToCard(index) {
  if (index < 0 || index >= cards.length) return;
  if (isAnimating) return;

  isAnimating = true;
  currentIndex = index;

  const card = cards[index];

  const containerRect = scrollContainer.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const offset = cardRect.left - containerRect.left;
  const scrollLeft =
    scrollContainer.scrollLeft +
    offset -
    (containerRect.width / 2 - cardRect.width / 2);

  scrollContainer.scrollTo({
    left: scrollLeft,
    behavior: "smooth"
  });

  updateActive();

  setTimeout(() => {
    isAnimating = false;
  }, 400);
}


// ACTIVE CARD
function updateActive() {
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === currentIndex);
  });
}


// ARROW CONTROLS
function nextCard() {
  goToCard(currentIndex + 1);
}

function prevCard() {
  goToCard(currentIndex - 1);
}


// BUTTON NAVIGATION (FIX PATH IF NEEDED)
function goPortal() {
  window.location.href = "../html/portal.html";
}

function goContact() {
  window.location.href = "../html/contact.html";
}

function goRegister() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdVbOcV4f2g68T1mevTMDbNXR3gF0Eut_geghvHuFCykpu4cg/viewform?usp=publish-editor",
    "_blank"
  );
}

// INITIAL LOAD
window.onload = () => {
  goToCard(0);
};