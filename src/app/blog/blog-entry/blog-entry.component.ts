import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { BlogEntry, BlogService } from 'ng-static-site-generator';
import { Observable } from 'rxjs/Observable';

interface BlogEntryRouteParams {
  date: string;
  urlSlug: string;
}

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {
  readonly blogEntry: Observable<BlogEntry>;

  notFound = false;

  constructor(activatedRoute: ActivatedRoute, private blog: BlogService) {
    this.blogEntry = activatedRoute.params
      .switchMap((params: BlogEntryRouteParams) => this.getBlogEntry(params.date, params.urlSlug));
  }

  ngOnInit() {
  }

  private getBlogEntry(date: string, urlSlug: string) {
    return this.blog.getBlogEntry(date, urlSlug)
      .catch((error: Response) => {
        this.notFound = error.status === 404;
        return this.notFound ? Observable.of<BlogEntry>(undefined) : Observable.throw(error);
      })
      .do(blogEntry => { this.notFound = blogEntry === undefined; });
  }
}
