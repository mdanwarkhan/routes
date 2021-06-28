import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timelog',
  templateUrl: './countdown-timelog.component.html',
  styleUrls: ['./countdown-timelog.component.css']
})
export class CountdownTimelogComponent implements OnInit {
  @Input() startPauseClickTimerLogs: any;
  constructor() { }

  ngOnInit(): void {
  }

}
