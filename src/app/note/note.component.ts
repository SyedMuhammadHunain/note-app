import { Component, input, EventEmitter, Output } from '@angular/core';

import { IconButtonComponent } from '../shared/icon-button/icon-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [IconButtonComponent, CommonModule],
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
