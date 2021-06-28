import { TestBed } from '@angular/core/testing';

import { CountdownSubjectService } from './countdown-subject.service';

describe('CountdownSubjectService', () => {
  let service: CountdownSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountdownSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
