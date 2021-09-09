import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean;
  private userName!: string;
  constructor() {
    this.isLoggedIn = false;
  }
  loggedIn(userName: string, password: string) {
    this.isLoggedIn = true;
    this.userName = userName;
    return of(this.isLoggedIn);
  }

  logoutUser(){
    this.isLoggedIn = false;
  }

  isAdminUser():boolean{
    if(this.userName === 'admin'){
      return true;
    }
    return false;
  }

  isUserLoggedIn():boolean{
    return this.isLoggedIn;
  }

}
