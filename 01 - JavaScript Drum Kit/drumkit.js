// Add playSounn to every keydown event.
window.addEventListener('keydown', playSound);

// For each key, add an event listener to remove playing
// CSS class.
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removePlayingCss));

function playSound(e) {
    // Get key code from the event.
    const keyCode = e.keyCode;

    // Select elements that corresponds to the key code.
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    // Stop execution if there's no matching element.
    if (!audio) {
        return;
    }

    // Rewind to start and play (such that you can hit it repeatedly).
    audio.currentTime = 0;
    audio.play();

    // Add playing CSS class to key element.
    key.classList.add('playing');
}

function removePlayingCss(e) {
    // Target a single transition event (transform) and
    // remove class when we get it.
    if (e.propertyName !== 'transform') {
        return;
    } else {
        // this is equal to the element the event is on (i.e. the key).
        this.classList.remove('playing');
    }
}