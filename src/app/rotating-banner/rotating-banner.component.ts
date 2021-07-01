import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-rotating-banner',
  templateUrl: './rotating-banner.component.html',
  styleUrls: ['./rotating-banner.component.css'],
  animations: [
    trigger('move', [
      state('in', style({ transform: 'translateX(100%)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in => out', animate('15s')),
      transition('out => in', animate('0s'))
    ]),
  ]
})
export class RotatingBannerComponent implements AfterViewInit {
  state = 'in';
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }
  onEnd(event: any) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }
}
