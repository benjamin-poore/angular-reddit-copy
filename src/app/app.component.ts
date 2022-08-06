import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article(
        'Angular 2',
        'http://angular.io',
        10
      ),
      new Article(
        'Fullstack',
        'http://fullstack.io',
        10
      ),
      new Article(
        'Angular Homepage',
        'http://angular.io',
        10
      )
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new Article(title.value, link.value))
    title.value = '';
    link.value = '';
  }

  sortedArticles(): Article[] {
    return this.articles.sort((x: Article, y: Article) => y.votes - x.votes);
  }
}
