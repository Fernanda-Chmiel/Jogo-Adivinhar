document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById('nome');
    var botao = document.getElementById("botao");
    var validar = document.getElementById("formulario");

    input.addEventListener('input', function() {
        this.setCustomValidity('');
    });

    validar.addEventListener("submit", function(event) {
        event.preventDefault();

        var nome = input.value.trim();

        if (nome.length >= 3) {
            localStorage.setItem('nomedousuario', nome);
            window.location.href = '../jogo/index.html';
        } else {
            input.setCustomValidity("Por favor, digite pelo menos 3 caracteres.");
            input.reportValidity();
        }
    });

    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            var nome = input.value.trim();
            if (nome.length >= 3) {
                botao.click();
            } else {
                input.setCustomValidity("Por favor, digite pelo menos 3 caracteres.");
                input.reportValidity();
            }
        }
    });

    botao.addEventListener('click', function() {
        var nome = input.value.trim();
        if (nome.length >= 3) {
            window.location.href = '../jogo/index.html';
        } else {
            input.setCustomValidity("Por favor, digite pelo menos 3 caracteres.");
            input.reportValidity();
        }
    });

    input.focus();
});  