document.addEventListener("DOMContentLoaded", function() {
    var nome = localStorage.getItem('nomedousuario');
    document.getElementById('mostrar').textContent = nome;

    var min = 1;
    var max = 10;
    var gerar = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(gerar);
    localStorage.setItem('numeroAleatorio', gerar);

    var mensagem = document.getElementById("instrucao");
    var tentativa = 0;
    localStorage.setItem('tentativas', tentativa);

    var campoNumero = document.getElementById("numero");
    campoNumero.focus();

    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            adivinhar.click();
        }
    });

    var adivinhar = document.getElementById("adv");
    adivinhar.addEventListener("click", function() {
        var campo = campoNumero.value.trim();
        if (campo.match(/^(?:[1-9]|10)$/)) { 
            campo = parseInt(campo);
            tentativa++;
            
            if (campo < gerar) {
                mensagem.textContent = "O número é muito baixo!";
            } else if (campo > gerar) {
                mensagem.textContent = "O número é muito alto!";
            } else if (campo === gerar) {
               
                var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
                listajogadores.push({ nome: nome, tentativa: tentativa });
                localStorage.setItem('listajogadores', JSON.stringify(listajogadores));
                localStorage.setItem('tentativas', tentativa);
                window.location.href = '../score/index.html'; 
            }

            
            if (campo - gerar == 1 || campo - gerar == -1) {
                mensagem.style.backgroundColor = "rgb(255,96,96)";
            }else if (campo - gerar == 2 || campo - gerar == -2) {
                mensagem.style.backgroundColor = "rgb(255,255,126)";
            }else{
                mensagem.style.backgroundColor = "rgb(96,96,255)";
            }
            

            campoNumero.value = '';

        } else {
            mensagem.textContent = "Por favor, insira apenas números de 1 a 10!";
        }

    });
});