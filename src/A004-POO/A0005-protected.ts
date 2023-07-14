export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor(){
    super('Udemy', '11.111.111/0001-11')
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const emp1 = new Udemy();
const colaborador1 = new Colaborador('Victor', 'Raphael');
const colaborador2 = new Colaborador('Victor', 'Neves');
const colaborador3 = new Colaborador('Victor', 'Ramos');

emp1.adicionaColaborador(colaborador1);
emp1.adicionaColaborador(colaborador2);
emp1.adicionaColaborador(colaborador3);

const colaboradorRemovido = emp1.popColaborador()
console.log(colaboradorRemovido)
console.log(emp1);
