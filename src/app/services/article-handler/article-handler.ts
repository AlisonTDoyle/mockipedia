import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ArticleHandler {
  private _apiUrl: string = environment.API_URL;

  public CreateArticle() {

  }

  public ReadArticle(articleId: number) {

  }

  public ReadMostViewedArticles() {

  }

  public UpdateArticle(articleId: number) {

  }
}
