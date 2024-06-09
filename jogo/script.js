var nome = localStorage.getItem('nomedousuario');
document.getElementById('mostrar').textContent = nome;

var min = 1;
var max = 10;
var gerar = Math.floor(Math.random() * (max-min+1)) + min;
localStorage.setItem('numeroAleatorio', gerar);


var adivinhar = document.getElementById("adv");
var campo = parseInt(document.getElementById("numero").value);
var mensagem = document.getElementById("instrucao");
var tentativa = 0;
console.log(gerar);
localStorage.setItem('tentativas', tentativa);

adivinhar.addEventListener("click", function(){
    var campo = document.getElementById("numero").value;
    if (campo.match(/^[1-9]|10$/)) { // Verifica se o campo é um número entre 1 e 10
        campo = parseInt(document.getElementById("numero").value); // Converte para inteiro
        tentativa++;
        
            if(campo < gerar) {
        mensagem.textContent = "O número é muito baixo!" 
    }else if (campo > gerar) {
        mensagem.textContent = "O número é muito alto!"
    }else if (campo === gerar) {
        // Recupera a lista de tentativas anteriores do localStorage
        var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
        //adiciona uma nova tentativa a lista
        listajogadores.push({nome: nome, tentativa: tentativa});
        //salva a lista no storage
        localStorage.setItem('listajogadores', JSON.stringify(listajogadores));
        //salva o número de tentativas
        localStorage.setItem('tentativas', tentativa);
        window.location.href = 'http://127.0.0.1:5500/Score/index.html'
        }
    } else {
        // Se o campo não for um número válido dentro do intervalo desejado
        mensagem.textContent = "Por favor, insira apenas números de 1 a 10!";
    }
});



// adivinhar.addEventListener("click", function(){
//     var campo = parseInt(document.getElementById("numero").value);
//     tentativa++;
   
//     if(campo < gerar) {
//         mensagem.textContent = "O número é muito baixo!" 
//     }else if (campo > gerar) {
//         mensagem.textContent = "O número é muito alto!"
//     }else if (campo === gerar) {
//         // Recupera a lista de tentativas anteriores do localStorage
//         var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
//         //adiciona uma nova tentativa a lista
//         listajogadores.push({nome: nome, tentativa: tentativa});
//         //salva a lista no storage
//         localStorage.setItem('listajogadores', JSON.stringify(listajogadores));
//         //salva o número de tentativas
//         localStorage.setItem('tentativas', tentativa);
//         window.location.href = 'http://127.0.0.1:5500/Score/index.html'
//     }
// });