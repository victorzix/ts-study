/* eslint-disable */
const nome: string = 'Victory';
const idade: number = 21;
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer-symbol');
const big: bigint = 10n;

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 21,
  nome: 'Victor',
};

function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y
