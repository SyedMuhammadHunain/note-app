import { Component, input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notes',
  standalone: false,
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {
  noteData = input.required<{
    id: string;
    title: string;
    description: string;
    date: string;
  }>();

  @Output() delete = new EventEmitter<string>();

  onDeleteNote() {
    this.delete.emit(this.noteData().id);
  }
}
