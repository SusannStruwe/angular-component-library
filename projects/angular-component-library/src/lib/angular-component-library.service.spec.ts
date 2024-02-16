import { TestBed } from '@angular/core/testing';

import { AngularComponentLibraryService } from './angular-component-library.service';

describe('AngularComponentLibraryService', () => {
  let service: AngularComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
