import { TestBed } from '@angular/core/testing';

import { AppDataTs } from './app.data.ts';

describe('AppDataTs', () => {
  let service: AppDataTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDataTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
