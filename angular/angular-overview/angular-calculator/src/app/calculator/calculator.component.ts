import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public first: number;
  public second: number;
  public output: number;
  public operator = "+";

  onFirstChange(value){
    this.first = value;
  }

  onSecondChange(value){
    this.second = value;
  }

  onOperatorChange(value){
    this.operator = value;
  }

  calculator(){
    switch(this.operator){
      case "+": this.output = this.first + this.second;
      break;
      case "-": this.output = this.first - this.second;
      break;
      case "*": this.output = this.first * this.second;
      break;
      case "/": this.output = this.first / this.second;
      break;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
