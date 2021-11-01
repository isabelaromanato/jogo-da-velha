function onClickMenu() {
  document.getElementById('menu').classList.toggle('mudar');
  document.getElementById('nav').classList.toggle('mudar');
  document.getElementById('menu-bg').classList.toggle('mudar-bg');
}

let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let botoes = document.querySelectorAll('#btn-container button');
let mensagemContainer = document.querySelector('#mensagem');
let mensagemText = document.querySelector('#mensagem p');
let segundoJogador;
let primeiroJogador;
const valueFacil = document.getElementById('selectFacil');
const valueIntermediario = document.getElementById('selectIntermediario');
const valueDificil = document.getElementById('selectDificil');

console.log(valueFacil.value);
console.log(valueIntermediario.value);
console.log(valueDificil.value);

//CONTA AS JOGADAS
let jogador1 = 0;
let jogador2 = 0;

//ADICIONANDO CLICK
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function () {
    let el = checkEl(jogador1, jogador2);

    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      //COMPUTANDO AS VITÓRIAS
      if (jogador1 == jogador2) {
        jogador1++;

        if (segundoJogador == 'jogador-maquina') {
          //EXECUTANDO O JOGO
          computadorJoga();

          jogador2++;
        }
      } else {
        jogador2++;
      }

      //VÊ QUEM VENCEU
      checarJogada();
    }
  });
}
//SELECIONANDO O MODO EM QUE VAI JOGAR
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', function () {
    segundoJogador = this.getAttribute('id');

    for (let j = 0; j < botoes.length; j++) {
      botoes[j].style.display = 'none';
    }

    setTimeout(function () {
      let container = document.querySelector('#container');
      container.classList.remove('quadrado');
    }, 500);
  });
}

//QUEM ESTÁ JOGANDO
function checkEl(jogador1, jogador2) {
  if (jogador1 == jogador2) {
    el = x;
    document.getElementById('teste-x').classList.add('corEmDestaque-x');
    document.getElementById('teste-o').classList.remove('corEmDestaque-o');
  } else {
    el = o;
    document.getElementById('teste-x').classList.remove('corEmDestaque-x');
    document.getElementById('teste-o').classList.add('corEmDestaque-o');
  }

  return el;
}

function checarJogada() {
  let b1 = document.getElementById('bloco-1');
  let b2 = document.getElementById('bloco-2');
  let b3 = document.getElementById('bloco-3');
  let b4 = document.getElementById('bloco-4');
  let b5 = document.getElementById('bloco-5');
  let b6 = document.getElementById('bloco-6');
  let b7 = document.getElementById('bloco-7');
  let b8 = document.getElementById('bloco-8');
  let b9 = document.getElementById('bloco-9');

  //HORIZONTAL

  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      //x
      declareWinner('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
      //x
      declareWinner('x');
    } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
      //x
      declareWinner('x');
    } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  //VERTICAL
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
      //x
      declareWinner('x');
    } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
      //x
      declareWinner('x');
    } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
      // o
      declareWinner('o');
    }
  }
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
      //x
      declareWinner('x');
    } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
      // o
      declareWinner('o');
    }
  }
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
      //x
      declareWinner('x');
    } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  //DIAGONAL

  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
      //x
      declareWinner('x');
    } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
      // o
      declareWinner('o');
    }
  }
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
      //x
      declareWinner('x');
    } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  //MOSTRA QUANDO DER VELHA
  let contador = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      contador++;
    }
  }

  if (contador == 9) {
    declareWinner('Gave old!');
  }
}

//LIMPA O TABULEIRO E MOSTRA QUEM VENCEU

function declareWinner(winner) {
  let placarX = document.querySelector('#placar-1');
  let placarY = document.querySelector('#placar-2');
  let msg = '';

  if (winner == 'x') {
    placarX.textContent = parseInt(placarX.textContent) + 1;
    msg = 'PARABÉNS JOGADOR 1!!! Você venceu.';
  } else if (winner == 'o') {
    placarY.textContent = parseInt(placarY.textContent) + 1;
    msg = 'PARABÉNS JOGADOR 2!!! Você venceu.';
  } else {
    msg = 'DEU VELHAAAA!!!';
  }

  //MENSAGEM
  mensagemText.innerHTML = msg;
  mensagemContainer.classList.remove('quadrado');

  //FAZENDO A MENSAGEM DESAPARECER
  setTimeout(function () {
    mensagemContainer.classList.add('quadrado');
  }, 3000);

  //LIMPA O PLACAR
  jogador1 = 0;
  jogador2 = 0;

  //REMOVE O X E A O QUANDO O JOGO TERMINA
  let boxesToRemove = document.querySelectorAll('.box div');

  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}

function selecionandoNivel () {
  if (select == "selectFacil"){
    computadorJoga() 
  }else if (select == "selectIntermediario"){
    jogoNivelIntermediario()
  }else {
    jogoNivelDificil()
  }
  
}
//LÓGICA COM COMPUTADOR | NÍVEL FÁCIL
function computadorJoga() {
  let cloneO = o.cloneNode(true);
  contador = 0;
  completo = 0;

  for (let i = 0; i < boxes.length; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 5);

    if (boxes[i].childNodes[0] == undefined) {
      if (numeroAleatorio <= 1) {
        boxes[i].appendChild(cloneO);
        contador++;
        break;
      }
    } else {
      completo++;
    }
  }

  if (contador == 0 && completo < 9) {
    computadorJoga();
  }
}

function ocultarOpcoes() {
  document.getElementById('cbOpcoes').classList.add('ocultar');
}

document.getElementById('2-jogadores').addEventListener('click', ocultarOpcoes);