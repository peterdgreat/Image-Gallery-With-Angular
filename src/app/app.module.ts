import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { HttpClientModule } from '@angular/common/http';
import {ImageserviceService} from './imageservice.service';
import { FilterPipe } from './filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailsComponent,
    FilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ImageserviceService,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
