const initSlider = () => {
  for (const item of document.querySelectorAll('.c-slider-js-nav-carousel')) {
    let sidebar = item.parentNode.parentNode.querySelector('.c-slider-js-nav__container-left');
    let highest = 0;
    new Flickity(item, {
      groupCells: 2,
      contain: true,
      freeScroll: true,
      percentPosition: true,
      imagesLoaded: true,
      on: {
        ready: function () {
          for (const card of item.querySelectorAll('.c-slider-js-nav__article')) {
            if (card.offsetHeight > highest) {
              highest = card.offsetHeight;
            }
          }
          sidebar.querySelector('.c-slider-js-nav__sidebar-list').style.height = (highest + 50) + "px";
        },
        change: function (index) {
          if (index > 0) {
            sidebar.classList.add('c-slider-js-nav__container-left--hidden')
          } else {
            sidebar.classList.remove('c-slider-js-nav__container-left--hidden')
          }
        }
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', initSlider);
