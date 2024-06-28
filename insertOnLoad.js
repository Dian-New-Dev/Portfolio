const h1 = document.getElementById('h1');
const heroH6 = document.getElementById('header=h6');
const ancoras = document.querySelectorAll('.ancoras');

function insertOnLoad() {
    h1.textContent = hero.h1;
    heroH6.textContent= hero.h6;
    for (let i = 0; i < ancoras.length; i++) {
        ancoras[i].textContent = hero.ancoras[i];
    }

}