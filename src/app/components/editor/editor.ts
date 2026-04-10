import { Component, Input } from '@angular/core';
import { Article } from '../../interfaces/article';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ArticleHandler } from '../../services/article-handler/article-handler';

@Component({
  selector: 'app-editor',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './editor.html',
  styleUrl: './editor.css',
})
export class Editor {
  // inputs and outputs
  @Input() existingArticle: Article | null = null;

  // properties
  public titleFormControl: FormControl = new FormControl('');
  public contentFormControl: FormControl = new FormControl('');
  public errorMessage: string = "";
  public hideErrorMessage: boolean = true;

  // constructor
  constructor(private _articleHandler: ArticleHandler) {

  }

  // events
  public onSubmit() {
    let title = this.titleFormControl.value;
    let content = this.contentFormControl.value;
    let errorExists = false;

    // if error message is shown from previous attempt, reset it
    this.hideErrorMessage = true;
    this.errorMessage = "";

    // check all fields are filled in
    if (!title) {
      this.errorMessage += "Title is empty. "
      errorExists = true;
    }

    if (!content) {
      this.errorMessage += "Content is empty. "
      errorExists = true;
    }

    if (errorExists) {
      this.hideErrorMessage = false;
    } else {
      let article = {
        'title': this.titleFormControl.value,
        'content': this.contentFormControl.value
      }

      this._articleHandler.CreateArticle(article).subscribe();
    }

    // stop page from refreshing
    return false;
  }

  // methods
}
