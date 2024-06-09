var botao = document.getElementById ("botao");
var validar = document.getElementById ("formulario");
 validar.addEventListener ("submit", function(event){
       event.preventDefault();
       if(this.checkVisibility()){
        var nome = document.getElementById('nome').value;
        localStorage.setItem('nomedousuario', nome);
        window.location.href = 'http://127.0.0.1:5500/jogo/index.html'

    }
    
    });

    





    