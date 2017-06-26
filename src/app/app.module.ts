import './../rxjs-operators';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BlogService } from 'ng-static-site-generator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DefaultFooterComponent } from './shared/components/default-footer/default-footer.component';
import { DefaultHeaderComponent } from './shared/components/default-header/default-header.component';
import { DefaultLayoutComponent } from './shared/components/default-layout/default-layout.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'kevinphelps.me' }),
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BlogEntryComponent,
    BlogListComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
    DefaultLayoutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
