const iconToggel = document.getElementById("toggle");
const navLinks = document.getElementById("nav-links");
iconToggel.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
console.log(iconToggel);
