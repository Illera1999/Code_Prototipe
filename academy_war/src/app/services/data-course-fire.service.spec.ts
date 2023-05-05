import { TestBed } from '@angular/core/testing';

import { DataCourseFireService } from './data-course-fire.service';

describe('DataCourseFireService', () => {
  let service: DataCourseFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCourseFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
