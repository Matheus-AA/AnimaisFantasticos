document.documentElement.className += ' js';
const activeClass = 'ativo';
function tabMenu() {
  const $tabMenu = document.querySelectorAll('.js-tabmenu li');
  const $tabContent = document.querySelectorAll('.js-tabcontent section');

  if ($tabMenu.length && $tabContent.length) {
    const activeTab = (index) => {
      $tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      $tabContent[index].classList.add(activeClass);
    };

    $tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });
  }
}

tabMenu();

function faq() {
  const $dt = document.querySelectorAll('.js-accordion dt');
  if ($dt.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    $dt.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

faq();

function scroolSuave() {
  const $linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    /* Forma Alternativa */
    /* const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    }); */
  }

  $linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

scroolSuave();

function animaScroll() {
  const $section = document.querySelectorAll('.js-scroll');
  if ($section.length) {
    const windowMetade = innerHeight * 0.6;

    function scrollAnimation() {
      $section.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add('ativo');
        }
      });
    }

    window.addEventListener('scroll', scrollAnimation);
  }
}

animaScroll();
