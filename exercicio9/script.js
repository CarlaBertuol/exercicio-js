// 9. Faça um progama que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com a idade maior ou igual a 18 anos. 

const input = prompt ("Digite idades separadas por vírgula ", "10,5,23,28,18,42,59,12,3,80,56");
const values = input.split(",");

let counter = 0;
for(let i=0; i< values.length; i++) {
  const age = parseInt(values[i]);
  if (age >= 18){
    counter++;
  }

}

console.log('Maiores de idade', counter);