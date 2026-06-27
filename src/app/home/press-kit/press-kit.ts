import { Component } from '@angular/core';

@Component({
  selector: 'app-press-kit',
  imports: [],
  templateUrl: './press-kit.html',
  styleUrl: './press-kit.scss',
})
export class PressKit {
  
  pdfs = [
    {
      nome: 'Lemuriano_release_RosadosVentos',
      url: 'files/Lemuriano_release_RosadosVentos.pdf',
      thumb: 'images/pdf_thumb.png'
    }
  ];

  openPDF(pathRelative: string) {
    const url = `${window.location.origin}/${pathRelative}`;
    window.open(url, '_blank');
  }
}
