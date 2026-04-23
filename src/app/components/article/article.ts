import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleHandler } from '../../services/article-handler/article-handler';
import { Article as ArticleInterface } from '../../interfaces/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [
    CommonModule
  ],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article implements OnInit {
  private articleId: string = "";
  article: ArticleInterface | null = null;

  constructor(private _route: ActivatedRoute, private _articleHandler: ArticleHandler, private _cdr:ChangeDetectorRef) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.articleId = params.get('articleId') as string;
      this.getArticle();
    });
  }

  private getArticle() {
    this._articleHandler.ReadArticle(Number(this.articleId)).subscribe((data:ArticleInterface) => {
      this.article = data;
      this._cdr.detectChanges()
    });
  }
}
