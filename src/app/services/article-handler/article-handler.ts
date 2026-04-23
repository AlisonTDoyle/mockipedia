import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map, Observable } from 'rxjs';
import { ArticleSnapshot } from '../../interfaces/article-snapshot';
import { Article } from '../../interfaces/article';


@Injectable({
  providedIn: 'root',
})
export class ArticleHandler {
  // properties
  private _apiUrl: string = environment.API_URL;

  // constructors
  constructor(private _httpClient: HttpClient) {

  }

  // methods
  public CreateArticle(article: { title: string, content: string }) {

    return this._httpClient.post(this._apiUrl + "/article", article)
      .pipe(tap((res) => {
        console.log(res);
      }))
  }

  public ReadArticle(articleId: number) : Observable<Article> {
    return this._httpClient.get<Article>(this._apiUrl + `/article/${articleId}`);
  }

  public ReadMostViewedArticles() {
    return this._httpClient.get<any>(this._apiUrl + "/article/most-viewed?amount=3")
      .pipe(
        map((res) => res?.articles as ArticleSnapshot[])
      );
  }

  public UpdateArticle(articleId: number) {

  }
}
