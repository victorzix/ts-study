export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
      return 'isso vem do aluno: ' + this.nome + ' ' + this.sobrenome
    }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do cliente: ' + this.nome + ' ' + this.sobrenome
  }
}

const pessoa = new Pessoa('Victor', 'Raphael', 21, '000-000-000-00')
const aluno = new Aluno('Victor', 'Raphael', 21, '000-000-000-00')
const cliente = new Cliente('Victor', 'Raphael', 21, '000-000-000-00')

console.log(pessoa.getNomeCompleto())
console.log(cliente.getNomeCompleto())
console.log(aluno.getNomeCompleto())
