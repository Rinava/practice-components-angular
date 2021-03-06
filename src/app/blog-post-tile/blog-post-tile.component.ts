import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
})
export class BlogPostTileComponent implements OnInit {
  @Input() post!: BlogPost; /* aca le digo que input recibirá */
  constructor() {}

  ngOnInit(): void {
  }
}
