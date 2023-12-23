const resultadoPartidas = []
const size = 30
for (let i = 0; resultadoPartidas.length < size; i++) {
    resultadoPartidas.push(Math.floor(Math.random() * 2))
}

function vitoriaDerrotas(occurrences) {
    const derrotas = occurrences[0] || 0;
    const vitorias = occurrences[1] || 0;
    const mmr = vitorias - derrotas;
    return mmr;
}
const occurrences = resultadoPartidas.reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});


function ranqueamento(mmr){
    if (mmr <= 10){
        return "Ferro"

    }else if (mmr >= 11 && mmr <= 20){
        return "Bronze"
    }
    else if (mmr >= 21 && mmr <= 50){
        return "Prata"
    }
    else if (mmr >= 51 && mmr <= 80){
        return "Ouro"
    }
    else if (mmr >= 81 && mmr <= 90){
        return "Diamante"
    }
    else if (mmr >= 91 && mmr <= 100){
        return "Lendário"
    }
    else if (mmr >= 101){
        return "Imortal"
    }

}
const saldo = vitoriaDerrotas(occurrences)
const elo = ranqueamento(saldo)

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${elo}`)