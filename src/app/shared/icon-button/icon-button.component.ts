import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: false,
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent {
  customClass = input.required<string>();
}
