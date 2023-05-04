import { TestBed } from '@angular/core/testing';

import { DataUserFireService } from './data-user-fire.service';

describe('DataUserFireService', () => {
  let service: DataUserFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUserFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
