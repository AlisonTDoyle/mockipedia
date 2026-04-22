import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Article } from './components/article/article';
import { Editor } from './components/editor/editor';
import { ArticleApprovalPage } from './components/article-approval-page/article-approval-page';

export const routes: Routes = [
    {
        path: '',
        component: Landing
    },
    {
        path: 'article',
        component: Article
    },
    {
        path: 'editor',
        component: Editor
    },
    {
        path: 'pending',
        component: ArticleApprovalPage
    }
];
