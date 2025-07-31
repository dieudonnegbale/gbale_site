function searchSite() {
  const input = document.getElementById("search").value.toLowerCase();

  if (input.includes("compétence") || input.includes("competence")) {
    location.href = "#competences";
  } else if (input.includes("projet")) {
    location.href = "#projets";
  } else if (input.includes("à propos") || input.includes("apropos")) {
    location.href = "#apropos";
  } else {
    alert("Aucune section trouvée !");
  }
}
// Affichage du menu mobile
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
}

// Animation lors du scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
