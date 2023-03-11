const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const listMenu = document.querySelector('.menu__list');
listMenu.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link') {
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
});

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const faqItem = document.querySelectorAll('.type__label');
faqItem.forEach((e) => {
  e.addEventListener('click', feqHandler);
});
function feqHandler(e) {
  console.log(e);
  e.preventDefault();
  currentContent = e.target.nextElementSibling;
  e.target.classList.toggle('active');
  if (e.target.classList.contains('active')) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
  } else {
    currentContent.style.maxHeight = 0;
  }
}

const choice = document.querySelectorAll('.choice');

choice.forEach((ch) => {
  onChoice(ch);
});

function onChoice(elem) {
  elem.addEventListener('click', (e) => {
    if (e.target.className === 'choice__item') {
      for (const child of elem.children) {
        child.classList.remove('active');
      }
      e.target.classList.add('active');
    }
  });
}
