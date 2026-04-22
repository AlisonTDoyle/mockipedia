import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs';
import { ArticleSnapshot } from '../../interfaces/article-snapshot';


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

  public ReadArticle(articleId: number) {

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
