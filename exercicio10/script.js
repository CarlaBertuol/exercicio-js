// 10. Escreva um programa que le o tamanho de um quadrado e imprime um quadrado daquele com tamanho com asteriscos. 

const input = prompt('Digite um número inteiro', '5');

let result = '';
for(let i=1; i<=input; i++) {
  for(let j=1; j<= input; j++){
    result += '*';
  }
  result += '\n';
}

console.log(result);