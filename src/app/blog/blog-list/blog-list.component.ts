import { Component, OnInit } from '@angular/core';
import { BlogEntry, BlogService } from 'ng-static-site-generator';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  readonly blogList: Observable<BlogEntry[]>;

  constructor(private blog: BlogService) {
    this.blogList = this.blog.getBlogList();
  }

  ngOnInit() {
  }
}
