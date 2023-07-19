export class Calculadora {
  constructor(public num: number) {}

  add(n: number): this {
    this.num += n;
    return this;
  }
  sub(n: number): this {
    this.num -= n;
    return this;
  }
  div(n: number): this {
    this.num /= n;
    return this;
  }
  mult(n: number): this {
    this.num *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.num **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
calculadora.add(5).mult(2).div(2).sub(5).pow(2);
console.log(calculadora);

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`)
  }
}

const request = new RequestBuilder(); // Builder

request.setUrl('http://localhost:3000').setMethod('post').send();
