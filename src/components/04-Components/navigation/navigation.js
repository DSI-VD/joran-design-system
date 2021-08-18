class MobileNavigation {
  constructor(nav) {
    this.levelIndicator = document.querySelector('.c-nav__level-indicator');
    this.nav = nav;
    this.navOpen = false;
    this.currentLevel = 0;
    this.navToggle = document.querySelector('.c-nav__toggle');

    // Open menu tab
    for (const item of document.querySelectorAll('.c-nav__list-link--w-children')) {
      item.addEventListener('click', event => {
        if (this.currentLevel === Number(event.target.parentNode.dataset.level)) {
          this.levelIndicator.append(this.createLevelIndicator(event.target));
          event.target.closest('.c-nav__list').classList.add('js-c-nav__list--hide');
          event.target.parentNode.querySelector('.c-nav__list').classList.add('js-c-nav__list--open');
          item.setAttribute('aria-expanded', true);
          window.dispatchEvent(new Event('resize'));
          this.currentLevel++;
        } else if (event.target.parentNode.parentNode.matches('.c-nav__list--level-1')) {
          this.closeLevelTabs(event, 2);
        } else {
          this.closeAllTabs(event);
        }
      });
    }

    // Open navigation
    this.navToggle.addEventListener('click', event => this.toggle(event));
  }

  toggle(event) {
    if (this.navOpen) {
      document.documentElement.style.overflow = 'auto';
      document.body.classList.remove('js-b-nav--open');
      this.navToggle.querySelector('.c-menu-icon').classList.remove('js-c-menu-icon--open');
      this.nav.classList.remove('js-c-nav--open');
      this.closeAllTabs(event);
      this.navOpen = false;
    } else {
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('js-b-nav--open');
      this.navToggle.querySelector('.c-menu-icon').classList.add('js-c-menu-icon--open');
      this.nav.classList.add('js-c-nav--open');
      this.navOpen = true;
    }

    this.navToggle.setAttribute('aria-expanded', this.navOpen);
  }

  closeAllTabs(event) {
    for (const item of document.querySelectorAll('.c-nav__list')) {
      item.classList.remove('js-c-nav__list--open');
      item.classList.remove('js-c-nav__list--hide');
      for (const button of item.querySelectorAll('.c-nav__list-link--w-children')) {
        button.setAttribute('aria-expanded', false);
      }

      for (const item of this.levelIndicator.querySelectorAll('li')) {
        item.remove();
      }
    }

    this.currentLevel = 0;
  }

  closeLevelTabs(event, level) {
    for (const item of document.querySelectorAll('.c-nav__list--level-' + (level - 1))) {
      item.classList.remove('js-c-nav__list--hide');
    }

    for (const item of document.querySelectorAll('.c-nav__list--level-' + level)) {
      item.classList.remove('js-c-nav__list--open');
      item.parentNode.querySelector('.c-nav__list-link--w-children').setAttribute('aria-expanded', false);
    }

    const levelElement = this.levelIndicator.querySelector('li:nth-child(' + level + ')');
    levelElement.remove();
    this.currentLevel = 1;
  }

  createLevelIndicator(target) {
    const levelLink = document.createElement('button');
    const levelText = document.createTextNode(target.innerHTML);
    levelLink.append(levelText);
    if (target.parentNode.parentNode.matches('.c-nav__list--level-1')) {
      levelLink.addEventListener('click', event => {
        this.closeLevelTabs(event, 2);
      });
    } else {
      levelLink.addEventListener('click', event => {
        this.closeAllTabs(event);
      });
    }

    const level = document.createElement('li');
    level.append(levelLink);
    return level;
  }
}

class DesktopNavigation {
  constructor(nav) {
    this.nav = nav;
    // Open menu tab
    for (const item of document.querySelectorAll('.c-nav__list:not(.c-nav__list--level) > .c-nav__list-item > .c-nav__list-link--w-children')) {
      item.addEventListener('click', event => {
        if (event.target.classList.contains('js-c-nav__list-link--active')) {
          this.close();
        } else {
          this.close();
          window.dispatchEvent(new Event('resize'));
          event.target.setAttribute('aria-expanded', true);
          event.target.classList.add('js-c-nav__list-link--active');
          event.target.parentNode.querySelector('.c-nav__list').classList.add('js-c-nav__list--open');
          document.documentElement.style.overflow = 'hidden';
          document.body.classList.add('js-b-nav--open');
          this.nav.classList.add('js-c-nav--open');
        }
      });
    }

    for (const item of document.querySelectorAll('.c-nav__list--level button.c-nav__list-link--w-children')) {
      item.addEventListener('click', event => {
        event.preventDefault();
      });
    }

    for (const item of document.querySelectorAll('.masonry')) {
      new Masonry(item, {
        // Options
        itemSelector: '.masonry-item',
        columnWidth: 320,
        transitionDuration: 0,
        containerStyle: {position: 'absolute'},
      });
    }
  }

  close() {
    document.documentElement.style.overflow = 'auto';
    document.body.classList.remove('js-b-nav--open');
    this.nav.classList.remove('js-c-nav--open');
    for (const itemOpen of this.nav.querySelectorAll('.js-c-nav__list-link--active')) {
      itemOpen.classList.remove('js-c-nav__list-link--active');
      itemOpen.setAttribute('aria-expanded', false);
    }

    for (const itemOpen of this.nav.querySelectorAll('.js-c-nav__list--open')) {
      itemOpen.classList.remove('js-c-nav__list--open');
    }
  }
}

class StickyNavigation {
  constructor(nav) {
    this.lastScrollPos = 0;
    this.ticking = false;
    this.nav = nav;
    window.addEventListener('scroll', event => this.sticky(event));
  }

  sticky(event) {
    this.lastScrollPos = window.scrollY;
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        if (this.lastScrollPos > 50) {
          this.nav.classList.add('js-c-nav--sticky');
        } else {
          this.nav.classList.remove('js-c-nav--sticky');
        }

        this.ticking = false;
      });
    }

    this.ticking = true;
  }
}

const initNavigation = () => {
  new StickyNavigation(document.querySelector('.c-nav'));
  const init = event => {
    if (window.innerWidth < 1280) {
      new MobileNavigation(document.querySelector('.c-nav'));
    } else {
      new DesktopNavigation(document.querySelector('.c-nav'));
    }
  };

  init();
};

document.addEventListener('DOMContentLoaded', initNavigation);
