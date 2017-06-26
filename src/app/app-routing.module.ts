import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DefaultLayoutComponent } from './shared/components/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'blog/:date/:urlSlug', component: BlogEntryComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
