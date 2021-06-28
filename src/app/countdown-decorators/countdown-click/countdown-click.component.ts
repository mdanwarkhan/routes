import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-click',
  templateUrl: './countdown-click.component.html',
  styleUrls: ['./countdown-click.component.css']
})
export class CountdownClickComponent implements OnInit {
  @Input() startClickCount: number;
  @Input() pauseClickCount: number;
  constructor() { }

  ngOnInit(): void {
    this.startClickCount = 0;
    this.pauseClickCount = 0;
  }

}
