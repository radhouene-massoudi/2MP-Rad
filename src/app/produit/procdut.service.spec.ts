import { TestBed } from '@angular/core/testing';

import { ProcdutService } from './procdut.service';

describe('ProcdutService', () => {
  let service: ProcdutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcdutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
