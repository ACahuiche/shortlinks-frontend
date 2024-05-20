import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ShortlinkFormComponent } from './shortlink-form/shortlink-form.component';
import { ShortlinkResultComponent } from './shortlink-result/shortlink-result.component';
import { RedirectComponent } from './redirect/redirect.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotExistComponent } from './not-exist/not-exist.component';

import { DataShortlinkService } from './services/datashortlink.service';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ShortlinkFormComponent,
    ShortlinkResultComponent,
    RedirectComponent,
    NotFoundComponent,
    NotExistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DataShortlinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
