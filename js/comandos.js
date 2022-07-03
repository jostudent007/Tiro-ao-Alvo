
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = '#d3d3d3';
pincel.fillRect(0, 0, 800, 600);

var raio = 10;

//função desenhar o circulo
function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    //arc é uma biblioteca de criar circulo 
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}
//desenha ilusão de alvo
function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, 'red')
    desenhaCirculo(x, y, raio + 10, 'white')
    desenhaCirculo(x, y, raio, 'red')
}


//cordenadas aleatorias de posição do alvo
var xAle;
var yAle;

function posicaoAleatoria(maximo) {
    return Math.floor(Math.random() * maximo);
}

//apaga a tela ilusão de se movimentar
function limpaTela() {
    pincel.clearRect(0, 0, 800, 600);
}

//atualiza a tela ilusão de se movimentar
//o if serve para ter ganhador ou perdedor
function atualizaTela() {
    //o if serve para parar quando ganhar ou perde
    if (condicao) {
        limpaTela();
        xAle = posicaoAleatoria(780);
        yAle = posicaoAleatoria(580);
        desenhaAlvo(xAle, yAle);
    }

}
setInterval(atualizaTela, 1000);

var acertos = 0;
var erros = 0;
var condicao = false;
var tentativas = 10;

//pegar local onde clica
function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if (condicao) {
        if ((x > xAle - raio) && (x < xAle + raio) && (y > yAle - raio) && (y < yAle + raio)) {

            tentativas--;
            acertos++;
        } else {

            tentativas--;
            erros++;
        }
    }
    decisao();

}

tela.onclick = dispara;

//serve para decidir quanto ganha quanto perde
function decisao() {

    if (tentativas == 0) {
        condicao = false;
        alert('JOGO ACABOU!!')
        alert('VOCÊ ACERTOU: ' + acertos + ' E ERROU: ' + erros)
        alert('Em: ' + ss + ' Segundos')
        pause();
        getName();
        cadNick(jogador, acertos, erros, ss)
        stop();
        limpaTela();

    }


}
function startGame() {
    if (condicao == false) {
        condicao = true;
        tentativas = 10;
        erros = 0;
        acertos = 0;

    } else {
        stop();
    }

}

//pegar nome
let jogador = "";
function getName() {
    let jogadorGet = prompt("Digite seu Nick:");
    if (jogadorGet != null) {
        jogador = jogadorGet;
    }
}

function gamePausado() {
    limpaTela();
}