import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  vote:number
  @Input() quote:Quote;
  votes = 0;
  @Output() isCompete = new EventEmitter<boolean>();


  quoteDelete(complete:boolean){
    this.isCompete.emit(complete);
  }
  constructor() {
    this.vote = 0;
  }

  likeVote():boolean{
    this.vote +=1;
    return false;
  }

  dislikeVote():boolean{
    this.vote -=1;
    return false
  }

  ngOnInit() {
  }

}
