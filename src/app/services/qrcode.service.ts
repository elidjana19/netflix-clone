import { Injectable } from '@angular/core';
import QRCode from 'qrcode';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  constructor() { }

  async generateQRCode(text: string): Promise<string> {
    try {
      const dataUrl = await QRCode.toDataURL(text);
      return dataUrl;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
