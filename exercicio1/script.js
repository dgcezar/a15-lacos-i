let coxinhas = prompt(
  "Deseja comer mais coxinhas? (responda 'S' para sim ou 'N' para não)").toUpperCase();

let conta = 0;

while (coxinhas === "S") {
  conta = conta + 2.5;
  coxinhas = prompt("Deseja comer mais coxinhas?").toUpperCase();
}

console.log(`Valor atual da conta: R$ ${conta}`);
