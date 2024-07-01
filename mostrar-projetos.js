const projetosPanel = document.getElementById('projetos');
const h2Projetos = document.getElementById('h2-projetos');
const h3Projetos = document.getElementById('h3-projetos');

const liProjetosArray = document.querySelectorAll('.li-projetos');
const h4ProjetosArray = document.querySelectorAll('.h4-projetos');
const pProjetosArray = document.querySelectorAll('.p-projetos');


function mostrarProjetos() {
    projetosPanel.style.display = 'block';
    h2Projetos.textContent = projetos.h2;
    h3Projetos.textContent = projetos.h3;
    mostrarPreviews(0);

    for (let i = 0; i < liProjetosArray.length; i++) {
        liProjetosArray[i].textContent = projetos.li[i];
        h4ProjetosArray[i].textContent = projetos.h4[i];

        pProjetosArray[i].textContent = projetos.p[i];

        h4ProjetosArray[i].addEventListener('click', function() {
            mostrarTipoDeProjeto(pProjetosArray[i]);
        })
    }
    



}

function esconderProjetos() {
    projetosPanel.style.display = 'none';
}

function mostrarTipoDeProjeto(conteudoAMostrar) {
    for (let i = 0; i < pProjetosArray.length; i++) {
        if (conteudoAMostrar === pProjetosArray[i]) {
            pProjetosArray[i].style.display = 'block';
            mostrarPreviews(i);
        } else {
            pProjetosArray[i].style.display = 'none';
        }
    }


}

// a partir daqui, lógica para mostrar previews

const previewFoto = document.getElementById('preview');
const previewLink = document.getElementById('preview-link');
const bandeira = document.getElementById('bandeira'); // elemento vazio para receber classses e informar ao JS qual tipo de preview mostrar

function mostrarPreviews(tipo) { // 0 = elementos, 1 = páginas, 2 = LPs

    if (tipo === 0) {
        previewFoto.src = projetos.elementos[0];
        previewLink.href = projetos.elementosLink[0];
        bandeira.className = 'elementos';
    } else if (tipo === 1) {
        //mostrar páginas
        previewFoto.src = projetos.paginas[0];
        previewLink.href = projetos.paginasLink[0];
        bandeira.className = 'paginas';
    } else if (tipo === 2) {
        //mostrar lps
        previewFoto.src = projetos.LpA[0];
        previewLink.href = projetos.LpLinkA[0];
        bandeira.className = 'advogados';

    }
}

const arrows = document.querySelectorAll('.arrows');

arrows[0].addEventListener('click', function() { // 0 = seta esquerda, recuar
    retrocederPreview();
})

arrows[1].addEventListener('click', function() { // 1 = seta direita, avançar
    avançarPreview();
})

function avançarPreview() {


    const previewAtual = previewFoto.src;

    if (bandeira.classList.contains('elementos')) {

        for (let i = 0; i < projetos.elementos.length; i++) {
        
        
            const previewAtualComparavel = previewAtual.slice(-26) // retira o link de previewAtual, deixando o src puro e comparavel
    
            if (projetos.elementos[i] === previewAtualComparavel && i + 1 < projetos.elementos.length) { 
                previewFoto.src = projetos.elementos[i + 1];
                previewLink.href = projetos.elementosLink[i + 1];
                break; // Exit the loop once the condition is met
            } else {
            }
        }

    } else if (bandeira.classList.contains('paginas')) {
        for (let i = 0; i < projetos.paginas.length; i++) {
        
        
            const previewAtualComparavel = previewAtual.slice(-24) // retira o link de previewAtual, deixando o src puro e comparavel
    
            if (projetos.paginas[i] === previewAtualComparavel && i + 1 < projetos.paginas.length) { 
                previewFoto.src = projetos.paginas[i + 1];
                previewLink.href = projetos.paginasLink[i + 1];
                break; // Exit the loop once the condition is met
            } else {
            }
        }

    } else if (bandeira.classList.contains('advogados')) {
        for (let i = 0; i < projetos.LpA.length; i++) {
        
        
            const previewAtualComparavel = previewAtual.slice(-29) // retira o link de previewAtual, deixando o src puro e comparavel
    
            if (projetos.LpA[i] === previewAtualComparavel && i + 1 < projetos.LpA.length) { 
                previewFoto.src = projetos.LpA[i + 1];
                previewLink.href = projetos.LpLinkA[i + 1];
                break; // Exit the loop once the condition is met
            } else {
            }
        }

    } else if (bandeira.classList.contains('terapeutas')) {
        for (let i = 0; i < projetos.LpT.length; i++) {
        
        
            const previewAtualComparavel = previewAtual.slice(-30) // retira o link de previewAtual, deixando o src puro e comparavel
    
            if (projetos.LpT[i] === previewAtualComparavel && i + 1 < projetos.LpT.length) { 
                previewFoto.src = projetos.LpT[i + 1];
                previewLink.href = projetos.LpLinkT[i + 1];
                break; // Exit the loop once the condition is met
            } else {
            }
        }

    }
}

function retrocederPreview() {

    const previewAtual = previewFoto.src;

    if (bandeira.classList.contains('elementos')) {

        for (let i = 0; i < projetos.elementos.length; i++) {
        
        
            const previewAtualComparavel = previewAtual.slice(-26) // retira o link de previewAtual, deixando o src puro e comparavel
    
            if (projetos.elementos[i] === previewAtualComparavel && i - 1 >= 0) { 
                previewFoto.src = projetos.elementos[i - 1];
                previewLink.href = projetos.elementosLink[i - 1];
                break; // Exit the loop once the condition is met
            } else {
            }
        }

    } else if (bandeira.classList.contains('paginas')) {
        for (let i = 0; i < projetos.paginas.length; i++) {
        
        
            const previewAtualComparavel = previewAtual.slice(-24) // retira o link de previewAtual, deixando o src puro e comparavel
    
            if (projetos.paginas[i] === previewAtualComparavel && i - 1 >= 0) { 
                previewFoto.src = projetos.paginas[i - 1];
                previewLink.href = projetos.paginasLink[i - 1];
                break; // Exit the loop once the condition is met
            } else {
            }
        }

    } else if (bandeira.classList.contains('advogados')) {
        for (let i = 0; i < projetos.LpA.length; i++) {
        
        
            const previewAtualComparavel = previewAtual.slice(-29) // retira o link de previewAtual, deixando o src puro e comparavel
    
            if (projetos.LpA[i] === previewAtualComparavel && i - 1 >= 0) { 
                previewFoto.src = projetos.LpA[i - 1];
                previewLink.href = projetos.LpLinkA[i - 1];
                break; // Exit the loop once the condition is met
            } else {
            }
        }

    } else if (bandeira.classList.contains('terapeutas')) {
        for (let i = 0; i < projetos.LpT.length; i++) {
        
        
            const previewAtualComparavel = previewAtual.slice(-30) // retira o link de previewAtual, deixando o src puro e comparavel
    
            if (projetos.LpT[i] === previewAtualComparavel && i - 1 >= 0) { 
                previewFoto.src = projetos.LpT[i - 1];
                previewLink.href = projetos.LpLinkT[i - 1];
                break; // Exit the loop once the condition is met
            } else {
            }
        }

    }
}

