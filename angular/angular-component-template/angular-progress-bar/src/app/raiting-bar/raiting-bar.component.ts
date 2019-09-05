import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-raiting-bar',
  templateUrl: './raiting-bar.component.html',
  styleUrls: ['./raiting-bar.component.css']
})
export class RaitingBarComponent implements OnInit {

  @Input() ratingValue = 5;
  @Input() showRatingValue = true;
 

  constructor() { }

  ngOnInit() {
  }

}
