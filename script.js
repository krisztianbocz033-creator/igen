const pages = [...document.querySelectorAll(".page")];
const progressBar = document.getElementById("progressBar");
let currentPage = 0;

function showPage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));
  pages.forEach((page, i) => page.classList.toggle("active", i === currentPage));
  progressBar.style.width = `${((currentPage + 1) / pages.length) * 100}%`;
}

document.querySelectorAll(".next").forEach(button =>
  button.addEventListener("click", () => showPage(currentPage + 1))
);
document.querySelectorAll(".back").forEach(button =>
  button.addEventListener("click", () => showPage(currentPage - 1))
);
document.querySelector(".restart").addEventListener("click", () => showPage(0));

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") showPage(currentPage + 1);
  if (event.key === "ArrowLeft") showPage(currentPage - 1);
});

showPage(0);
