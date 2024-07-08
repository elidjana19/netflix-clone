import { Component, Input } from '@angular/core';

import { QrcodeService } from '../services/qrcode.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailComponent } from '../movies/movie-detail/movie-detail/movie-detail.component';
import { QRCodeModule } from 'angularx-qrcode';
@Component({
  selector: 'app-share',
  standalone: true,
  imports: [CommonModule, MovieDetailComponent, QRCodeModule],
  templateUrl: './share.component.html',
  styleUrl: './share.component.css'
})
export class ShareComponent {

  @Input() movieId!: string;
  qrData!: string; //


  constructor(private dialog:MatDialog){
   
  }


  ngOnChanges() {
    this.qrData = `movie-${this.movieId}`;
  }

  openMovieDetails() {
    this.dialog.open(MovieDetailComponent, {
      data: { movieId: this.movieId },
      width: '600px' 
    });
  }

}
