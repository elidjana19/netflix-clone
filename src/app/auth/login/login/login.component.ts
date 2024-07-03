import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!:FormGroup
  errorMessage: string = '';

constructor(private http:HttpClient, private router:Router){
}

ngOnInit():void{
  this.loginForm= new FormGroup({
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required)
  })
}
login() {
  this.http.get<any>('http://localhost:3000/users')
    .subscribe(res => {
      console.log('Users from server:', res);
      const user = res.find((u: any) => {
        return u.email === this.loginForm.value.email && u.password === this.loginForm.value.password;
      });

      if (user) {
        alert("Login successful.");
        localStorage.setItem('token', res.token);
        this.loginForm.reset()
        this.router.navigate(['movies']);
      } else {
        alert ("User not found. Please check your credentials.")
      }
    }, error => {
      console.error('Login error:', error);
      this.errorMessage = "Something went wrong during login. Please try again later.";
    });
}





}
