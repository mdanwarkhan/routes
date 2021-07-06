import { Component, OnInit } from '@angular/core';
import { TimeLogger } from 'src/app/shared/models/time-logger.model';
import { CountdownSubjectService } from '../countdown-subject.service';

@Component({
  selector: 'app-countdown-input',
  templateUrl: './countdown-input.component.html',
  styleUrls: ['./countdown-input.component.css']
})
export class CountdownInputComponent {

  timerInput: number;
  disableTimerInput = false;
  countDownInterval: ReturnType<typeof setTimeout>;
  secondsLeftms: number;
  endTime: number;
  stopBtnClicked = true;
  start = true;

  timerStatus = 'Start'
  timerTicker: number;

  startCount = 0;
  pauseCount = 0;

  startPauseTimeArr: TimeLogger[] = []

  constructor(private countdownSubjectService: CountdownSubjectService) { }

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
        this.countdownSubjectService.sendStartPauseClickTimerLogs(this.startPauseTimeArr)
        this.startCount++;
        this.countdownSubjectService.sendStartClickCount(this.startCount)
      }
    }

    this.stopBtnClicked = !this.stopBtnClicked;
    if (this.stopBtnClicked) {
      this.timerStatus = "Start"

      clearInterval(this.countDownInterval);
      this.startPauseTimeArr.push({ 'paused': new Date() })
      this.countdownSubjectService.sendStartPauseClickTimerLogs(this.startPauseTimeArr)
      this.pauseCount++
      this.countdownSubjectService.sendPauseClickCount(this.pauseCount)
    } else if (!this.stopBtnClicked) {
      if (this.start) {
        this.countdownSubjectService.sendStartPauseClickTimerLogs(this.startPauseTimeArr)
        // this.startPauseTimeArr.push({'started': 'skip'})
        this.start = false;
      } else {
        this.startPauseTimeArr.push({ 'started': new Date() })
        this.countdownSubjectService.sendStartPauseClickTimerLogs(this.startPauseTimeArr)
        this.startCount++
        this.countdownSubjectService.sendStartClickCount(this.startCount)
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
    this.countdownSubjectService.sendTimerTicker(this.timerTicker)

  };

  resetTimer() {
    this.resetCountDown();
  }

  resetCountDown() {
    this.disableTimerInput = false;
    this.start = true
    clearInterval(this.countDownInterval);
    this.timerInput = 0;
    this.stopBtnClicked = true;
    this.countdownSubjectService.sendTimerTicker(this.timerTicker = 0)
    this.countdownSubjectService.sendStartPauseClickTimerLogs(this.startPauseTimeArr = [])
    this.countdownSubjectService.sendStartClickCount(this.startCount = 0)
    this.countdownSubjectService.sendPauseClickCount(this.pauseCount = 0)
    this.timerStatus = 'Start';
  };
}
