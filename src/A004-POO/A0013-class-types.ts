type TipoNome = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}
type TipoSobrenome = {
  sobrenome: string;
}
type TipoNomeCompleto = {
  nomeCompleto(): string;
}


export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto{
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

const pessoa = new Pessoa('Victor', 'Raphael')
console.log(pessoa.nomeCompleto())
