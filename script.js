
// menu fixed
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
window.onload = function () {
  window.scrollTo(0, 0);
};


//change lenguage
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

langButtons.forEach((button) => {
  button.addEventListener("click", ()=>{
     // Quitar clase activa de todos los botones
    langButtons.forEach((btn) => btn.classList.remove("active-lang"));
    // Agregar clase activa al botón clickeado
    button.classList.add("active-lang");

    
    fetch(`../lenguages/${button.dataset.language}.json`)
      .then(res => res.json())
      .then(data => {
        textsToChange.forEach((el)=>{
          const section = el.dataset.section
          const value = el.dataset.value
          
          el.innerHTML = data[section][value];

        })
      })
  })
})


const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
  });