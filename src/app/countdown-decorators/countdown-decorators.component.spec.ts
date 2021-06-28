import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownDecoratorsComponent } from './countdown-decorators.component';

describe('CountdownDecoratorsComponent', () => {
  let component: CountdownDecoratorsComponent;
  let fixture: ComponentFixture<CountdownDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownDecoratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
