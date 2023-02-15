// Nav style change when scrolling

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 50)
})

// Toggle FAQs display

const faqs = document.querySelectorAll(".faq")
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open")

    // change icon
    icon = faq.querySelector(".faq__icon i")
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus"
    } else {
      icon.className = "uil uil-plus"
    }
  })
})

// toggle navbar in tablet breakpoint

const menu = document.querySelector(".nav__menu")
const openMenuBtn = document.querySelector("#open-menu-btn")
const closeMenuBtn = document.querySelector("#close-menu-btn")

openMenuBtn.addEventListener("click", () => {
  openMenuBtn.style.display = "none"
  menu.style.display = "flex"
  closeMenuBtn.style.display = "inline-block"
})

closeMenuBtn.addEventListener("click", () => {
  openMenuBtn.style.display = "inline-block"
  menu.style.display = "none"
  closeMenuBtn.style.display = "none"
})
