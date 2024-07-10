import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule,  HttpClientModule, MatDialogModule, ToastrModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  loginForm!:FormGroup
  errorMessage: string = '';



constructor(private http:HttpClient, private router:Router, public dialogRef:MatDialogRef<LoginModalComponent>,
public dialog:MatDialog, private authService:AuthService, private toastr:ToastrService
){
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
        this.toastr.success('Successfull Login');
        this.authService.login();
        this.loginForm.reset()
        this.dialogRef.close();  //i close the login modal
         this.router.navigate(['/movies']);
      } else {
        this.toastr.error("Wrong credentials. Check again!")
      }
    }, error => {
      console.error('Login error:', error);
      this.errorMessage = "Something went wrong during login. Please try again later.";
    });

    
}

openRegisterModal(){
  this.dialogRef.close();
  this.dialog.open(RegisterModalComponent,{
   disableClose:true,
 })
 
}




}
