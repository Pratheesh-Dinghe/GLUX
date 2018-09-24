import { TestBed, inject } from '@angular/core/testing';

import { HeaderdataService } from './headerdata.service';

describe('HeaderdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderdataService]
    });
  });

  it('should be created', inject([HeaderdataService], (service: HeaderdataService) => {
    expect(service).toBeTruthy();
  }));
});
