import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  constructor() {}

  ngOnInit(): void {
    this.blogPosts.push(new BlogPost('Licuado', 'De frutilla...'));
    this.blogPosts.push(new BlogPost('Turnos dentista', 'mañana'));
    this.blogPosts.push(new BlogPost('Horarios banco', 'mañana'));
    // pusheo una lista de posts 
  }
}
