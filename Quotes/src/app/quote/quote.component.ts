import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(0,'', '', new Date() ),
  ]

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addnewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.id=quoteLength+1;
    quote.submitDate=new Date(quote.submitDate)
    this.quotes.push(quote)
  };

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
