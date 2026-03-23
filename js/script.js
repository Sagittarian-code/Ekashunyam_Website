/* ================= INTRO VIDEO CONTROLS ================= */
const video = document.getElementById("bg-video");
const muteBtn = document.getElementById("muteBtn");
const skipBtn = document.getElementById("skipBtn");

// Ensure autoplay works
if (video) {
  video.muted = true;
  video.volume = 1;

  video.play().catch(() => {
    console.log("Autoplay blocked");
  });
}

// MUTE / UNMUTE (FIXED)
if (video && muteBtn) {
  muteBtn.addEventListener("click", () => {

    if (video.muted) {
      video.muted = false;
      video.volume = 1;

      // ✅ IMPORTANT FIX (user interaction play)
      video.play().then(() => {
        console.log("Audio working");
      }).catch((err) => {
        console.log("Error:", err);
      });

      muteBtn.innerText = "🔊";

    } else {
      video.muted = true;
      muteBtn.innerText = "🔇";
    }

  });
}

// SMOOTH REDIRECT FUNCTION
function goToNextPage() {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.replace("welcome.html");
  }, 600);
}

// SKIP BUTTON
if (skipBtn) {
  skipBtn.addEventListener("click", goToNextPage);
}

// AUTO REDIRECT AFTER VIDEO ENDS
if (video) {
  video.addEventListener("ended", goToNextPage);
}

/* ================= HOME PAGE BUTTONS ================= */

document.addEventListener("DOMContentLoaded", () => {

  const backBtn = document.getElementById("backBtn");
  const exploreBtn = document.getElementById("exploreBtn");
  const portalBtn = document.getElementById("portalBtn");

  if(backBtn){
    backBtn.onclick = () => {
      window.location.href = "intro.html";
    };
  }

  if(exploreBtn){
    exploreBtn.onclick = () => {
      window.location.href = "pool.html";
    };
  }

  if(portalBtn){
    portalBtn.onclick = () => {
      window.location.href = "portal.html";
    };
  }

});

// ================= EKASHUNYAM PORTAL JS =================
    // ================= PORTAL ITEMS =================

    const bgVideo = document.getElementById("bg-video");

// function to stop video smoothly
function stopVideoEffect(){
    if(bgVideo){
        bgVideo.style.transition = "opacity 0.5s ease";
        bgVideo.style.opacity = "0"; // fade out

        setTimeout(() => {
            bgVideo.pause();
        }, 500);
    }
}

// detect ANY user interaction
["click", "keydown", "touchstart"].forEach(event => {
    document.addEventListener(event, stopVideoEffect, { once: true });
});

    const portalItems = document.querySelectorAll(".portal-item");

    portalItems.forEach(function(item) {
        item.addEventListener("click", function () {

            const link = item.getAttribute("data-link");

            if (link) {
                window.location.href = link;
            }

        });
    });

    // ================= Portal BUTTONS =================
    const prevBtn = document.getElementById("prevBtn");
    const registerBtn = document.getElementById("registerBtn");

    console.log("PrevBtn:", prevBtn);
    console.log("RegisterBtn:", registerBtn);

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            window.location.href = "pool.html";
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdVbOcV4f2g68T1mevTMDbNXR3gF0Eut_geghvHuFCykpu4cg/viewform?usp=publish-editor",
    "_blank"
  );
        });
    }

// ================= EKASHUNYAM ABOUT JS =================

function goBack() {
  window.location.href = "portal.html";
}

function goGuidelines() {
  window.location.href = "guidelines.html";
}

function goRegister() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdVbOcV4f2g68T1mevTMDbNXR3gF0Eut_geghvHuFCykpu4cg/viewform?usp=publish-editor",
    "_blank"
  );
}

// ================= EKASHUNYAM GuideLines JS =================

function goBack() {
  window.location.href = "portal.html";
}

function goEvents() {
  window.location.href = "events.html";
}

function goRegister() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdVbOcV4f2g68T1mevTMDbNXR3gF0Eut_geghvHuFCykpu4cg/viewform?usp=publish-editor",
    "_blank"
  );
}

// ================= EKASHUNYAM Contact JS =================

function goBack(){
    window.location.href = "portal.html";
}

function register(){
    window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdVbOcV4f2g68T1mevTMDbNXR3gF0Eut_geghvHuFCykpu4cg/viewform?usp=publish-editor",
    "_blank"
  );
}