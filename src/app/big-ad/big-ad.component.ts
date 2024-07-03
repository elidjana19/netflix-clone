import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-big-ad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-ad.component.html',
  styleUrl: './big-ad.component.css'
})
export class BigAdComponent {

  constructor(private sanitizer:DomSanitizer){}
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/r_pUE7OcN8w?autoplay=1&mute=1&loop=1&controls=0`)


}
