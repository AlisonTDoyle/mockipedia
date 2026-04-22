import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleApprovalPage } from './article-approval-page';

describe('ArticleApprovalPage', () => {
  let component: ArticleApprovalPage;
  let fixture: ComponentFixture<ArticleApprovalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleApprovalPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleApprovalPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
