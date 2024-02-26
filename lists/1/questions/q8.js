const input = require("prompt-sync")({ sigint: true });

let nums = [];

for (let i = 0; i <= 4; i++) {
    let num = +input('Digite: ');
    nums.push(num);
}

console.log(`Soma: ${sum(nums)}`);
console.log(`Multiplicação: ${mult(nums)}`);
nums.forEach((e) => {
  console.log(`numero: ${e}`);
});

function sum(arr) {
  let t = 0;

  arr.forEach((element) => {
    t += element;
  });

  return t;
}

function mult(arr) {
  let t = 1;

  arr.forEach((element) => {
    t *= element;
  });

  return t;
}
