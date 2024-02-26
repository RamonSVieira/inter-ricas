const input = require('prompt-sync')({signint: true});

let lado = input('Tamanho lado em cm: ');

let valorArea = area(lado);
let valorPerimetro = perimetro(lado);

console.log(`Área: ${valorArea} cm²`);
console.log(`Perímetro: ${valorPerimetro} cm`);

function area(lado){
    return lado * lado; 
}

function perimetro(lado){
    return lado * 4;
}