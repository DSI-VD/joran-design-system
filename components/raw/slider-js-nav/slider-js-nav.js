const initSlider = () => {
  for (const item of document.querySelectorAll('.c-slider-js-nav-carousel')) {
    const sidebar = item.parentNode.parentNode.querySelector('.c-slider-js-nav__container-left');
    let highest = 0;
    new Flickity(item, {
      contain: true,
      imagesLoaded: true,
      on: {
        ready() {
          for (const card of item.querySelectorAll('.c-slider-js-nav__article')) {
            if (card.offsetHeight > highest) {
              highest = card.offsetHeight;
            }
          }

          sidebar.querySelector('.c-slider-js-nav__sidebar-list').style.height = (highest + 50) + 'px';
        },
        change(index) {
          if (index > 0) {
            sidebar.classList.add('c-slider-js-nav__container-left--hidden');
          } else {
            sidebar.classList.remove('c-slider-js-nav__container-left--hidden');
          }
        },
      },
    });
  }
};

document.addEventListener('DOMContentLoaded', initSlider);
