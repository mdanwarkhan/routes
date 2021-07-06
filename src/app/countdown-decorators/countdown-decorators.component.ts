import { Component, OnInit } from '@angular/core';
import { TimeLogger } from '../shared/models/time-logger.model';

@Component({
  selector: 'app-countdown-decorators',
  templateUrl: './countdown-decorators.component.html',
  styleUrls: ['./countdown-decorators.component.css']
})
export class CountdownDecoratorsComponent implements OnInit {
  onTimerUpdate: number; 

  startClickCount: number;
  pauseClickCount: number;

  startPauseClickTimerLogs: TimeLogger[];
  constructor() { }

  ngOnInit(): void {
  }

}
