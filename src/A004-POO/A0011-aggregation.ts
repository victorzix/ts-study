export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto)
    }
  }

  qtdProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): string {
    return this.produtos.reduce((sum, prod) => sum + prod.preco, 0).toFixed(2);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const prod1 = new Produto('Camiseta', 49.90)
const prod2 = new Produto('Caneca', 23.49)
const prod3 = new Produto('Casaco', 99.90)

const carrinhoDeCompras = new CarrinhoDeCompras()
carrinhoDeCompras.inserirProdutos(prod1, prod2, prod3)
console.log(carrinhoDeCompras)
console.log(carrinhoDeCompras.qtdProdutos())
console.log(carrinhoDeCompras.valorTotal())

