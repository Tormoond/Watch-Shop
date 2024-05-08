// Add 'js-open-btn' class for button in header (in html file)
// Add 'js-close-btn' class for button in mobile menu (in html file)
// Add 'js-mobile-menu' class for mobile menu (in html file)
// Craete 'is-open' class for open mobile menu (in css file)

// Example is-open css-class for open mobile menu
// .mobile-menu {
//   ...
//   transform: translateX(100vw);
//     transition: transform 250ms cubic - bezier(0.4, 0, 0.2, 1);
//     ...
// }

// .mobile-menu.is-open {
//   transform: translateX(0);
// }

const openMenuBtn = document.querySelector('.js-open-btn');
const mobileMenuRef = document.querySelector('.js-mobile-menu');
const closeMenuBtn = document.querySelector('.js-close-btn');

if (mobileMenuRef) {
  openMenuBtn &&
    openMenuBtn.addEventListener('click', () => {
      mobileMenuRef.classList.add('is-open');
    });

  closeMenuBtn &&
    closeMenuBtn.addEventListener('click', () => {
      mobileMenuRef.classList.remove('is-open');
    });
}
