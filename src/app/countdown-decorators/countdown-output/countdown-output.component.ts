import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-output',
  templateUrl: './countdown-output.component.html',
  styleUrls: ['./countdown-output.component.css']
})
export class CountdownOutputComponent implements OnInit {
  @Input() timerUpdate: number;
  constructor() { }

  ngOnInit(): void {
    this.timerUpdate = 0;
  }


}
