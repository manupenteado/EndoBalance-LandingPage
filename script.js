function preloadBackgrounds() {
  const images = [
    './imagens/back-desktop.jpg',
    './imagens/back-mobile.jpg',
    './imagens/back-ampliada.jpg',
  ];
  
  images.forEach(src => {
    new Image().src = src;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  preloadBackgrounds();
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");
  const navLinks = document.querySelectorAll("#menu a");
  const sections = document.querySelectorAll("section");
  const header = document.querySelector(".header");
  const goldBar = document.querySelector(".gold-bar");

  // 1. Controle do Menu Mobile (ícone ☰)
  if (menuToggle) {
    menuToggle.addEventListener("click", function() {
      menu.classList.toggle("active");
    });
  }

  // 2. Destaque ao Clicar em um Item
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // 3. Destaque ao Scrollar
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  document.addEventListener("click", function(event) {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  // Se o menu está aberto E o clique não foi dentro do menu nem no botão toggle
  if (menu.classList.contains("active") && 
      !menu.contains(event.target) && 
      !menuToggle.contains(event.target)) {
    menu.classList.remove("active");
  }
});


  // 4. Fixar Faixa Dourada e Menu ao Scrollar
  window.addEventListener("scroll", function() {
    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom <= 0) {
      goldBar.classList.add("fixed-menu");
      menu.classList.add("fixed-menu");
      menu.style.top = `${goldBar.offsetHeight}px`; // Empurra o menu pra baixo da faixa
    } else {
      goldBar.classList.remove("fixed-menu");
      menu.classList.remove("fixed-menu");
      menu.style.top = ""; // Reseta o top
    }
  });
});
// Slideshow automático
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Esconde todas as imagens
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Avança para o próximo slide
    slideIndex++;
    
    // Volta para o primeiro slide se chegar ao fim
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Mostra o slide atual
    slides[slideIndex - 1].style.display = "block";
    
    // Muda de slide a cada 5 segundos (5000ms)
    setTimeout(showSlides, 5000);
}