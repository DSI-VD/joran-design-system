const onReady = () => {
  // New Timeline(document.querySelector('#timeline1'));
  for (const item of document.querySelectorAll('.c-timeline__items')) {
    new Flickity(item, {
      groupCells: 2,
      contain: true,
      freeScroll: true,
      percentPosition: true
    });
  }
};

document.addEventListener('DOMContentLoaded', onReady);
