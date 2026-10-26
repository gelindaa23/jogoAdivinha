const botaoC1= document.getElementById("cofre1");
const botaoC2 = document.getElementById("cofre2");
const botaoC3 = document.getElementById("cofre3")
const cofres = document.getElementById("cofres");
const mensagem = document.getElementById("mensagem");
const mensagem1 = document.getElementById("mensagem1");

const numeroSorteado = Math.floor(Math.random()* 3) +1;
let tentativa = 0;

function verificarCofre(numeroEscolhido) {
    tentativa++;

    if (numeroEscolhido === numeroSorteado) {
        mensagem.textContent =
            "Pelas barbas de Tutankas! Você acertou!!";
    } else {
        mensagem.textContent =
            "Seu danadinho! O cofre está vazio =(";
    }

    mensagem1.textContent =
        "Tentativas acumuladas: " + tentativa;
}

botaoC1.addEventListener("click", function() {
   verificarCofre(1);
    tentativa++;
 
    mensagem1.textContent = "Tentativas acumuladas: " + tentativa;
});

botaoC1.addEventListener("click", function(){
    mensagem.textContent = "Ora Bolas! Você abriu o cofre 1!";
})

botaoC2.addEventListener("click", function() {
    verificarCofre(2);
    tentativa++;
 
    mensagem1.textContent = "Tentativas acumuladas: " + tentativa;
});

botaoC2.addEventListener("click", function(){
    mensagem.textContent = "Ora Bolas! Você abriu o Cofre 2!";
})

botaoC3.addEventListener("click", function() {
    verificarCofre(3);
    tentativa++;
 
    mensagem1.textContent = "Tentativas de acumuladas: " + tentativa;
});

botaoC3.addEventListener("click", function(){
    mensagem.textContent = "Ora Bolas! Você abriu o Cofre 3!";
})