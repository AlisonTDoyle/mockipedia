import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Article } from '../article/article';
import { PendingArticle } from '../../interfaces/pending-article';
import { AuditHandler } from '../../services/audit-handler/audit-handler';
import { PendingArticleResponse } from '../../interfaces/prending-article-response';

@Component({
  selector: 'app-article-approval-page',
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './article-approval-page.html',
  styleUrl: './article-approval-page.css',
})
export class ArticleApprovalPage implements OnInit {
  articlesPendingApproval: any[] = [];
  disablePreviousPageButton: boolean = true;
  disableNextPageButton: boolean = true;
  page: number = 1;

  constructor(private _auditHandler: AuditHandler, private _cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.getPage(this.page);
  }

  nextPage() {
    this.page += 1
    this._cdr.detectChanges();
    this.getPage(this.page);
  }

  previousPage() {
    this.page -= 1
    this._cdr.detectChanges();
    this.getPage(this.page)
  }

  getPage(pageNumber: number) {
    console.log(this.page)
    this._auditHandler.ReadArticlesAwaitingApproval(pageNumber).subscribe((res: PendingArticleResponse) => {
      this.articlesPendingApproval = res.articles;
      this.disableNextPageButton = res.page >= res.total_pages;
      this.disablePreviousPageButton = res.page <= 1;
      this._cdr.detectChanges();
    });
  }

  approveArticle(articleNumber: string) {
    let id: number = Number(articleNumber);
    this._auditHandler.UpdateArticleApprovalStatus(id, 2).subscribe(() => {
      // refresh current page
      this.getPage(this.page)
    })
  }

  denyArticle(articleNumber: string) {
    let id: number = Number(articleNumber);
    this._auditHandler.UpdateArticleApprovalStatus(id, 1).subscribe(() => {
      // refresh current page
      this.getPage(this.page)
    })
  }
}
