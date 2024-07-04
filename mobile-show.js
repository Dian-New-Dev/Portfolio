// const body = document.body;

// window.addEventListener("resize", function() {
//     logLarguraTela();
    
// });

// function logLarguraTela() {
//     const larguraTela = window.innerWidth;
//     if (larguraTela < 901) {
//         acionarLayoutMobile(larguraTela);
//     }
// }

// function acionarLayoutMobile(larguraTela) {
//     console.log(larguraTela)
//     body.style.width = larguraTela * 2 + 'px';




// }

const body = document.body;

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("resize", function() {
        logLarguraTela();
    });

    function logLarguraTela() {
        const larguraTela = document.documentElement.clientWidth;
        console.log('Client width:', larguraTela);
            if (larguraTela < 901) {
        acionarLayoutMobile(larguraTela);
        console.log('esta abaixo de 900')
    }
    }

    // Initial call to logLarguraTela to log the initial window width
    logLarguraTela();
});

function acionarLayoutMobile(larguraTela) {
    body.style.width = (larguraTela) + 'px';


}

function mostrarMain() {
    const larguraTela2 = document.documentElement.clientWidth;
    body.style.width = (larguraTela2 * 2) + 'px';
    body.style.left = '-' + (larguraTela2) + 'px';

    // const currentBackgroundSize = window.getComputedStyle(body).backgroundSize;
    // // Extracting numeric part
    // let sizes = currentBackgroundSize.split(' ');
    // let widthSize = parseFloat(sizes[0]);
    // body.style.backgroundSize = (widthSize * 2) + '%';
};
