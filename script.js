const jogador1 = "X";
const jogador2 = "O";
var turno = true;
var tabuleiro = new Array(9);
var casa = document.getElementsByClassName("casa");
for (let i = 0; i < casa.length; i++) {
    casa[i].addEventListener("click", function () {
        jogar(this.id);
    })

    function jogar(id) {
        if (casa[id].innerHTML == "") {
            casa[id].innerHTML = turno ? jogador1 : jogador2;
            turno = !turno;
            if (turno) {
                casa[id].style.color = "#be2444";
            } else {
                casa[id].style.color = "#3590c7";
            }
        } else {
            alert("Casa ocupada");
        }
        preencherTabuleiro(id, casa[id].innerHTML);
        vencedor(casa[id].innerHTML);
    }

    function preencherTabuleiro(id, jogador) {
        tabuleiro[id] = jogador;
    }

    function vencedor(jogador) {
        var casasPreenchidas = 0;
        for (var i = 0; i < 9; i++) {
            if (tabuleiro[i] != undefined) {
                casasPreenchidas++
            }
        }
        if (tabuleiro[0] == jogador && tabuleiro[1] == jogador && tabuleiro[2] == jogador
            || tabuleiro[3] == jogador && tabuleiro[4] == jogador && tabuleiro[5] == jogador
            || tabuleiro[6] == jogador && tabuleiro[7] == jogador && tabuleiro[8] == jogador
            || tabuleiro[0] == jogador && tabuleiro[3] == jogador && tabuleiro[6] == jogador
            || tabuleiro[1] == jogador && tabuleiro[4] == jogador && tabuleiro[7] == jogador
            || tabuleiro[2] == jogador && tabuleiro[5] == jogador && tabuleiro[8] == jogador
            || tabuleiro[0] == jogador && tabuleiro[4] == jogador && tabuleiro[8] == jogador
            || tabuleiro[2] == jogador && tabuleiro[4] == jogador && tabuleiro[6] == jogador) {
            alert(jogador + " ganhou")
            reset();
        } else if (casasPreenchidas == 9) {
            alert('Deu Velha!')
            reset();
        }
    }

    function reset() {
        document.location.reload();
    }


}
