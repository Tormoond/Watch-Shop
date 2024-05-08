export function removeCurrentClass() {
  const menuItems = getHeaderMenuItems();
  if (menuItems.length === 0) return;
  menuItems.forEach(item => {
    item.classList.remove('current');
  });
}

export function addCurrentClass(item) {
  item.classList.add('current');
}

export function getLastElementMenu() {
  const menuItems = getHeaderMenuItems();
  if (menuItems.length === 0) return;

  return menuItems[menuItems.length - 1];
}

export function getFirstElementMenu() {
  const menuItems = getHeaderMenuItems();
  if (menuItems.length === 0) return;

  return menuItems[0];
}

function getHeaderMenuItems() {
  const headerMenuRef = document.querySelector('.nav-list');
  let menuItems = [];
  if (headerMenuRef) {
    menuItems = headerMenuRef.querySelectorAll('li');
  }
  return menuItems;
}
