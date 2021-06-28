import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-decorators',
  templateUrl: './countdown-decorators.component.html',
  styleUrls: ['./countdown-decorators.component.css']
})
export class CountdownDecoratorsComponent implements OnInit {
  onTimerUpdate: number; 

  startClickCount: number;
  pauseClickCount: number;

  startPauseClickTimerLogs: any;
  constructor() { }

  ngOnInit(): void {
  }

}
