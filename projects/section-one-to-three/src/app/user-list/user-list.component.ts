import { Component, computed, signal, input, output, EventEmitter, Input } from '@angular/core'; //import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserData } from './user-list.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html', 
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  userData = input.required<UserData>();// @Input({required: true}) user: { userId !: string; userImage !: string; userName !: string;}

  select = output<string>(); //@Output () select = new EventEmitter<string>();

  imagePath = computed( () => { 
    return 'assets/userImages/' + this.userData().avatar; 
  }); //get imagePath () { return 'assets/userImages/' + this.userImage; }

  onUserSelection() {
    this.select.emit(this.userData().id); //this.select.emit(this.userId);
    console.log(this.userData().name);
  }

}
