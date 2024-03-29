# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.6.6] - 2023-10-12

### Added

- "uptitle" can be added to the _hero_ component

## [1.6.5] - 2022-12-22

### Fixed

- Refactor linting for CSS and JavaScript
- Lint CSS ans JavaScript
- Upgrade imagemin-cli v7.0.0
- Upgrade chockidar to v3.0.0
- Upgrade Roboto font files
- Upgrade svgo to minify SVG
- Upgrade autoprefixer
- Upgrade patched node_modules

## [1.6.4] - 2021-07-15

### Fixed

- Improved print rendering

## [1.6.3] - 2021-07-09

### Fixed

- Fix page break inside paragraphe, headings, liste elements and other HTML
  elements
- Hide `.c-testimonial__button` on print
- Remove negative margin from `.c-pdf-chapter-cover`

## [1.6.2] - 2021-06-30

### Fixed

- Fix _table_ and _figure_ were using old CSS properties for avoiding page break

## [1.6.1] - 2021-06-30

### Fixed

- Fix page break when printing
- Fix print media queries recognized by Chrome in _container_, _grid_ and

## [1.6.0] - 2021-06-29

### Added

- Add _table-of-content_, _pdf-chapter-cover_ and _pdf-chapter-title_ component
  for pdf export
- Add _standard-print_ prototype which is an HTML export of TYPO3 page generation
- Add page _break_ utilities for print

### Fixed

- Improve print styles
- Upgrade node_modules
- Put gallery in large container
- Increase font weight in _navigation_ level 2 on desktop

## [1.5.0] - 2021-06-23

### Added

- Add a header on top of _carousel_ component or grid object

## [1.4.0] - 2021-06-23

### Added

- Add _navigation--pdf-download_ variant that include a PDF download button

## [1.3.0] - 2021-06-22

### Changed

- Increase visual contrast between level 1 and level 2 links in _navigation_ on desktop
- Improve accessibility of _timeline_
  - Hide _svg-triangle-right_ to screen readers
  - Use list instead of `<div>` to structure content
  - Hide the timeline for screen reader and add a visually hidden alternative
    liste
  - Switch paragraphe to be the `<h3>` because more meaningful
  - Reorder `<h3>` to be before before p but keep visually the `<p>` before the
    header
  - Put the link on the header and not on the whole card but keep the whole card
    clickable
  - Hide an hidden accessible list and hide the flickity list to screen reader

### Fixed

- Add a width value to _button_ to prevent wrong margin in _pagination_
- Fix missing focus style on some focusable elements

## [1.2.0] - 2021-06-09

### Added

- Add a _card-link_ object to make an entire card clickable

### Changed

- The whole _slider-js-nav_ items are clickable by using _card-link_
- The whole _promo-card_ is clickable by using _card-link_
- Remove _navigation_ second level being a button on desktop to make it
  accessible
- Add aria attributs in _navigation_ for current page
- Add a visual style for current page in _navigation_ by adding
  `.c-nav__list-link--current` class

### Fixed

- Add a banner with version in CSS file
- Add a visual style when hovering a link in the _navigation_
- Update node modules
- Add right margin for text and image content element
- Make _carousel_'s buttons and dots visible
- `.o-stack--big` is smaller on big screens
- Reduce dots for js slider

## [1.1.2] - 2021-05-21

### Fixed

- Better margin in _content--intro_

## [1.1.1] - 2021-05-21

### Fixed

- Beautify

## [1.1.0] - 2021-05-21

### Changed

- Make _pagination_ accessible by adding hidden text in the link

### Fixed

- Make components print friendly

  - Remove background, set text in black and realign elements in _timeline_
  - Make _testimonial_ print friendly
  - Remove background colors and make text smaller in _table_
  - Remove background in _box_
  - Remove background colors in _promo-card_ and _promo-list_
  - Replace _highlight_ background with a border
  - Margin between elements are smaller
  - Make _hero_ print friendly
  - Make _content_ print friendly
  - `h1`, `h2` and `h3` are smaller
  - Make text size smaller and add link after anchors in _prose_
  - All images of _carousel_ are visible
  - Do not hide _breadcrumb_ elements
  - Remove _alert_, _arrow_, _navigation_, _footer_, _pagination_ when printing

- Add `.u-print-hidden` utility
- Level 2 item are no more clickable in _navigation_
- Fix _timeline_ first card alignement on mobile

## [1.0.2] - 2021-05-12

### Fixed

- Fix color background in _timeline_

## [1.0.1] - 2021-05-12

### Fixed

- Fix contrast in _slider-js-nav_ component

## [1.0.0] - 2021-05-12

### Added

- Add _button--accessible-text_ variant that show how to add accessible text
  for a link to an article's detail
- Add a pink themes in prototypes
- Add color utilities _color_ and _background_

### Changed

- Add hidden text to button in _slider-js-nav_, _testimonial_, _promo-card_ and _promo-list_ to
  make them accessible

### Fixed

- Fix contrast in _table_ header
- Fix contrast in navigation
- Upgrade node packages
- Refactor color theme management. Colors are set in _color_ config file

## [0.0.32] - 2021-04-23

### Added

- _box_ has a variant _box--gradient_ with a background gradient

### Changed

- Gradient background of _box_ has been removed. There is a unify color instead.
- Add `.o-box--gradient` class on _quotes_ to get a gradient background

### Fixed

- Fix contrast ratio in _o-box_. Contrast was to low with buttons and links.
- Fix _footer_ margin top

## [0.0.31] - 2021-04-20

### Fixed

- Fix _button_ `hover` style

## [0.0.30] - 2021-04-15

### Changes

- Fix button margin in _hightlight--with-button_

## [0.0.29] - 2021-04-15

### Changes

- Fix _content_ HTML structure
- Fix padding betwwen _highlight_ and other eleemnts. It was biased because
  _highlight_ had the `o-stack` class. It has been removed

## [0.0.28] - 2021-04-15

### Added

- Add _promo-list_ and _promo-card_ component
- Add an _accordeon_ object so that it can be used in multiple components
- Add a _video--legend_ variant that use the _figure_ style to add a caption to
  a video

### Changes

- Replace button with an accordeon in _content--intro_
- _testimonail_ us _accordeon_ object insted of his own script. `.js-testimonial` classes have been replace by `.js-accordeon`
- `testimonial.js` have been replace by `accordeon.js` in _preview_

### Fixed

- Upgrade node packages
- Fix CSS formating and typo in _search-input_ and _search-result-item_
- Fix styling in desktop nav (column position with masonry and inverted title style)
- Fix chevron on mobile nav
- Improve footer
- Add bg-white on c-page
- Add linear-gradient for quote

### Aded

- Slider in navigation

## [0.0.27] - 2021-04-13

### Changed

- Add _slider-js_ in _navigation_
- Add variants with selects in _search-input_

### Fixed

- Fix CTA colors of blue theme
- Force scrollbar to be visible to avoid awkward jump when there's not enough
  content on a page
- Upgrade node modules

## [0.0.26] - 2021-04-01

### Added

- Add _link-image_ utility to put a link around an image

### Changed

- _carousel_ items can have a link
- Add _figure--link_ variant that show a `<figure>` with a link in it

### Fixed

- Fine tune padding of _hero_ and _hero--full_

## [0.0.25] - 2021-03-31

### Added

- Add _alert_ component
- add _hero--full_ component

### Changed

- _hero--default_ is now the small hero and _hero--full_ the big one.
- There's a new JavaScript file to include `alert.js` see _preview_ component
  for more info
- Update the "Lire la suite" link to "Afficher plus" for introduction and preabule components, both with accordeon

### Fixed

- Refine style of alert
- _logo-header_ is set as ready

## [0.0.24] - 2021-03-30

### Fixed

- Use flickity library in _timeline_ component

## [0.0.23] - 2021-03-26

### Added

- Add _carousel_ component
- Display nav correctly on desktop

### Breaking change

- Colors are now added with RGB values, it will require a major change on TYPO3.

## [0.0.22] - 2021-03-19

### Added

- Add _slider-js_ component
- Add [flickity](https://flickity.metafizzy.co/) library
- Add _content--intro_ component to replace _intro_ and fix some design aspects

### Changed

- Use a larger container to display _slider_
- Add sidebar in _slider_ and refine design
- Fix input type in _search-input_

### Removed

- _intro_ component has been removed and replaced with _content--intro_

### Fixed

- Scoped Revenge CSS. You need to put `.debug` class on the `<body>` to lint accessibility issues
- Fix transition for hovered transparent button
- Increase tracking when a transparent button is hovered
- Increase shadow of _avatar_
- Fix _search-list_ margin of title
- Set _search-input_ as ready
- Set _search-item_ as ready
- Fix link in _table_ not displaying correctly
- Set _highlight--with-button_ as ready

## [0.0.21] - 2021-03-17

### Added

- Add _logo-header_ component
- Add _highlight--with-button_ components variant
- Add `.u-bg--gradient` utility
- Add `.u-caption` utility
- Add `.u-cta`utility
- Add `.u-mt--big` utility
- Add _search-input_ component
- Add _search-result-item_ component
- Add _search-result-list_ component
- Add _search-page_ prototype

### Changed

- To style table, you only need to put it inside a `<div class="c-table>`. There's no more class on the `<table>` element
- Improve _slider_
  - It can be scroll on all the width of the viewport. It's no more hidden behind the container
  - Add dates
  - Refine design
- Change structure of _page_. A `<div class="c-page__content>` has been added to fix the footer not being at the bottom.
- Add aria-label on various navigation (footer, breadcrumb and main navigation)
- Add aria-haspopup, aria-expanded on main navigation
- Add aria-label on menu toggle

### Fixed

- Refactor _button_ components
- Fix _button_ typography. Font weight is medium and there is a wider tracking
- Align headers in _table_ on the left
- Scrollbar in _slider_ is white in Safari, Chrome too

## [0.0.20] - 2021-03-10

### Added

- Add preview for color theme
- Add _table_ component
- Add _video_ component
- Add _ratio_ utility
- Add _page_ component to put the footer at the bottom
- New variants for _content_ with heading on the left
- Add _o-container--large_ variants

### Changed

- Add `.o-container--large` class on _breadcrumb_, _footer_, _pagination_, _quote_, _navigation_ and _testimonial_
- _highlight_ can have any content
- Add a `alt` attribut on _logo-entity_
- Clean _svg_ markup

### Removed

- Remove _title_ component. _content_ will be used instead

### Fixed

- Remove negative padding on _o-box_. It's handle by _container--big_
- _testimonial_ and _highlight_ background are not a gradient
- Hidden breadcrumb item have the same height as an non hidden one

## [0.0.19] - 2021-03-09

### Added

- Added _title_ component
- Added _navigation_ component

### Fixed

- Remove AlpineJS
- Fix typography. Font size in body, _footer_ and _button_ were not the right one
- Fix SVG to make margin consistent in _button_

## [0.0.18] - 2021-03-05

### Added

- Added _logo-entity_ components with corresponding assets
- Added _button--default-arrow-left_ component for pagination
- Added _pagination_ component
- Added _pagination-pages_ component
- Added _intro_ component
- Added _box_ object for box with background color and negative margin
- Add more variant of _stack_ object

### Changed

- Change _footer_ padding
- Refine _logo_entite_ width
- Change structure in _standard_ prototype to add margin before the footer
- Change HTML in all component with a `.c-container` class
- Set horizontal spacing in container for pages
- _footer_ has _logo-entity_ and not _logo-vd_
- Text can be expended in _testimonial_ and columns size has been refine

### Fixed

- _pagination_ is ready
- _pagination-pages_ is ready
- _footer_ is ready
- _highlight_ is ready
- _intro_ is ready
- Spaces before guillemets in _quotes_ are unbreakable

## [0.0.17] - 2021-03-03

### Added

- Add _testimonial_ component

### Removed

- _logo_ as been renamed in _logo-vd_ because there will be two logo
- Removed _card_ component

### Fixed

- Refine typography in _hero_
- Refine typography in _footer_
- Refine margin in _quotes_
- Remove hover color in _button--transparent_ and _button--transparent-alternate_
- _content_ is ready
- Refine _footer_
  - Social logo are arranged in column on desktop
  - The copyright is align left on desktop
  - The component is ready
- _button_ are ready
- Use guillemets in _quotes_ and set the component as ready

## [0.0.16] - 2021-03-02

### Fixed

- Refine _slider_ design. The scroll shadow on the right is smaller and more realistic
- Refine _headings_ sizes
- Refine typography in _hero_
- Refine typography in _quotes_
- Refine typography in _highlight_

## [0.0.15] - 2021-02-25

### Changed

- Change how _button_ are styled. Now, you have to add `.c-button--default` to have the default style
- Refactor _quotes_ component bay adding a variant for big quotes
- Change icons in _footer_, _arrow_ and _hero_

### Added

- New SVG components with all icons
- New _button--transparent-alt_ variant
- Added _slider_ component with basic style
- Added support for [CSS Extend Rule](https://github.com/csstools/postcss-extend-rule).

### Fixed

- Button containing spaces are on one line

## [0.0.14] - 2021-02-24

### Added

- Add a build process for non vectors images

### Changed

- Make _highlight_ more accessible
- Get the right SVG file and fallback image for _logo_

## [0.0.13] - 2021-02-23

### Removed

- _text media_ has been removed. It is replaced by _grid_

### Changed

- Adapt style of the _footer_ to the latest design
- _grid_ is now an object

### Fixed

- Refine margin of _content_ heading
- _content_ is on one column on mobile

## [0.0.12] - 2021-02-19

### Added

- Add _content_ component
- Add _grid_ component

## [0.0.11] - 2021-02-19

### Changed

- Add shema.org meta data to the _breadcrumb_

## [0.0.10] - 2021-02-19

### Changed

- In _breadcrumb_, all items except the last two are hidden and all items except the last one are clamp to one line

## [0.0.9] - 2021-02-17

### Removed

- _hero--contained_ are removed because they are no more used

### Changed

- Refine structure of _quote_ and add schema.org metadata
- Colors have been changed to match the design. You have to update the custom variables in `<head>`. Take a look at _color-inc_.
- _arrow_ are presentation graphics and not a link

### Fixed

- Fine tune typography

## [0.0.8] - 2021-02-17

### Changed

- Add `role=contentinfo` on the _footer_ for accessibility

### Fixed

- Fixed accessibility issues with link to nowhere `#`

## [0.0.7] - 2021-02-17

### Added

- Add CSS rules that check if there is accessibility issue

### Changed

- _figure_ component accept `srcset` to let the user agent select the best image depending of the viewport width

### Fixed

- Roboto is the default font

## [0.0.6] - 2021-02-16

### Added

- Add _breadcrumb_ component
- Add transparent variant of _button_

### Changed

- Structure of the _hero_ as changed to
  - push _button_ and _arrow_ at the bottom of the component and improve accessibility
  - make background image responsive

### Fixed

- Add a background on the preview of _logo_ to see it
- _arrow_ and _button_ is centered on mobile in an _hero_
- Text is responsive

## [0.0.5] - 2021-02-12

### Fixed

- Gradient on _quote_ display correctly on Safari
- Fix gap between column not being supported in Safari
- Add a background on _arrow_ preview page to be able to see the component
- Enable smooth scrolling

### Removed

- _header_ components is removed. It is replaced by _hero--title_

## [0.0.4] - 2021-02-11

### Fixed

- Build files are included in the node package

## [0.0.3] - 2021-02-11

### Added

- Add a variant without image for _hero_ component
- Add _arrow_ component
- Add _hero--title_ and _hero--contained_ variants of _hero_ components

### Fixed

- Make underline of links and anchors style thicker with a background effect on hover stats
- Fix link in README
- Fix links in CHANGELOG
- Fix missing styles on links in _footer_
- Maximum width of _quote_ and _highlight_ is 65 characters instead of a fixed units

## [0.0.2] - 2021-02-11

### Added

- Add _colors_ design tokens
- Add _headings_ design utility
- Add _visually hidden_ utility
- Add _auto grid_ object
- Add _container_ object
- Add _list-inline_ object
- Add _prose_ object
- Add _region_ object
- Add _split pair_ object
- Add _stack_ object
- Add _avatar_ component
- Add _button_ component
- Add _card_ component
- Add _figure_ component
- Add _footer_ component
- Add _header_ component
- Add _hero_ component
- Add _highlight_ component
- Add _logo_ component
- Add _navigation_ component
- Add _quote_ component
- Add _text-media_ component
- Add _content_ prototype
- Add _standard_ prototype
- Add `lint` and `beautify` npm script

## [0.0.1] - 2021-01-21

### Added

- Setup Fractal
- Basic styles

[unreleased]: https://github.com/DSI-VD/joran-design-system/compare/v1.6.4...HEAD
[1.6.4]: https://github.com/DSI-VD/joran-design-system/compare/v1.6.3...v1.6.4
[1.6.3]: https://github.com/DSI-VD/joran-design-system/compare/v1.6.2...v1.6.3
[1.6.2]: https://github.com/DSI-VD/joran-design-system/compare/v1.6.1...v1.6.2
[1.6.1]: https://github.com/DSI-VD/joran-design-system/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/DSI-VD/joran-design-system/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/DSI-VD/joran-design-system/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/DSI-VD/joran-design-system/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/DSI-VD/joran-design-system/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/DSI-VD/joran-design-system/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/DSI-VD/joran-design-system/compare/v1.1.1...v.1.1.2
[1.1.1]: https://github.com/DSI-VD/joran-design-system/compare/v1.1.0...v.1.1.1
[1.1.0]: https://github.com/DSI-VD/joran-design-system/compare/v1.0.3...v1.1.0
[1.0.2]: https://github.com/DSI-VD/joran-design-system/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/DSI-VD/joran-design-system/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.32...v1.0.0
[0.0.32]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.31...v0.0.32
[0.0.31]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.30...v0.0.31
[0.0.30]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.29...v0.0.30
[0.0.29]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.28...v0.0.29
[0.0.28]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.27...v0.0.28
[0.0.27]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.26...v0.0.27
[0.0.26]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.25...v.0.0.26
[0.0.25]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.24...v0.0.25
[0.0.24]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.23...v0.0.24
[0.0.23]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.22...v0.0.23
[0.0.22]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.21...v0.0.22
[0.0.21]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.20...v0.0.21
[0.0.20]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.19...v0.0.20
[0.0.19]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.18...v0.0.19
[0.0.18]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.17...v0.0.18
[0.0.17]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.16...v0.0.17
[0.0.16]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.15...v0.0.16
[0.0.15]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.14...v0.0.15
[0.0.14]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.13...v0.0.14
[0.0.13]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.12...v0.0.13
[0.0.12]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.11...v0.0.12
[0.0.11]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.10...v0.0.11
[0.0.10]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.9...v0.0.10
[0.0.9]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.8...v0.0.9
[0.0.8]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/DSI-VD/joran-design-system/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/DSI-VD/joran-design-system/releases/tag/v0.0.1
