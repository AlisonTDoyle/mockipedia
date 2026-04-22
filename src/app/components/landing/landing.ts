import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleHandler } from '../../services/article-handler/article-handler';
import { ArticleSnapshot } from '../../interfaces/article-snapshot';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing implements OnInit {
  mostViewedArticles:ArticleSnapshot[] = [];

  constructor(private _articleHandler:ArticleHandler, private _cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    this._articleHandler.ReadMostViewedArticles().subscribe((data: ArticleSnapshot[]) => {
      this.mostViewedArticles = data;
      this._cdr.detectChanges();
    });
  }
}
