document.addEventListener("DOMContentLoaded", function() {
    var nome = localStorage.getItem('nomedousuario');
    document.getElementById('nome').textContent = nome;

    var numeroAleatorio = localStorage.getItem('numeroAleatorio');
    document.getElementById('numeroAleatorio').textContent = numeroAleatorio;

    var tentativas = localStorage.getItem('tentativas');
    document.getElementById('tentativas').textContent = tentativas;

    var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
    var listadejogadores = document.getElementById('listadejogadores');

    listajogadores.forEach(function(entry) {
        var nomejogador = document.createElement('li');
        nomejogador.textContent = `${entry.nome}: ${entry.tentativa} tentativas`;
        listadejogadores.appendChild(nomejogador);
    });

    var botao = document.getElementById('botao');
    botao.addEventListener("click", function() {
        window.location.href = '../formulario/index.html';
    });

    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            botao.click();
        }
    });
    
});