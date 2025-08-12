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

  // Slideshow automático
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
    if (!slides.length) return; // <-- Adicione esta linha
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "prev");
    }
    slides[slideIndex].classList.add("active");
    let prevIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    slides[prevIndex].classList.add("prev");
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 7000);
}

showSlides();

  // Verificação de idade
  setTimeout(function() {
  const btnSim = document.getElementById('btn-sim');
  const btnNao = document.getElementById('btn-nao');
  const ageVerification = document.getElementById('age-verification');
  const prescriptionVerification = document.getElementById('prescription-verification');
  const btnPrescSim = document.getElementById('btn-presc-sim');
  const btnPrescNao = document.getElementById('btn-presc-nao');
  const produtosConteudo = document.getElementById('produtos-conteudo');
  const ageDenied = document.getElementById('age-denied');

  if (
    btnSim && btnNao && ageVerification &&
    prescriptionVerification && btnPrescSim && btnPrescNao &&
    produtosConteudo && ageDenied
  ) {
    btnSim.onclick = function() {
      ageVerification.style.display = 'none';
      prescriptionVerification.style.display = 'flex';
    };
    btnNao.onclick = function() {
      ageVerification.style.display = 'none';
      ageDenied.style.display = 'flex';
    };
    btnPrescSim.onclick = function() {
      prescriptionVerification.style.display = 'none';
      produtosConteudo.style.display = 'block';
    };
    btnPrescNao.onclick = function() {
      prescriptionVerification.style.display = 'none';
      ageDenied.style.display = 'flex';
    };
  } else {
    console.log('Botões ou caixas de verificação não encontrados no DOM.');
  }
}, 100); // 100ms de delay

  // Modal de contato na sessão de importação (info.html)
  const importacaoBtns = document.querySelectorAll('.importacao-btn');
  const contatoModal = document.getElementById('importacao-contato-modal');

  if (importacaoBtns.length && contatoModal) {
    importacaoBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        contatoModal.style.display = 'flex';
      });
    });

    // Fechar modal ao clicar fora do conteúdo
    contatoModal.addEventListener('click', function(e) {
      if (e.target === contatoModal) {
        contatoModal.style.display = 'none';
      }
    });
  }
});