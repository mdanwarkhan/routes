import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimelogComponent } from './countdown-timelog.component';

describe('CountdownTimelogComponent', () => {
  let component: CountdownTimelogComponent;
  let fixture: ComponentFixture<CountdownTimelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimelogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
