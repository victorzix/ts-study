namespace MeuNameSpace {
  export const nomeDoNameSpace = 'Victor';

  export class PessoaDoNameSpace {
    constructor(public nome: string) {}
  }

  const pessoaDoNameSpace = new MeuNameSpace.PessoaDoNameSpace('Victor');

  export namespace OutroNameSpace {
    export const nomeDoNameSpace = 'Outro';
  }
}
