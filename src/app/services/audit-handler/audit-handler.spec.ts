import { TestBed } from '@angular/core/testing';

import { AuditHandler } from './audit-handler';

describe('AuditHandler', () => {
  let service: AuditHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
