init = () => {
    let levelIndicator = document.querySelector('.c-nav__level-indicator');
    let lastScrollPos = 0;
    let ticking = false;
    let nav = document.querySelector('.c-nav');
    let navOpen = false;
    let currentLevel = 0;

    const closeAllTabs = (event) => {
        document.querySelectorAll('.c-nav__list').forEach(item => {
            item.classList.remove('js-c-nav__list--open');
            item.classList.remove('js-c-nav__list--hide');
            levelIndicator.querySelectorAll('li').forEach(item => {
                levelIndicator.removeChild(item)
            })
        });
        currentLevel = 0;
    };

    const closeLevelTabs = (event, level) => {
        document.querySelectorAll('.c-nav__list--level-' + (level - 1)).forEach(item => {
            item.classList.remove('js-c-nav__list--hide');
        });
        document.querySelectorAll('.c-nav__list--level-' + level).forEach(item => {
            item.classList.remove('js-c-nav__list--open');
        });
        let levelElement = levelIndicator.querySelector('li:nth-child(' + level + ')');
        levelIndicator.removeChild(levelElement);
        currentLevel = 1;
    };

    const createLevelIndicator = (target) => {
        let levelLink = document.createElement('a');
        levelLink.setAttribute('href', '#nowhere');
        levelLink.setAttribute('tabindex', '-1');
        let levelText = document.createTextNode(target.text);
        levelLink.appendChild(levelText);
        if (target.parentNode.parentNode.matches('.c-nav__list--level-1')) {
            levelLink.addEventListener('click', event => {
                closeLevelTabs(event, 2)
            })
        } else {
            levelLink.addEventListener('click', event => {
                closeAllTabs(event)
            })
        }
        let level = document.createElement('li');
        level.appendChild(levelLink);
        return level;
    };

    // Open menu tab
    document.querySelectorAll('.c-nav__list-link--w-children').forEach(item => {
        item.addEventListener('click', event => {
            if (currentLevel === parseInt(event.target.parentNode.dataset.level)) {
                levelIndicator.appendChild(createLevelIndicator(event.target));
                event.target.closest('.c-nav__list').classList.add('js-c-nav__list--hide');
                event.target.parentNode.querySelector('.c-nav__list').classList.add('js-c-nav__list--open');
                currentLevel++;
            } else {
                if (event.target.parentNode.parentNode.matches('.c-nav__list--level-1')) {
                    closeLevelTabs(event, 2)
                } else {
                    closeAllTabs(event)
                }
            }
        })
    });

    // Open navigation
    document.querySelector('.c-nav__toggle').addEventListener('click', event => {
        if (!navOpen) {
            document.body.classList.add('js-b-nav--open');
            nav.classList.add('js-c-nav--open');
            navOpen = true;
        } else {
            document.body.classList.remove('js-b-nav--open');
            nav.classList.remove('js-c-nav--open');
            closeAllTabs(event);
            navOpen = false;
        }
    });

    // sticky nav
    window.addEventListener('scroll', event => {
        lastScrollPos = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastScrollPos > 50) {
                    nav.classList.add('js-c-nav--sticky')
                } else {
                    nav.classList.remove('js-c-nav--sticky')
                }
                ticking = false;
            });
        }

        ticking = true;
    });
};
