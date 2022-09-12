let coxinhas = prompt(
  "Deseja comer mais coxinhas? (responda 'S' para sim ou 'N' para não)"
);

let conta = 0;

while (coxinhas === "S") {
  conta = conta + 2.5;
  coxinhas = prompt("Deseja comer mais coxinhas?");
}

console.log(`Valor atual da conta: R$ ${conta}`);
