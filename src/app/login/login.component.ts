import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList: User[] = [];
  currentUser: User = {user_id: -1, user: '', password: ''};
  newUser: User = {user_id: -1, user: '', password: ''};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.userService.getUsers().subscribe((data) => {
      this.userList = data;
      console.log(data);
      console.log(this.userList[0]);
    });
  }

  login() {
    if(this.userList.find((user) => { return user.user === this.newUser.user && user.password === this.newUser.password})) {
      this.currentUser = this.newUser;
    }
  }

  submit() {
    this.newUser.user_id = this.userService.getNextId();
    this.userService.addUser(this.newUser);
  }
}
