import { Component, HostListener, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.css']
})
export class DynamicDivsComponent implements OnInit  {

  currentDivNo = 0;
  @ViewChild('myDiv') myDiv: ElementRef;  

  constructor(private renderer: Renderer2) { }

  @HostListener('window:scroll') onScroll(e: Event): void {
    if(document.documentElement.scrollHeight == (window.innerHeight + Math.ceil(window.pageYOffset))) {
      console.log('document.documentElement.scrollHeight',document.documentElement.scrollHeight)
      console.log('window.innerHeight + Math.ceil(window.pageYOffset', window.innerHeight + Math.ceil(window.pageYOffset))
      this.currentDivNo++;
      this.createChildDiv(this.currentDivNo);
    }
  }

  ngOnInit(): void {
    for(let i = 1; i< 5; i++) {
      this.currentDivNo = i
      this.createChildDiv(this.currentDivNo)
    }
  }

  createChildDiv(currentIndex: number) {
    const div = document.getElementById('parentDiv')
    const childDiv = this.renderer.createElement('div');
    this.renderer.setProperty(childDiv, 'id', 'child-div');

    // create button,create text button and set style
    const text = this.renderer.createText('Click');
    const btn = this.renderer.createElement('button');
    this.renderer.setProperty(btn, 'id', 'child-btn');
    this.renderer.listen(btn, 'click', (evt) => {
      alert(`you clicked div# ${currentIndex}`);
    });

    this.renderer.appendChild(btn, text);
    this.renderer.appendChild(childDiv, btn);
    this.renderer.appendChild(div, childDiv);
  }
}
