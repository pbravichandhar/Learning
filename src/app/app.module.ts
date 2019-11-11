import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import { SharedModule } from './shared/shared.module';

import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppMaterialModule,
    SharedModule,
    SlimLoadingBarModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
