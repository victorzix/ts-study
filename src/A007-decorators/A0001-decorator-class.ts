@decorator
class Animal {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T{
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super(...args)
      this.cor = 'Qualquer coisa'
    }
  };
}

const animal = new Animal('roxo');
console.log(animal);


export default 1;
