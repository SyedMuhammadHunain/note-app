import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteComponent } from './note/note.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NewNoteComponent, NoteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  notesArray: {
    id: string;
    title: string;
    description: string;
    date: string;
  }[] = [];

  isNewNoteForm = signal<boolean>(false);

  toggleForm() {
    this.isNewNoteForm.set(!this.isNewNoteForm());
  }

  closeForm() {
    this.isNewNoteForm.set(false);
  }

  deleteNoteById(id: string) {
    this.notesArray = this.notesArray.filter((note) => note.id !== id);
  }

  handleNewNote(newNote: { title: string; description: string }) {
    this.notesArray.push({
      id: Date.now().toString(),
      title: newNote.title,
      description: newNote.description,
      date: new Date().toISOString(),
    });
  }
}
