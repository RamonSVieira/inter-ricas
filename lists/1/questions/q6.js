const input = require('prompt-sync')({siginint: true});

let notas = [];

for (let i = 0; i <= 3; i++) {
    notas[i] = +input(`Digite a ${i + 1}° nota `);
}

let media = mdNotas(notas);

console.log(`Média: ${media}`);

function mdNotas(arr){
    let total = 0;

    arr.forEach((nota) =>{
        total += nota;
    })

    return total / 4;
}