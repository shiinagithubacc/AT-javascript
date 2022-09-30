let turno = 1
let jogo = 0
let casas = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let ContadorX = 0
let ContadorO = 0
let segundos = 0
let minutos = 0
function selecionarCasa(event, numCasa) {
  const tile = event.target;
  function segundo(){
    segundos++;
    if (segundos==60){
      minutos++;
      segundos=0
      document.getElementById("minuto").innerHTML=minutos
    }
    document.getElementById("segundo").innerHTML=segundos
  }
  setInterval(function(){segundo()}, 1000)
  alert("você clicou na casa " + numCasa)
  if (document.getElementById(numCasa).innerText == "X" || document.getElementById(numCasa).innerText == "O") {
    alert("Casa já preenchida, escolha outra.")
  }
  else {
    if ((turno % 2 != 0)) {
      document.getElementById(numCasa).innerText = "X"
      document.getElementById("sJogadorDaVez").innerText = "O"
      casas[numCasa - 1] = "X"
      turno += 1
    }
    else if ((turno % 2 == 0)) {
      document.getElementById(numCasa).innerText = "O"
      document.getElementById("sJogadorDaVez").innerText = "X"
      casas[numCasa - 1] = "O"
      turno += 1
    }
    if ((casas[0]== "X" && casas[1] == "X" && casas[2] == "X") || (casas[3]== "X" && casas[4] == "X" && casas[5] == "X") || (casas[6]== "X" && casas[7] == "X" && casas[8] == "X") || (casas[0]== "X" && casas[3] == "X" && casas[6] == "X") || (casas[1]== "X" && casas[4] == "X" && casas[7] == "X") || (casas[2]== "X" && casas[5] == "X" && casas[8] == "X") || (casas[0]== "X" && casas[4] == "X" && casas[8] == "X") || (casas[2]== "X" && casas[4] == "X" && casas[6] == "X")) {
      if (turno <= 9){
        ContadorX += 2
      }
      else {
        ContadorX += 1
      }
      document.getElementById("X").innerText =ContadorX
      alert("Jogador X ganhou")
      document.getElementById("1").removeAttribute("onclick")
      document.getElementById("2").removeAttribute("onclick")
      document.getElementById("3").removeAttribute("onclick")
      document.getElementById("4").removeAttribute("onclick")
      document.getElementById("5").removeAttribute("onclick")
      document.getElementById("6").removeAttribute("onclick")
      document.getElementById("7").removeAttribute("onclick")
      document.getElementById("8").removeAttribute("onclick")
      document.getElementById("9").removeAttribute("onclick")
      jogo = 1
    }
    else if ((casas[0]== "O" && casas[1] == "O" && casas[2] == "O") || (casas[3]== "O" && casas[4] == "O" && casas[5] == "O") || (casas[6]== "O" && casas[7] == "O" && casas[8] == "O") || (casas[0]== "O" && casas[3] == "O" && casas[6] == "O") || (casas[1]== "O" && casas[4] == "O" && casas[7] == "O") || (casas[2]== "O" && casas[5] == "O" && casas[8] == "O") || (casas[0]== "O" && casas[4] == "O" && casas[8] == "O") || (casas[2]== "O" && casas[4] == "O" && casas[6] == "O")) {
       if (turno <= 9){
        ContadorO += 2
      }
      else {
      ContadorO += 1
      }
      document.getElementById("O").innerText =ContadorO
      alert("Jogador O ganhou")
      document.getElementById("1").removeAttribute("onclick")
      document.getElementById("2").removeAttribute("onclick")
      document.getElementById("3").removeAttribute("onclick")
      document.getElementById("4").removeAttribute("onclick")
      document.getElementById("5").removeAttribute("onclick")
      document.getElementById("6").removeAttribute("onclick")
      document.getElementById("7").removeAttribute("onclick")
      document.getElementById("8").removeAttribute("onclick")
      document.getElementById("9").removeAttribute("onclick")
      jogo = 1
    }
    if ((jogo == 0) && turno == 10) {
      alert("Velha.")
      document.getElementById("1").removeAttribute("onclick")
      document.getElementById("2").removeAttribute("onclick")
      document.getElementById("3").removeAttribute("onclick")
      document.getElementById("4").removeAttribute("onclick")
      document.getElementById("5").removeAttribute("onclick")
      document.getElementById("6").removeAttribute("onclick")
      document.getElementById("7").removeAttribute("onclick")
      document.getElementById("8").removeAttribute("onclick")
      document.getElementById("9").removeAttribute("onclick")
    }
  }
}
