import { Component, EventEmitter, Output } from '@angular/core';

import { IconButtonComponent } from '../shared/icon-button/icon-button.component';

@Component({
  selector: 'app-header',
  imports: [IconButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',]
})
export class HeaderComponent {
  @Output() plusClick = new EventEmitter();
  onPlusClick() {
    this.plusClick.emit();
  }
}
