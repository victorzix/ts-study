type ObterChaveFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const obterChave: ObterChaveFn = (obj, key) => obj[key];

const animal = {
  cor: 1,
  vacinas: ['Vacina 1', 'Vacina 2', 'Vacina 3']
}

const vacinas = obterChave(animal, 'vacinas')

console.log(vacinas)
