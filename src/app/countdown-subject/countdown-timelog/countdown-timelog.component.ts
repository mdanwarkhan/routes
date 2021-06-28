import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountdownSubjectService } from '../countdown-subject.service';

@Component({
  selector: 'app-countdown-timelog',
  templateUrl: './countdown-timelog.component.html',
  styleUrls: ['./countdown-timelog.component.css']
})
export class CountdownTimelogComponent implements OnInit {

  startPauseClickTimerLogs$: Observable<any>;

  constructor(private countdownSubjectService: CountdownSubjectService) { }

  ngOnInit(): void {
     this.startPauseClickTimerLogs$ = this.countdownSubjectService.getStartPauseClickTimerLogs();
  }

}
