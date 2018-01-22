import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EmojiPickerModule } from 'ng-emoji-picker';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmojiPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
