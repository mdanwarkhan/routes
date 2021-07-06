import { Component, Input, OnInit } from '@angular/core';
import { TimeLogger } from 'src/app/shared/models/time-logger.model';

@Component({
  selector: 'app-countdown-timelog',
  templateUrl: './countdown-timelog.component.html',
  styleUrls: ['./countdown-timelog.component.css']
})
export class CountdownTimelogComponent implements OnInit {
  @Input() startPauseClickTimerLogs: TimeLogger[];
  constructor() { }

  ngOnInit(): void {
  }

}
