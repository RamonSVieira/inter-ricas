const input = require('prompt-sync')({sigint: true});

let nums = [];

for (let i = 0; i <= 4; i++) {
    nums[i] = input('Digite: ');
}

const[even, odd] = oddOrEven(nums);

console.log(`Pares: ${even}, Impares ${odd}`);


function oddOrEven(arr) {
    let e = [];
    let o = [];

    arr.forEach((element) => {
        if (element % 2 == 0) {
            e.push(element)
        }
        else{
            o.push(element)
        }
    });

    return [e, o];
}

