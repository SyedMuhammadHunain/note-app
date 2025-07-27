import { Component, signal, inject, OnInit } from '@angular/core';

import { LocalStorageService } from './service/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  notesArray: {
    id: string;
    title: string;
    description: string;
    date: string;
  }[] = [];

  ngOnInit() {
    this.notesArray = this.localStorageService.loadNotes();
  }

  isNewNoteForm = signal<boolean>(false);
  private localStorageService = inject(LocalStorageService);

  toggleForm() {
    this.isNewNoteForm.set(!this.isNewNoteForm());
  }

  closeForm() {
    this.isNewNoteForm.set(false);
  }

  deleteNote(id: string) {
    this.notesArray = this.notesArray.filter((note) => note.id !== id);
    this.localStorageService.saveNotes(this.notesArray);
  }

  addNote(newNote: { title: string; description: string }) {
    this.notesArray.push({
      id: Date.now().toString(),
      title: newNote.title,
      description: newNote.description,
      date: new Date().toISOString(),
    });
    this.localStorageService.saveNotes(this.notesArray);
  }
}
