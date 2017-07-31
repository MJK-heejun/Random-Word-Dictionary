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
import { DefinitionComponent } from './definition/definition.component';
import { AudioComponent } from './audio/audio.component';
//service
import { SettingServiceService } from './setting-service.service';
import { WordService } from './word.service';
import { SavedListComponent } from './saved-list/saved-list.component';



@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    SettingComponent,
    DefinitionComponent,
    AudioComponent,
    SavedListComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule
  ],
  providers: [SettingServiceService, WordService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
