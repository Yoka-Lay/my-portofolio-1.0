const names = document.querySelector(".name");
const p = document.querySelector(".about-me")
const backup = p.textContent;
console.log(backup);
names.addEventListener("click", () => {
    names.classList.toggle("colors");
    p.classList.toggle("colors");
})