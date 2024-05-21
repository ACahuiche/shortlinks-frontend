import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ShortlinkFormComponent } from './shortlink-form/shortlink-form.component';
import { RedirectComponent } from './redirect/redirect.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotExistComponent } from './not-exist/not-exist.component';

import { DataShortlinkService } from './services/datashortlink.service';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ShortlinkFormComponent,
    RedirectComponent,
    NotFoundComponent,
    NotExistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DataShortlinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
