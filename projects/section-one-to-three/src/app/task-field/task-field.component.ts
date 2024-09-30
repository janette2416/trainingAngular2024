import { Component, input, signal, output, computed } from '@angular/core';
import { User_Listing } from '../userListing';
import { UserData } from '../user-list/user-list.model';

@Component({
  selector: 'app-task-field',
  standalone: true,
  imports: [],
  templateUrl: './task-field.component.html',
  styleUrl: './task-field.component.scss'
})
export class TaskFieldComponent {
  
  userName = input.required<string | undefined>(); //@Input() userName ?: string; //@Input() userName : string | undefined;
  // users = signal<UserData[]>(User_Listing);

  // selectedUser = computed(() => {
  //   return this.users().find(user => user.id === this.selectedUserId()); 
  // });

}
