
function cadNick(jogador,acertos,erros,ss){
    let tb = document.getElementById('tbNicks');
    let qtdLinhas=tb.rows.length;
    let linha =tb.insertRow(qtdLinhas);

    let cellCodigo = linha.insertCell(0)
    let cellNick = linha.insertCell(1)
    let cellAcertos = linha.insertCell(2)
    let cellErros = linha.insertCell(3)
    let cellTempo = linha.insertCell(4)

    cellCodigo.innerHTML = qtdLinhas;
    cellNick.innerHTML = jogador;
    cellAcertos.innerHTML = acertos;
    cellErros.innerHTML = erros;
    cellTempo.innerHTML = ss;
    
}
