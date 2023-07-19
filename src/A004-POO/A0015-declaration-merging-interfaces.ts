// Declaration Merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}
interface Pessoa {
  readonly enderecos: string[];
}
interface Pessoa {
  idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Victor',
  sobrenome: 'Raphael',
  enderecos: ['Av. Brasil'],
  idade: 21
}

pessoa.enderecos.push('Rua Nova')
console.log(pessoa);
