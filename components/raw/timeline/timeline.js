class Timeline {
  constructor(timeline) {
    this.timeline = timeline;
    this.moveCallbacks = [];
    const children = [].slice.call(timeline.children);
    this.items = children.map(child => {
      return child;
    });
    this.currentItem = 0;
    this.slidesVisible = 3;
    this.slidesToScroll = 2;
    this.setStyle();
    this.createNavigation();
    this.createLift();
  }

  translate(percent) {
    this.timeline.style.transform = 'translate3d(' + percent + '%, 0, 0)';
  }


  /**
   * Création de l'ascenseur
   */
  createLift() {
    const lift = this.timeline.parentNode.parentNode.querySelector('.c-timeline__indicator-lift');
    const line = this.timeline.parentNode.parentNode.querySelector('.c-timeline__indicator-line');
    const levels = Math.ceil(this.items.length / this.slidesVisible);
    lift.style.width = (100 / levels) + '%';
    for (let i = 0; i < levels; i++) {
      const level = document.createElement('button');
      level.setAttribute('tabindex', '-1');
      level.classList.add('c-timeline__indicator-button');
      const levelText = document.createTextNode(i + 1);
      level.append(levelText);
      level.addEventListener('click', event => {
        this.gotoItem(i * this.slidesVisible);
      });
      line.append(level);
    }
  }

  /**
     * Crée les flêches de navigation dans le DOM
     */
  createNavigation() {
    const nextButton = this.timeline.parentNode.parentNode.querySelector('.c-timeline__navigation--right');
    const previousButton = this.timeline.parentNode.parentNode.querySelector('.c-timeline__navigation--left');
    nextButton.addEventListener('click', this.next.bind(this));
    previousButton.addEventListener('click', this.prev.bind(this));
    this.onMove(index => {
      if (index === 0) {
        previousButton.classList.add('c-timeline__navigation--hidden');
      } else {
        previousButton.classList.remove('c-timeline__navigation--hidden');
      }

      if (this.items[this.currentItem + this.slidesVisible] === undefined) {
        nextButton.classList.add('c-timeline__navigation--hidden');
      } else {
        nextButton.classList.remove('c-timeline__navigation--hidden');
      }
    });
  }

  next() {
    this.gotoItem(this.currentItem + this.slidesToScroll);
  }

  prev() {
    this.gotoItem(this.currentItem - this.slidesToScroll);
  }

  /**
     * Déplace le carousel vers l'élément ciblé
     * @param {number} index
     * @param {boolean} [animation = true]
     */
  gotoItem(index, animation = true) {
    if (index < 0) {
      return;
    }

    if (index >= this.items.length || (this.items[this.currentItem + this.slidesVisible] === undefined && index > this.currentItem)) {
      return;
    }

    const translateX = index * -100 / this.items.length;
    const lift = this.timeline.parentNode.parentNode.querySelector('.c-timeline__indicator-lift');
    console.log(index);
    const liftPos = (Math.ceil(index / this.slidesVisible) * lift.offsetWidth);
    lift.style.transform = 'translate3d(' + liftPos + 'px, 0, 0)';
    this.translate(translateX);
    this.timeline.offsetHeight; // Force repaint
    this.currentItem = index;
    for (const cb of this.moveCallbacks) {
      cb(index);
    }
  }

  /**
     * Rajoute un écouteur qui écoute le déplacement du carousel
     * @param {moveCallback} cb
     */
  onMove(cb) {
    this.moveCallbacks.push(cb);
  }

  /**
     * Applique les bonnes dimensions aux éléments du carousel
     */
  setStyle() {
    const ratio = this.items.length / this.slidesVisible;
    this.timeline.style.width = (ratio * 100) + '%';
    for (const item of this.items) {
      item.style.width = ((100 / this.slidesVisible) / ratio) + '%';
    }
  }
}

const onReady = () => {
  new Timeline(document.querySelector('#timeline1'));
};

document.addEventListener('DOMContentLoaded', onReady);
