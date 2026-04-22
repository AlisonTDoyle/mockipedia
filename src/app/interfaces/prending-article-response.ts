export interface PendingArticleResponse {
    page: number,
    total: number,
    total_pages: number,
    articles: [
        {article_id: string,
        article_name: string,
        creation: Date,
        last_edited: Date,
        temp_location: string,
        views: number}
    ]
}