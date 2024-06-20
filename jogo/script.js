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
        var campo = campoNumero.value;
        if (campo.match(/^[1-9]|10$/)) { // 1 a 10
            campo = parseInt(campo);
            tentativa++;
            
            if (campo < gerar) {
                mensagem.textContent = "O número é muito baixo!";
            } else if (campo > gerar) {
                mensagem.textContent = "O número é muito alto!";
            } else if (campo === gerar) {
                // Recupera a lista de jogadores do localStorage
                var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
                // Adiciona uma nova tentativa à lista
                listajogadores.push({ nome: nome, tentativa: tentativa });
                // Salva a lista no localStorage
                localStorage.setItem('listajogadores', JSON.stringify(listajogadores));
                // Salva o número de tentativas
                localStorage.setItem('tentativas', tentativa);
                // Redireciona para a página de score
                window.location.href = '../score/index.html';
            }
        } else {
            // Se o campo não for um número válido dentro do intervalo desejado
            mensagem.textContent = "Por favor, insira apenas números de 1 a 10!";
        }
    });
});