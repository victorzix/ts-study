export interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
type PessoaProtocolo1<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo = {
  nome: 'Victor',
  sobrenome: 'Raphael',
  idade: 21,
}

console.log(aluno)
