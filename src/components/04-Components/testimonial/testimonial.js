// cut the mustard
if ('querySelector' in document && 
    'localStorage' in window && 
    'addEventListener' in window) {

    var toggleButtons = document.querySelectorAll('.js-testimonial__toggle-btn');
    var fullTextWrappers = document.querySelectorAll('.js-testimonial__fulltext');
    var fullText;
    var toggleButtonText;
    

    [].forEach.call(fullTextWrappers, function(fullTextWrapper) {
        // hide all full text on load
        fullTextWrapper.setAttribute('hidden', true);
    });

    [].forEach.call(toggleButtons, function(toggleButton) {
        // show toggle more buttons
        toggleButton.removeAttribute('hidden');

        // add listener for each button
        toggleButton.addEventListener('click', function () {

            fullTextWrapper = this.parentElement.querySelector('.js-testimonial__fulltext');
            toggleButtonText = this.querySelector('.js-testimonial__toggle-btn-text');

            // change attributes and text if full text is shown/hidden
            console.log(fullTextWrapper.hasAttribute('hidden'));
            if (!fullTextWrapper.hasAttribute('hidden')) {
                toggleButtonText.innerText = 'Lire la suite';
                fullTextWrapper.setAttribute('hidden', true);
                toggleButton.setAttribute('aria-expanded', false);
                toggleButton.setAttribute('aria-pressed', false);
            } else {
                toggleButtonText.innerText = 'Reduire';
                fullTextWrapper.removeAttribute('hidden');
                toggleButton.setAttribute('aria-expanded', true);
                toggleButton.setAttribute('aria-pressed', true);
            }
        });
    });
}