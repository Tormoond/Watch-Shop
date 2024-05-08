export const onScrollUp = () => {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }
};

export const onScrollToElement = elementId => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: offsetTop - 60, behavior: 'smooth' });
  }
};

export const onScrollDown = () => {
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition < documentHeight) {
    setTimeout(function () {
      window.scrollBy({
        top: documentHeight - scrollPosition,
        behavior: 'smooth',
      });
    }, 300);
  }
};
