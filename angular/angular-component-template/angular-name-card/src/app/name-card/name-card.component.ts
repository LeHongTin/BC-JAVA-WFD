import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {

  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  

  constructor() { }

  ngOnInit() {
    this.cardName="Professional Dev"; this.email="prodev@abc.xyz"; this.phone="0123456789";
  }

}
