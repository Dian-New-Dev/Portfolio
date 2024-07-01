const mainPanel = document.getElementById('main-panel');


for (let i = 0; i < ancoras.length; i++) {
    ancoras[i].addEventListener('click', function() {
        mostrarConteudo(ancoras[i]);
    })
}

function mostrarConteudo(ancoraClicada) {
    if (mainPanel.classList.contains('show-stuff')) { //se painel já está aberto
        if (ancoraClicada === ancoras[0]) { //se inicio, fecha
            esconderProjetos();
            esconderSobre()
            animateClosing();
            screenClose.play();
        }
        if (ancoraClicada === ancoras[2]) { //sobre
            esconderProjetos();
            mostrarSobre();
        }
  
        if (ancoraClicada === ancoras[1]) { //projetos
            esconderSobre()
            mostrarProjetos();
  
        }
        // animateChanging()

    } else {
        mainPanel.classList.add('show-stuff');
        mainPanel.style.width = '1%';
        mainPanel.style.transform = 'scaleY(0.005)';
        animateOpening(ancoraClicada);
        screenShow.play();
    }

}

function animateOpening(ancoraClicada) {
    setTimeout(() => {
        mainPanel.style.transform = 'scaleY(1.0)';
      }, "0100");

      setTimeout(() => {
        mainPanel.style.width = '90%';
        mainPanel.style.animation = 'main-panel-glow 5s infinite';


      }, "0300");

      setTimeout(() => {
        if (ancoraClicada === ancoras[2]) { //sobre
            esconderProjetos();
            mostrarSobre();
        }
  
        if (ancoraClicada === ancoras[1]) { //projetos
            esconderSobre()
            mostrarProjetos();
  
        }

        
      }, "0700");



    
}

function animateClosing() {
    mainPanel.style.width = '1%';
    



    setTimeout(() => {
        mainPanel.style.transform = 'scaleY(0.000)';
        setTimeout(() => {
            mainPanel.classList.remove('show-stuff');
            
          }, "0300");
        
      }, "0300");

      
    
} 