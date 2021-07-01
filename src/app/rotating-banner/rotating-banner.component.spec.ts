import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingBannerComponent } from './rotating-banner.component';

describe('RotatingBannerComponent', () => {
  let component: RotatingBannerComponent;
  let fixture: ComponentFixture<RotatingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotatingBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
