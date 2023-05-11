import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  nextId: number = 0;
  currentUser: User = {user_id: -1, user: '', password: ''};

  constructor(private http: HttpClient) { }

  getNextId() {
    return this.nextId++;
  }

  getUsers() {
    return this.http.get<User[]>('https://shoppinginfo-4c4b6-default-rtdb.firebaseio.com/' + 'user.json')
    .pipe(map(responseData => {
      const userArray: User[] = [];
      for(const key in responseData) {
        userArray.push(responseData[key]);
      }
      return userArray;
      })
    );
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setUser(newUser: User) {
    this.currentUser = newUser;
  }

  addUser(newUser: User) {
    return this.http.post('https://shoppinginfo-4c4b6-default-rtdb.firebaseio.com/' + 'user.json', newUser);
  }
}
