// Cut the mustard
if ('querySelector' in document
    && 'localStorage' in window
    && 'addEventListener' in window) {
  const toggleButtons = document.querySelectorAll('.js-accordeon__toggle-btn');
  const fullTextWrappers = document.querySelectorAll('.js-accordeon__fulltext');
  let fullText;
  let toggleButtonText;

  Array.prototype.forEach.call(fullTextWrappers, fullTextWrapper => {
    // Hide all full text on load
    fullTextWrapper.setAttribute('hidden', true);
  });

  Array.prototype.forEach.call(toggleButtons, toggleButton => {
    // Show toggle more buttons
    toggleButton.removeAttribute('hidden');

    // Add listener for each button
    toggleButton.addEventListener('click', function () {
      fullTextWrapper = this.parentElement.querySelector('.js-accordeon__fulltext');
      toggleButtonText = this.querySelector('.js-accordeon__toggle-btn-text');

      // Change attributes and text if full text is shown/hidden
      console.log(fullTextWrapper.hasAttribute('hidden'));
      if (!fullTextWrapper.hasAttribute('hidden')) {
        toggleButtonText.textContent = 'Afficher plus';
        fullTextWrapper.setAttribute('hidden', true);
        toggleButton.setAttribute('aria-expanded', false);
        toggleButton.setAttribute('aria-pressed', false);
      } else {
        toggleButtonText.textContent = 'Reduire';
        fullTextWrapper.removeAttribute('hidden');
        toggleButton.setAttribute('aria-expanded', true);
        toggleButton.setAttribute('aria-pressed', true);
      }
    });
  });
}
