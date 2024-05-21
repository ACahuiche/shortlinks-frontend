import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotExistComponent } from './not-exist/not-exist.component';
import { ShortlinkFormComponent } from './shortlink-form/shortlink-form.component';

const routes: Routes = [
  { path: '', component: ShortlinkFormComponent},
  { path: ':key', component: RedirectComponent},
  { path: 'notfound', component: NotFoundComponent},
  { path: '**', component: NotExistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
