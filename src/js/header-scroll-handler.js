import { onScrollToElement } from './scroll';
import { addCurrentClass, removeCurrentClass } from './menu-items';

const headerMenuRef = document.querySelector('.nav-list');

headerMenuRef &&
  headerMenuRef.addEventListener('click', event => {
    const item = event.target;
    if (!item.matches('a')) return;
    event.preventDefault();
    removeCurrentClass();
    addCurrentClass(item.closest('li'));
    const targetId = item.getAttribute('href').substring(1);
    onScrollToElement(targetId);
  });
