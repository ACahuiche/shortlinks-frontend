import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateShortlinkComponent } from './components/create-shortlink/create-shortlink.component';
import { ShowShortlinkComponent } from './components/show-shortlink/show-shortlink.component';
import { ShortlinkNotFoundComponent } from './components/shortlink-not-found/shortlink-not-found.component';

import { DataShortlinkService } from './services/datashortlink.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateShortlinkComponent,
    ShowShortlinkComponent,
    ShortlinkNotFoundComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataShortlinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
