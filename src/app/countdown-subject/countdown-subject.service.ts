import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownSubjectService {
  
  private timerTickerSource = new BehaviorSubject<number>(0);
  private startPauseClickTimerLogsSource = new Subject();
  private startClickCountSource = new BehaviorSubject<number>(0);
  private pauseClickCountSource = new BehaviorSubject<number>(0);

  sendTimerTicker(timer: number) {
      this.timerTickerSource.next(timer);
  }

  getTimerTicker(): Observable<number>{
      return this.timerTickerSource.asObservable()
  }
  sendStartPauseClickTimerLogs(logs: any) {
      this.startPauseClickTimerLogsSource.next(logs);
  }

  getStartPauseClickTimerLogs(): Observable<any>{
    return this.startPauseClickTimerLogsSource.asObservable()
  }
  sendStartClickCount(startCount: number) {
    this.startClickCountSource.next(startCount);
  }

  getStartClickCount(): Observable<number> {
    return this.startClickCountSource.asObservable();
  }
  sendPauseClickCount(pauseCount: number) {
    this.pauseClickCountSource.next(pauseCount);
  }

  getPauseClickCount(): Observable<number> {
    return this.pauseClickCountSource.asObservable();
  }

  constructor() { }
}
