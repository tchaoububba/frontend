import { TestBed } from '@angular/core/testing';

import { ContentApprovalService } from './content-approval.service';

describe('ContentApprovalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentApprovalService = TestBed.get(ContentApprovalService);
    expect(service).toBeTruthy();
  });
});
