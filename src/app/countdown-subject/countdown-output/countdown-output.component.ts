import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountdownSubjectService } from '../countdown-subject.service';

@Component({
  selector: 'app-countdown-output',
  templateUrl: './countdown-output.component.html',
  styleUrls: ['./countdown-output.component.css']
})
export class CountdownOutputComponent implements OnInit {
  timerUpdate$: Observable<number>;
  constructor(private countdownSubjectService: CountdownSubjectService) { }

  ngOnInit(): void {
    this.timerUpdate$ = this.countdownSubjectService.getTimerTicker();
  }


}
