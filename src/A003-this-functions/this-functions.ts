export function funcao(this: Date, arg: string): void {
  console.log(this)
  console.log('Arg')
}

funcao.call(new Date(), 'Luiz')
funcao.apply(new Date(), ['Luiz'])
