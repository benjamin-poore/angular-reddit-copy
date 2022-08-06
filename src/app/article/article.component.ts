import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'grid grid-cols-12 justify-center max-w-sm mx-auto py-2'
  @Input() article: Article;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor() {}

  onVoteDown(): void {
    this.article.voteDown();
  }

  onVoteUp(): void {
    this.article.voteUp();

  }

  ngOnInit(): void {
  }

}
