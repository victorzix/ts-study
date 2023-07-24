function decorador(classPrototype: any, nome: string | symbol): any {
  let valorProp: any;

  return {
    get: () => valorProp,
    set: (valor: any) => {
      if (typeof valor === 'string'){
        valorProp = valor.split('').reverse();
        return
      }
      valorProp = valor;
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Victor', 'Raphael', 21);
const metodo = pessoa.metodo('Olá mundo');
console.log(metodo);

