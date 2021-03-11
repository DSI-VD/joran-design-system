init = () => {
  const levelIndicator = document.querySelector('.c-nav__level-indicator');
  let lastScrollPos = 0;
  let ticking = false;
  const nav = document.querySelector('.c-nav');
  let navOpen = false;
  let currentLevel = 0;
  const navToggle = document.querySelector('.c-nav__toggle');

  const closeAllTabs = event => {
    for (const item of document.querySelectorAll('.c-nav__list')) {
      item.classList.remove('js-c-nav__list--open');
      item.classList.remove('js-c-nav__list--hide');
      for (const button of item.querySelectorAll('.c-nav__list-link--w-children')) {
        button.setAttribute('aria-expanded', false);
      }
      for (const item of levelIndicator.querySelectorAll('li')) {
        item.remove();
      }
    }

    currentLevel = 0;
  };

  const closeLevelTabs = (event, level) => {
    for (const item of document.querySelectorAll('.c-nav__list--level-' + (level - 1))) {
      item.classList.remove('js-c-nav__list--hide');
    }

    for (const item of document.querySelectorAll('.c-nav__list--level-' + level)) {
      item.classList.remove('js-c-nav__list--open');
      item.parentNode.querySelector('.c-nav__list-link--w-children').setAttribute('aria-expanded', false);
    }

    const levelElement = levelIndicator.querySelector('li:nth-child(' + level + ')');
    levelElement.remove();
    currentLevel = 1;
  };

  const createLevelIndicator = target => {
    const levelLink = document.createElement('button');
    levelLink.setAttribute('tabindex', '-1');
    const levelText = document.createTextNode(target.innerHTML);
    levelLink.append(levelText);
    if (target.parentNode.parentNode.matches('.c-nav__list--level-1')) {
      levelLink.addEventListener('click', event => {
        closeLevelTabs(event, 2);
      });
    } else {
      levelLink.addEventListener('click', event => {
        closeAllTabs(event);
      });
    }

    const level = document.createElement('li');
    level.append(levelLink);
    return level;
  };

  // Open menu tab
  for (const item of document.querySelectorAll('.c-nav__list-link--w-children')) {
    item.addEventListener('click', event => {
      if (currentLevel === Number.parseInt(event.target.parentNode.dataset.level)) {
        levelIndicator.append(createLevelIndicator(event.target));
        event.target.closest('.c-nav__list').classList.add('js-c-nav__list--hide');
        event.target.parentNode.querySelector('.c-nav__list').classList.add('js-c-nav__list--open');
        item.setAttribute('aria-expanded', true);
        currentLevel++;
      } else if (event.target.parentNode.parentNode.matches('.c-nav__list--level-1')) {
        closeLevelTabs(event, 2);
      } else {
        closeAllTabs(event);
      }
    });
  }

  // Open navigation
  navToggle.addEventListener('click', event => {
    if (!navOpen) {
      document.body.classList.add('js-b-nav--open');
      navToggle.querySelector('.c-menu-icon').classList.add('js-c-menu-icon--open');
      nav.classList.add('js-c-nav--open');
      navOpen = true;
    } else {
      document.body.classList.remove('js-b-nav--open');
      navToggle.querySelector('.c-menu-icon').classList.remove('js-c-menu-icon--open');
      nav.classList.remove('js-c-nav--open');
      closeAllTabs(event);
      navOpen = false;
    }
    navToggle.setAttribute('aria-expanded', navOpen);
  });

  // Sticky nav
  window.addEventListener('scroll', event => {
    lastScrollPos = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastScrollPos > 50) {
          nav.classList.add('js-c-nav--sticky');
        } else {
          nav.classList.remove('js-c-nav--sticky');
        }

        ticking = false;
      });
    }

    ticking = true;
  });
};
