const menuIcon = document.querySelector(".menu-icon .bx");
const closeIcon = document.querySelector(".close-icon");
const menuSection = document.querySelector(".mobile-menu-section");


menuIcon.addEventListener("click", () => {
    menuSection.classList.add("active");
})
closeIcon.addEventListener("click", () => {
    menuSection.classList.remove("active");
})