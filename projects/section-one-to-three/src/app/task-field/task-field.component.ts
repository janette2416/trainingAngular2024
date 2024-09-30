import { Component, input, signal, output } from '@angular/core';

@Component({
  selector: 'app-task-field',
  standalone: true,
  imports: [],
  templateUrl: './task-field.component.html',
  styleUrl: './task-field.component.scss'
})
export class TaskFieldComponent {
  userName = input<string>(); //@Input() userName ?: string; //@Input() userName : string | undefined;

}
