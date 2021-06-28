import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountdownSubjectService } from '../countdown-subject.service';

@Component({
  selector: 'app-countdown-click',
  templateUrl: './countdown-click.component.html',
  styleUrls: ['./countdown-click.component.css']
})
export class CountdownClickComponent implements OnInit {
  startClickCount$: Observable<number>;
  pauseClickCount$: Observable<number>;
  constructor(private countdownSubjectService: CountdownSubjectService) { }

  ngOnInit(): void {
    this.startClickCount$ = this.countdownSubjectService.getStartClickCount();
    this.pauseClickCount$ = this.countdownSubjectService.getPauseClickCount();
  }

}
