const pages = [
  { name: "Accueil", file: "index.html" },
  { name: "À propos", file: "about.html" },
  { name: "Compétences", file: "skills.html" },
  { name: "Projets", file: "projects.html" },
  { name: "CV", file: "cv.html" },
  { name: "Contact", file: "contact.html" },
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();
  searchResults.innerHTML = "";

  if (value.trim() === "") return;

  const filtered = pages.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  if (filtered.length === 0) {
    searchResults.innerHTML = "<p>Aucun résultat trouvé.</p>";
  } else {
    filtered.forEach(p => {
      const link = document.createElement("a");
      link.href = p.file;
      link.textContent = p.name;
      searchResults.appendChild(link);
    });
  }
});