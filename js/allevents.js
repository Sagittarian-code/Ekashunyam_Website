const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const registerBtn = document.getElementById("registerBtn");

// PREVIOUS → always portal
if (backBtn) {
    backBtn.onclick = () => {
        window.location.href = "events.html";
    };
}

// NEXT → goes to next event
if (nextBtn) {
    const nextPage = nextBtn.dataset.next;

    if (nextPage) {
        nextBtn.onclick = () => {
            window.location.href = nextPage;
        };
    }
}

// REGISTER → last page
if (registerBtn) {
    registerBtn.onclick = () => {
        window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSdVbOcV4f2g68T1mevTMDbNXR3gF0Eut_geghvHuFCykpu4cg/viewform?usp=publish-editor",
            "_blank"
        );
    };
}