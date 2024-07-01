const sobrePanel = document.getElementById('sobre')

const h2Sobre = document.getElementById('h2-sobre');
const h5SobreArray = document.querySelectorAll('.h5-sobre');
const h4SobreArray = document.querySelectorAll('.h4-sobre');
const pSobreArray = document.querySelectorAll('.p-sobre');

const foto = document.getElementById('foto')


function mostrarSobre() {
    sobrePanel.style.display = 'block';
    h2Sobre.textContent = sobre.h2;
    h5SobreArray[0].textContent = sobre.h5A;
    h5SobreArray[1].textContent = sobre.h5B;
    for (let i = 0; i < h4SobreArray.length; i++) {
        h4SobreArray[i].textContent = sobre.h4[i]
        pSobreArray[i].textContent = sobre.p[i]
    }

}

function esconderSobre() {
    sobrePanel.style.display = 'none';

}