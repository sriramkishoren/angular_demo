/**
 * Created By : Author XYZ (http://angular/5)
 */

import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService]
    });
  });

  it('should be created', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});

/**
 * Created By : Author XYZ (http://angular/5)
 */