import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShortlinkNotFoundComponent } from './components/shortlink-not-found/shortlink-not-found.component';
import { CreateShortlinkComponent } from './components/create-shortlink/create-shortlink.component';
import { ShowShortlinkComponent } from './components/show-shortlink/show-shortlink.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'createshortlink', component: CreateShortlinkComponent},
  {path: '', redirectTo: '/createshortlink', pathMatch: 'full'},
  {path: ':key', component: ShowShortlinkComponent },
  {path: 'noshortlink', component: ShortlinkNotFoundComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
