import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownOutputComponent } from './countdown-output.component';

describe('CountdownOutputComponent', () => {
  let component: CountdownOutputComponent;
  let fixture: ComponentFixture<CountdownOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
