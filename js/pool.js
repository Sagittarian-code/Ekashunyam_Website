
const video = document.getElementById("bg-video");
const btn = document.getElementById("registerBtn");
const soundBtn = document.getElementById("soundBtn");

/* SOUND TOGGLE */
soundBtn.addEventListener("click", () => {
  video.muted = !video.muted;

  soundBtn.innerText = video.muted ? "🔇" : "🔊";
});

/* OPTIONAL: UNMUTE ON FIRST CLICK ANYWHERE */
document.addEventListener("click", () => {
  video.muted = false;
  soundBtn.innerText = "🔊";
}, { once: true });

/* SHOW BUTTON AFTER CHAMPIONS PART */
const showTime = 18.5; // 🔥 CHANGE THIS to your exact second

let triggered = false;

video.addEventListener("timeupdate", () => {
  if (!triggered && video.currentTime >= showTime) {
    triggered = true;

    setTimeout(() => {
      btn.classList.add("show");
    }, 500); // small cinematic delay
  }
});

/* NAVIGATION */
btn.addEventListener("click", () => {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdVbOcV4f2g68T1mevTMDbNXR3gF0Eut_geghvHuFCykpu4cg/viewform?usp=publish-editor",
    "_blank"
  );
});

// VIDEO END → FADE OUT → HOME
video.addEventListener("ended", () => {
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "portal.html"; // change if needed
  }, 1000);
});