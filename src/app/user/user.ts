import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  user = { name: 'John Doe' };
  isLoggedIn = true;
  userService = inject(UserService);

  constructor() { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
