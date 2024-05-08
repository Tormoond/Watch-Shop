const imgRef = document.querySelector('.js-main-product');

imgRef &&
  imgRef.addEventListener('click', () => {
    imgRef.classList.toggle('rotated');
    setTimeout(() => {
      imgRef.classList.toggle('rotated');
    }, 4000);
  });
