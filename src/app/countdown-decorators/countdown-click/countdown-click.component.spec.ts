import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownClickComponent } from './countdown-click.component';

describe('CountdownClickComponent', () => {
  let component: CountdownClickComponent;
  let fixture: ComponentFixture<CountdownClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
