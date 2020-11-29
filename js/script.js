let nome = prompt("Qual seu nome?");
document.getElementById("aviso").innerHTML = `Atenção ${nome}, você não pode clicar no botão!`
let conta = 0;
document.getElementById("numeros").innerHTML = conta;

function contador(){
    conta++;
    document.getElementById("numeros").innerHTML = conta;
}
 function change1(){
    var img = document.getElementById("botaov").src = './img/button-pressed.png';
    
 }

 function change2(){
   var img2 = document.getElementById("botaov").src = './img/button.png';
}