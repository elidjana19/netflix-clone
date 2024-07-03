import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!:FormGroup

  constructor(private http:HttpClient,
           private router:Router
  ){}

  ngOnInit():void{
    this.registerForm= new FormGroup({
      name:new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      number:new FormControl('', Validators.required)
    })
  }

  // POST method 
  register(){
    this.http.post<any>('http://localhost:3000/users',this.registerForm.value)
    .subscribe(res=>{
      alert("register success")
      this.registerForm.reset()
      this.router.navigate(['login'])
    }, error=>{
      alert("not registered")
    })

  }
}
