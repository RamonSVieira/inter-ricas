const input = require('prompt-sync')({signint: true});

let num = input('Digite um número ');

console.log(`Fatorial: ${fatorial(num)}`);


function fatorial(number){
    if (number === 1) {
        return 1;
    }

    return number * fatorial(number - 1); 
}