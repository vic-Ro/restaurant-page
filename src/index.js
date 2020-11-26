import generateNav from './nav';
import generateHome from './home';
import generateMenu from './menu';

const handleListeners = () => {
  const menu = [...document.querySelectorAll('.main-menu__item')];
  const events = [generateHome, generateMenu, generateHome];
  menu.forEach((element, index) => {
    element.addEventListener('click', () => {
      const container = document.getElementById('div-container');
      if (container) container.remove();
      events[index]();
    });
  });
};

generateNav();
handleListeners();
