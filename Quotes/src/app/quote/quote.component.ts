import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Early to bed', 'Early to rise', new Date(2018,3,4)),
    new Quote(2,'Hurry Hurry', 'Has no Blessings', new Date(2018,3,4)),
  ]

  completeQuote(isComplete,index){
    if(isComplete){
      this.quotes.splice(index,1);
    }
    }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
