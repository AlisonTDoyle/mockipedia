import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuditHandler {
  private _apiUrl: string = environment.API_URL;

  public ReadArticlesAwaitingApproval() {

  }

  public UpdateArticleApprovalStatus(articleId: number, isApproved: boolean) {
    
  }
}
