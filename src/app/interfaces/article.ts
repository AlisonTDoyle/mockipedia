export interface Article {
  details: ArticleDetails;
  content: ArticleContent;
}

export interface ArticleDetails {
  article_id: string;
  article_name: string;
  creation: string;
  last_edited: string;
  temp_location: string;
  views: number;
}

export interface ArticleContent {
  title: string;
  content: string;
}