let nome = prompt("Qual seu nome?");
document.getElementById("aviso").innerHTML = `Atenção ${nome}, você não pode clicar no botão!`;
let conta = 0;
document.getElementById("numeros").innerHTML = conta;
function contador(){
    conta++;
    document.getElementById("numeros").innerHTML = conta; 
    if (conta == 10) {
       alert(`Você já clickou ${conta} vezes, não está me ouvindo...`);
    }
    if (conta == 15) {
      alert(`Você já clickou ${conta} vezes, não reclame se algo de arrado acontecer...`);
   }
   if (conta == 20) {
      alert(`Cara, ${conta} vezes? Eu não vou falar mais nada.`);
   }
   if (conta == 21) {
      alert(`${nome}, é sério, ${conta} vezes? você realmente não ouve as pessoas.`);
   }
   if (conta == 22) {
      alert(`${nome}, eu acabei de falar com você, assim fica complicado...`);
   }
   if (conta == 23) {
      alert(`Quer saber ${nome}? clicka mais, eu não vou me importar mais com isso!`);
   }
   if (conta == 40) {
      alert(`Isso ${nome}, continue.`);
   }
   if (conta == 50) {
      var explosion = document.getElementById("botaov").src = './img/explosion.png';
      document.getElementById("aviso").innerHTML = `É ${nome}, você me destruiu, feliz agora? eu te avisei... :(`
      }
     
   }
 function change1(){
    var img = document.getElementById("botaov").src = './img/button-pressed.png';
    
 }

 function change2(){
   var img2 = document.getElementById("botaov").src = './img/button.png';
}
  