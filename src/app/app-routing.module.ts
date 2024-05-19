import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { RedirectComponent } from './redirect/redirect.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotExistComponent } from './not-exist/not-exist.component';

const routes: Routes = [
  { path: '', component: MainViewComponent},
  { path: ':shortlink', component: RedirectComponent},
  { path: 'notfound', component: NotFoundComponent},
  { path: '**', component: NotExistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
