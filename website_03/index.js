const hammenu = document.querySelector(".hammenu__container");
const hambar = document.querySelector(".hammenu");
const nav = document.querySelector(".nav");
hammenu.addEventListener("click", () => {
  hambar.classList.toggle("active");
  nav.classList.toggle("active");
});
