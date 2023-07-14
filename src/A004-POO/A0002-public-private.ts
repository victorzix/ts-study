export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
    cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const emp1 = new Empresa('Udemy', '11.11.111/0001-11');
const colaborador1 = new Colaborador('Victor', 'Raphael');
const colaborador2 = new Colaborador('Victor', 'Neves');
const colaborador3 = new Colaborador('Victor', 'Ramos');

emp1.adicionaColaborador(colaborador1);
emp1.adicionaColaborador(colaborador2);
emp1.adicionaColaborador(colaborador3);
emp1.adicionaColaborador({ nome: 'Victor', sobrenome: 'Mendes' });


console.log(emp1);
