import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalId:number = 0;
  private message: string = 'Message';
  private remainingTime: number= 0;
  @Input()
  seconds = 11;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){}

  private clearToime(){}
  private start(){}
  private stop(){}
  private reset(){}
  private countDown(){}

}
