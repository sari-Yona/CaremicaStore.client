import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string | undefined
  @Input() css: string | undefined
  @Input() icon: string | undefined
  @Output() event = new EventEmitter()

  select() {
    this.event.emit()
  }

}
