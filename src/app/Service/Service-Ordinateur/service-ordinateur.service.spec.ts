import { TestBed } from '@angular/core/testing';

import { ServiceOrdinateurService } from './service-ordinateur.service';

describe('ServiceOrdinateurService', () => {
  let service: ServiceOrdinateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOrdinateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
