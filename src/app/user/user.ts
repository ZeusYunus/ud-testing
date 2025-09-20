import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  user = { name: 'John Doe' };
  isLoggedIn = true;
  data: string | undefined;

  userService = inject(UserService);
  dataServices = inject(DataService);

  constructor() { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataServices.getDetails().then((data) => this.data = data as string);
  }
}
