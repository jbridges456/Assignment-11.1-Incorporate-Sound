// Developer: [Jordan Bridges]
// Script for toggling background sound

// Select the audio element and button
const backgroundSound = document.getElementById('backgroundSound');
const toggleSoundButton = document.getElementById('toggleSound');

// Add event listener to toggle sound
toggleSoundButton.addEventListener('click', () => {
    if (backgroundSound.paused) {
        backgroundSound.play();
        toggleSoundButton.textContent = "Pause Sound";
    } else {
        backgroundSound.pause();
        toggleSoundButton.textContent = "Play Sound";
    }
});
