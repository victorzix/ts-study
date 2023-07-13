function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Victor',
  sobrenome: 'Raphael',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  }
};

semRetorno('Victor', 'Raphael')
pessoa.exibirNome();
export {pessoa}
