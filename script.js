document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");
  const navLinks = document.querySelectorAll("#menu a");
  const sections = document.querySelectorAll("section");

  // 1. Controle do Menu Mobile (ícone ☰)
  if (menuToggle) {
    menuToggle.addEventListener("click", function() {
      menu.classList.toggle("active");
    });
  }

  // 2. Destaque ao Clicar em um Item
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      navLinks.forEach(l => l.classList.remove("active")); // Remove todos os ativos
      this.classList.add("active"); // Adiciona apenas no clicado
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
});