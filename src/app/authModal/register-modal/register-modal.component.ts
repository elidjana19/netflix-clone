import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, HttpClientModule, CommonModule, MatDialogModule, ToastrModule],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css'
})
export class RegisterModalComponent {

  registerForm!:FormGroup

  constructor(private http:HttpClient,
           private router:Router, public dialogRef:MatDialogRef<RegisterModalComponent>, public dialog:MatDialog,
           private toastr:ToastrService
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
      this.toastr.success("Registration is done successfully")
      this.registerForm.reset()
      this.dialogRef.close();
      this.openLoginModal()
    }, error=>{
      this.toastr.error("Registration not done !")
    })

  }

  openLoginModal(){
    this.dialogRef.close()
    this.dialog.open(LoginModalComponent,{
      disableClose:true
    })
  }


}
