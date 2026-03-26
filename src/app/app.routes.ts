import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Article } from './components/article/article';

export const routes: Routes = [
    {
        path: '',
        component: Landing
    },
    {
        path: 'article',
        component: Article
    }
];
