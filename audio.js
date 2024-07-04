const ambiance = document.getElementById('ambiance');
const hoverSound = document.getElementById('hover');
const screenShow = document.getElementById('screen-show-sound')
const screenClose = document.getElementById('screen-close-sound')

for (let i = 0; i < ancoras.length; i++) {
    ancoras[i].addEventListener('mouseenter', function() {
        hoverSound.play();

    })
}