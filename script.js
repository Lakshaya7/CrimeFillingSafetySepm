/* ----------- THEME TOGGLE ----------- */
document.getElementById("theme-btn").onclick = function () {
    document.body.classList.toggle("dark");
};

/* ----------- SLIDER LOGIC ----------- */
let index = 0;

function showSlide() {
    document.getElementById("slide-box").style.transform =
        `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % 3;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + 3) % 3;
    showSlide();
}

/* ----------- TEAM POPUP ----------- */
function openTeam() {
    document.getElementById("team-modal").style.display = "flex";
}

function closeTeam() {
    document.getElementById("team-modal").style.display = "none";
}
