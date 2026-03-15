import { TestBed } from '@angular/core/testing';

import { AppDate } from './app-date';

describe('AppDate', () => {
  let service: AppDate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
