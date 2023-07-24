interface VotationOption {
  amount: number;
  option: string;
}

class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {};

  addVotationOption(votationOption: VotationOption){
    this._votationOptions.push(votationOption)
  }

  vote(votationIndex: number): void {
    if(!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].amount += 1
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions
  }
}

class VotationApp {
  private votations: Votation[] = []

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details)
      for (const votationOption of votation.votationOptions){
        console.log(votationOption.option, votationOption.amount)
      }
      console.log('###')
      console.log('')
    }

  }
}

const vot1 = new Votation('Qual sua linguagem de programação favorita?')
vot1.addVotationOption({option: 'Python', amount: 0})
vot1.addVotationOption({option: 'Javascript', amount: 0})
vot1.addVotationOption({option: 'TypeScript', amount: 0})

vot1.vote(0)
vot1.vote(0)
vot1.vote(1)
vot1.vote(1)
vot1.vote(1)
vot1.vote(2)

const votationApp = new VotationApp();
votationApp.addVotation(vot1)

votationApp.showVotations()

export default 1;
