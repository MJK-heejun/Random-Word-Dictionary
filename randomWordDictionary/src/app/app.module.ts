import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

//component
import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';
import { SettingComponent } from './setting/setting.component';
//service
import { SettingServiceService } from './setting-service.service';


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
      FlexLayoutModule,
      FormsModule
  ],
  providers: [SettingServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
