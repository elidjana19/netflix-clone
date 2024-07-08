import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../authModal/login-modal/login-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public dialog:MatDialog){

  }

  openLoginModal(){
    this.dialog.open(LoginModalComponent,{
      disableClose: true,
    
    })

  }

}
