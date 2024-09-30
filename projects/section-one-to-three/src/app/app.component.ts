import { Component, computed, input, signal  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { TaskFieldComponent } from './task-field/task-field.component';

import { User_Listing } from './userListing';
import { NgFor } from '@angular/common';

interface UserData {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,UserListComponent,TaskFieldComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sectionOneToThree';

  users = signal<UserData[]>(User_Listing);
  selectedUserId = signal<string>('');

  selectedUser = computed(() => {
    const userId = this.selectedUserId();
    return this.users().find(user => user.id === userId); 
  }); //get selectedUser () { return this.users.find((users) => users.id === this.selectedUserId)!; }


  onSelectUser(id: string) {
    this.selectedUserId.set(id); // Set the new user ID
  }
}
