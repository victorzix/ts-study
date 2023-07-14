export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(cpf: string){
    this.cpf = cpf
  }

  get cpf(): string {
    return this.cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Victor', 'Raphael', 21, '123.456.789-00');
pessoa.cpf = '123.456.789-99'
console.log(pessoa.cpf);
