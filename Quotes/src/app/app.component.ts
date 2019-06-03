import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1,'Early to bed Early to rise'),
    new Quote(2,'Hurry Hurry has no Blessings'),
  ]
}
