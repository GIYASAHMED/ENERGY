let mobileMenu = document.querySelector("#mobileMenu");
let bergurMenu = document.querySelector("#burgerMenu");

bergurMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobilemenuActive");
  bergurMenu.classList.toggle("ri-close-large-line");
});
