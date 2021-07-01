import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-input',
  templateUrl: './countdown-input.component.html',
  styleUrls: ['./countdown-input.component.css']
})
export class CountdownInputComponent implements OnInit {

  timerInput: any;
  disableTimerInput = false;
  countDownInterval: any;
  secondsLeftms: number;
  endTime: number;
  stopBtnClicked = true;
  start = true;

  timerStatus = 'Start'
  timerTicker: any;

  startCount = 0;
  pauseCount = 0;

  startPauseTimeArr: any[] = []

  @Output() timer = new EventEmitter<number>();
  @Output() startClickCount = new EventEmitter<number>()
  @Output() pauseClickCount = new EventEmitter<number>()
  @Output() startPauseClickTimerLogs = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    // this.timerIinput.nativeElement.value == '' ? true : false
  }

  toggleTimer() {
    this.disableTimerInput = true;
    if (this.start) {
      let countDownTime = this.timerInput;
      if (countDownTime > 0) {

        countDownTime = countDownTime * 1000;
        const now = Date.now();
        this.endTime = now + countDownTime;
        this.setCountDown(this.endTime);
        this.startPauseTimeArr.push({ 'started': new Date() })
        this.startPauseClickTimerLogs.emit(this.startPauseTimeArr)
        this.startCount++
        this.startClickCount.emit(this.startCount)
      }
    }

    this.stopBtnClicked = !this.stopBtnClicked;
    if (this.stopBtnClicked) {
      this.timerStatus = "Start"

      clearInterval(this.countDownInterval);
      this.startPauseTimeArr.push({ 'paused': new Date() })
      this.startPauseClickTimerLogs.emit(this.startPauseTimeArr)
      this.pauseCount++
      this.pauseClickCount.emit(this.pauseCount)
      console.log('test', this.countDownInterval)
    } else if (!this.stopBtnClicked) {
      if (this.start) {
        this.startPauseClickTimerLogs.emit(this.startPauseTimeArr)
        // this.startPauseTimeArr.push({'started': 'skip'})
        this.start = false;
      } else {
        this.startPauseTimeArr.push({ 'started': new Date() })
        this.startPauseClickTimerLogs.emit(this.startPauseTimeArr)
        this.startCount++
        this.startClickCount.emit(this.startCount)
      }

      this.timerStatus = "Stop"
      this.endTime = this.secondsLeftms + Date.now();
      this.countDownInterval = setInterval(() => {
        this.setCountDown(this.endTime);
      }, 1000);
    }
  }

  setCountDown(endTime: number) {
    this.secondsLeftms = endTime - Date.now();
    const secondsLeft = Math.round(this.secondsLeftms / 1000);

    if (secondsLeft < 0) {
      this.resetCountDown();
      return;
    }

    this.timerTicker = secondsLeft;
    this.timer.emit(this.timerTicker)
  };

  resetTimer() {
    this.resetCountDown();
  }

  resetCountDown() {
    this.disableTimerInput = false;
    this.start = true
    clearInterval(this.countDownInterval);
    this.timerInput = null;
    this.stopBtnClicked = true;
    this.timer.emit(this.timerTicker = 0)
    this.startPauseClickTimerLogs.emit(this.startPauseTimeArr = [])
    this.startClickCount.emit(this.startCount = 0)
    this.pauseClickCount.emit(this.pauseCount = 0)
    this.timerStatus = 'Start';
  };
}
