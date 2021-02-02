import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
})
export class BlogPostTileComponent implements OnInit {
  @Input() title!: string; // le digo a angular que puedo recibirlo desde otro componente
  @Input()  summary!: string;
  constructor() {}

  ngOnInit(): void {
 /*    this.title = 'Título del Blog';
    this.summary = 'Resúmen del post'; */
  }
}
