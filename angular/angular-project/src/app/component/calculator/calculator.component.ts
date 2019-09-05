import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private first: number = 10;
  private second: number = 20;
  private output: number;
  private operator: string = '+';
private onChangeFirst(value){
this.first = Number(value);
console.log(this.first);
}

private onChangeSecond(value){
  this.second = Number(value);
  console.log(this.second);
}

private onChangeOperator(value){
  this.operator = value;
  console.log(this.operator);
}

private calculator(){
  this.output = this.first + this.second;
}

  constructor() { }

  ngOnInit() {
  }

}
