/**
 * Created By : Author XYZ (http://angular/5)
 */

import { TestBed, inject } from '@angular/core/testing';

import { StudentService } from './student.service';

describe('StudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentService]
    });
  });

  it('should be created', inject([StudentService], (service: StudentService) => {
    expect(service).toBeTruthy();
  }));
});

/**
 * Created By : Author XYZ (http://angular/5)
 */
