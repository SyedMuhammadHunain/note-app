import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  loadNotes(): {
    id: string;
    title: string;
    description: string;
    date: string;
  }[] {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  }

  saveNotes(
    notes: { id: string; title: string; description: string; date: string }[]
  ) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}
