import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { PendingArticleResponse } from '../../interfaces/prending-article-response';

@Injectable({
  providedIn: 'root',
})
export class AuditHandler {
  private _apiUrl: string = environment.API_URL;
  
  constructor(private _httpClient: HttpClient) {

  }

  public ReadArticlesAwaitingApproval(page:number) {
    return this._httpClient.get<PendingArticleResponse>(this._apiUrl + `/article/pending-audit?page=${page}`)
  }

  public UpdateArticleApprovalStatus(articleId: number, isApproved: boolean) {
    
  }
}
