import { Component, HostListener, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.css']
})
export class DynamicDivsComponent implements AfterViewInit, OnDestroy {

  currentDivNo = 0;
  parentDiv: HTMLDivElement;
  @ViewChild('parentDiv') pDiv: ElementRef; 

  constructor(private renderer: Renderer2) { }

  @HostListener('window:scroll') onScroll(e: Event): void {
    if(document.documentElement.scrollHeight == (window.innerHeight + Math.ceil(window.pageYOffset))) {
      this.currentDivNo++;
      this.createChildDiv(this.currentDivNo);
    }
  }

  ngAfterViewInit() {
    this.parentDiv = this.pDiv.nativeElement;
    for(let i = 1; i< 5; i++) {
      this.currentDivNo = i
      this.createChildDiv(this.currentDivNo)
    }
  }

  createChildDiv(currentIndex: number) {
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
    this.renderer.appendChild(this.parentDiv, childDiv);
  }

  ngOnDestroy() {
    Array.from(this.parentDiv.children).forEach( child => {
      this.renderer.removeChild(this.parentDiv, child);
    })
  }
}
