// function to play drum sound when a button is clicked
const playDrum = e => {
// unique code for each button
        const keyCode = e.keyCode

// active buttons 
        const key = document.querySelector(`div[data-key="${keyCode}"]`);

// adding the class to transform the clicked button
        key.classList.add('playing')

// sound corresponding to clicked button
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

        if(!audio) return;
// resetting the audio time
        audio.currentTime = 0;

// play drum sound
        audio.play();
}

// function to remove the transition animation
const removeTransitionAnim = e => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing')
}

// play drum sound when button is clicked
window.addEventListener('keydown', playDrum);

//drum keys
const keys = document.querySelectorAll('.key');

// remove transition animation
keys.forEach(key => key.addEventListener('transitionend', removeTransitionAnim));





