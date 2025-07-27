import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-note',
  standalone: false,
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css'],
})
export class NewNoteComponent {
  data = {
    title: '',
    description: '',
  };

  @Output() onClose = new EventEmitter();

  onFormSubmit() {
    !this.data.title || !this.data.description
      ? alert('Please enter a title and description before submitting!')
      : this.onClose.emit(this.data); // emits data
  }

  onCloseForm() {
    this.onClose.emit(); // emits signal only
  }
}
