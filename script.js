// Navbar 
const bar = document.querySelector("#bar");
const navbarEl = document.querySelector(".navbar")
const closeEl = document.querySelector("#closebtn")

bar.addEventListener('click',()=>{
    navbarEl.classList.add('activebar')
})
closeEl.addEventListener('click',()=>{
    navbarEl.classList.remove('activebar')
})


// DarkMode 
const body = document.querySelector("body"),
toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
body.classList.add("dark");
toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
body.classList.toggle("dark");

if (!body.classList.contains("dark")) {
  return localStorage.setItem("mode", "light");
}
localStorage.setItem("mode", "dark");
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));