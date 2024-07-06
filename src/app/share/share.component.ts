import { Component, Input } from '@angular/core';

import { QrcodeService } from '../services/qrcode.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './share.component.html',
  styleUrl: './share.component.css'
})
export class ShareComponent {


  @Input() movieLink!: string;
  qrCodeImage!: string;

  constructor(private service:QrcodeService){
   
  }



  async ngOnInit() {
    this.qrCodeImage = await this.service.generateQRCode(this.movieLink);
  }


}
