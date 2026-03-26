import { TestBed } from '@angular/core/testing';

import { ArticleHandler } from './article-handler';

describe('ArticleHandler', () => {
  let service: ArticleHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
