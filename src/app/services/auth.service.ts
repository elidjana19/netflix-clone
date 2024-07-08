import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  isLoggedIn=false

  login() {
     this.isLoggedIn=true
    }


  isUserLoggedIn(): boolean {
      return this.isLoggedIn === true;
  }

  logout() {
      this.isLoggedIn=false
  }


}
