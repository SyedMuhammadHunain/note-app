import { Injectable, inject, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesArray = signal<{
    id: string;
    title: string;
    description: string;
    date: string;
  }[]>([]);

  private httpClient = inject(HttpClient);

  addNotes(note: { title: string, description: string }) {
    const prevNotes = this.notesArray();
    const updatedNote = {
      id: Date.now().toString(),
      ...note,
      date: new Date().toISOString()
    }
    this.notesArray.set([...prevNotes, updatedNote]);

    return this.httpClient.post('http://localhost:3000/notes', updatedNote)
      .pipe(
        catchError((error => {
          this.notesArray.set(prevNotes);
          return throwError(() => new Error('Failed to add the notes.'));
        }))
      );
  }

  removeNotes(id: string) {
    const prevNotes = this.notesArray();
    this.notesArray.set(this.notesArray().filter(note => note.id !== id));

    return this.httpClient.delete(`http://localhost:3000/notes/${id}`)
      .pipe(
        catchError(error => {
          this.notesArray.set(prevNotes);
          return throwError(() => new Error('Failed to delete notes.'))
        })
      )

  }
}
