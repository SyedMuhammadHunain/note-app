import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteComponent } from './note/note.component';
import { IconButtonComponent } from './shared/icon-button/icon-button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NewNoteComponent,
    NoteComponent,
    HeaderComponent,
    IconButtonComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
