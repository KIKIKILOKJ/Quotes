export class Quote {
  public showDescription:boolean;
  constructor(public id:number, public name:string, public description:string, public submitDate:Date, public upvotes:number, public downvotes:number, public highest:boolean){
    this.showDescription =false

  }
}
