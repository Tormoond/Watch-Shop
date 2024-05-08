import { onScrollToElement } from './scroll';
const mobileNavRef = document.querySelector('.menu-nav-list');
const mobileMenuRef = document.querySelector('.js-mobile-menu');

mobileNavRef &&
  mobileMenuRef &&
  mobileNavRef.addEventListener('click', event => {
    const item = event.target;
    if (!item.matches('a')) return;
    event.preventDefault();
    const targetId = item.getAttribute('href').substring(1);
    onScrollToElement(targetId);
    mobileMenuRef.classList.remove('is-open');
  });
