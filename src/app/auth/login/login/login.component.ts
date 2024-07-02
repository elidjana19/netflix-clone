import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form= new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })



constructor(){

  
}


displayData(){
  alert(
    this.form.value.email + ' | ' + this.form.value.password
  );

}





}
