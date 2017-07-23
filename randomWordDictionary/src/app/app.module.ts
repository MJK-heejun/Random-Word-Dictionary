import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';
import { SettingComponent } from './setting/setting.component';



@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    SettingComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
