import { Component, signal, inject, OnInit, DestroyRef } from '@angular/core';
import { NotesService } from './service/notes.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  notesService = inject(NotesService);
  destroyRef = inject(DestroyRef);

  notes = this.notesService.notesArray;

  isNewNoteForm = signal<boolean>(false);

  toggleForm() {
    this.isNewNoteForm.set(!this.isNewNoteForm());
  }

  closeForm() {
    this.isNewNoteForm.set(false);
  }

  deleteNote(id: string) {
    this.notesService.removeNotes(id).subscribe();
  }

  addNote(newNote: { title: string; description: string }) {
    const subscription = this.notesService.addNotes(newNote).subscribe({
      error: () => console.log('Something went wrong during adding notes.'),
    });
  }
}

