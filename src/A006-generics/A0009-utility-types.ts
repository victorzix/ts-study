// export const obj1: Record<string, string | number> = {
//   nome: 'Victor',
//   sobrenome: 'Raphael',
//   idade: 30,
// };
// console.log(obj1);

// type PessoaProtocol = {
//   nome?: string;
//   sobrenome?: string;
//   idade?: number;
// };

// type PessoaRequired = Required<PessoaProtocol>;
// type PessoaPartial = Partial<PessoaRequired>;
// type PessoaReadonly = Readonly<PessoaRequired>;
// type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

// const obj2: PessoaRequired = {
//   nome: 'Victor',
//   sobrenome: 'Raphael',
//   idade: 30,
// };
// console.log(obj2);

// SOME TESTS OF MINE
// interface Comprador {
//   cartao: number;
//   nome: string;
//   email: string;
//   cpf: number;
//   endereco: string;
// }
// type Cobranca = {
//   valor: number;
//   email: string;
//   endereco: string;
//   nome: string;
//   data: string;
// };
// class DadosParaCobranca implements Comprador {
//   cartao = 123456789;
//   nome = 'victor';
//   email = 'email@email.com';
//   endereco = 'RJ';
//   cpf = 11122233344455;

//   gerarCobranca(val: number): Cobranca | null {
//     if (val == 0) return null;

//     const cobranca = {
//       valor: val,
//       email: this.email,
//       endereco: this.endereco,
//       nome: this.nome,
//       data: new Date().toDateString(),
//     };
//     return cobranca;
//   }
// }
// const dados = new DadosParaCobranca();
// console.log('Consolando a Instância');
// console.log(dados);
// console.log('Consolando a função gerar cobrança');
// console.log(dados.gerarCobranca(150));

// SOME MORE TESTS
interface User {
  name: string;
  email: string;
  cpf: string;
  adress: string;
}

interface InvoiceType {
  id: number;
  amount: number;
  adress: string;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

class Custumer implements User {
  private invoices: InvoiceType[] = [];

  name: string;
  email: string;
  cpf: string;
  adress: string;

  constructor(
    name: string,
    email: string,
    cpf: string,
    adress: string,
    invoices: InvoiceType[],
  ) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.adress = adress;
    this.invoices = invoices;
  }

  getInvoices(): InvoiceType[] {
    return this.invoices;
  }
}

class Invoice implements InvoiceType {
  amount: number;
  costumer: User;
  adress: string;
  id: number;

  constructor(
    amount: number,
    costumer: User,
    adress: string,
    id = getRandomInt(1, 30),
  ) {
    this.amount = amount;
    this.costumer = costumer;
    this.adress = adress;
    this.id = id;
  }
}

export default 1;
