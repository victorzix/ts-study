export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(el: T): void {
    this.elementos[this.contador] = el;
    this.contador++;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contador--;
    const el = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return el;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
pilha.mostrarPilha()

console.log(pilha)

