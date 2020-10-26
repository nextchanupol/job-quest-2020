const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = 0;
rl.question("Input number : ", function (num) {
  answer = fib(num);
  console.log(`fib(${num}) = ${answer}`);
  rl.close();
});

rl.on("close", function () {
  console.log("\nOK !!!");
  process.exit(0);
});


// phi = (1+√5) / 2
// F(n) = round( Phi^n / √5 )
function fib(num) {
  const sqrtFive = Math.sqrt(5);
  const phi = (1 + sqrtFive) / 2;
  return Math.round(Math.pow(phi, num) / sqrtFive);
}