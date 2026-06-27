import { Component, OnDestroy, OnInit } from '@angular/core';

interface Slide {
  image: string;
  title: string;
  description: string;
  extraImage?: string;
}

@Component({
  selector: 'app-trajectory',
  imports: [],
  templateUrl: './trajectory.html',
  styleUrl: './trajectory.scss',
})

export class Trajectory implements OnInit, OnDestroy {

  slides: Slide[] = [
    {
      image: 'images/slide1.jpg',
      title: 'Show Soberano Itaipava',
      description: 'O show no Soberano Itaipava reforçou a presença do Lemuriano nos palcos, levando ao público uma apresentação sensível que une música e poesia.'
    },
    {
      image: 'images/slide2.jpg',
      title: 'Show com Hermínio Bello',
      description: 'O show do Lemuriano contou com a participação especial de Hermínio Bello de Carvalho, em um momento marcante ao som da música “Dia Sim, Dia Não” composta pelos dois músicos.'
    },
    {
      image: 'images/slide3.jpg',
      title: 'Show Solar de Botafogo',
      description: 'O primeiro show do Lemuriano no Solar de Botafogo, no Rio de Janeiro, em 2023, marcando mais um momento mágico na cidade com uma apresentação autoral.',
      extraImage: 'images/slide32.jpg'
    },
    {
      image: 'images/slide4.jpg',
      title: 'Show Teatro Brigitte Blair',
      description: 'Uma apresentação intimista e mágica que reforçou a identidade autoral do Lemuriano e a conexão com o público.'
    },
    {
      image: 'images/slide5.jpg',
      title: 'Show Cesgranrio',
      description: 'O primeiro show do Lemuriano no Cesgranrio marcou sua estreia nesse espaço cultural, apresentando ao público um repertório autoral que consolidou sua presença em novos palcos.',
      extraImage: 'images/slide52.jpg'
    },
    {
      image: 'images/slide6.jpg',
      title: 'Show Cesgranrio 2',
      description: 'O segundo show no Cesgranrio contou com a participação especial de Tuca Mei, fortalecendo o diálogo artístico e ampliando a experiência do público com o encontro entre vozes e trajetórias.',
      extraImage: 'images/slide62.jpg'
    },
    {
      image: 'images/slide7.jpg',
      title: 'Show Voz e Violão em Minas Gerais',
      description: 'Show feito para a Inauguração da estação ferroviária da cidade de São Sebastião do Rio Verde em Minas Gerais.'
    },
    {
      image: 'images/slide8.jpg',
      title: 'Centro da Música Carioca',
      description: 'Show no Centro da Música Carioca, com uma participação especial de Tuca Mei, marcando um momento especial na trajetória do Lemuriano.'
    },
    {
      image: 'images/slide9.jpg',
      title: 'Sesc Rosinha de Valença',
      description: 'Show no Sesc Rosinha de Valença, marcando a estreia do Lemuriano em uma unidade Sesc, com banda completa no palco.'
    },
    {
      image: 'images/slide10.jpg',
      title: 'Centro Cultural Cazuza',
      description: 'Show em Valença, em Outubro de 2025 com participação especial de Tuca Mei.'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

}
