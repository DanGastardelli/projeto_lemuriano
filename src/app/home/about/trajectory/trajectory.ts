import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Slide {
  image: string;
  key: string;
  extraImage?: string;
}

@Component({
  selector: 'app-trajectory',
  imports: [TranslateModule],
  templateUrl: './trajectory.html',
  styleUrl: './trajectory.scss',
})

export class Trajectory implements OnInit, OnDestroy {

  slides: Slide[] = [
    {
      image: 'images/slide1.jpg',
      key: 'slide1'
    },
    {
      image: 'images/slide2.jpg',
      key: 'slide2'
    },
    {
      image: 'images/slide3.jpg',
      key: 'slide3',
      extraImage: 'images/slide32.jpg'
    },
    {
      image: 'images/slide4.jpg',
      key: 'slide4',
    },
    {
      image: 'images/slide5.jpg',
      key: 'slide5',
      extraImage: 'images/slide52.jpg'
    },
    {
      image: 'images/slide6.jpg',
      key: 'slide6',
      extraImage: 'images/slide62.jpg'
    },
    {
      image: 'images/slide7.jpg',
      key: 'slide7',
    },
    {
      image: 'images/slide8.jpg',
      key: 'slide8',
    },
    {
      image: 'images/slide9.jpg',
      key: 'slide9',
    },
    {
      image: 'images/slide10.jpg',
      key: 'slide10',
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoPlay();
  }
  
  ngOnDestroy() {
    this.stopAutoPlay();
  }
  
  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.next(false);
    }, 5000);
  }
  
  stopAutoPlay() {
    clearInterval(this.intervalId);
  }
  
  restartAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
  
  next(manual: boolean = true) {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  
    if (manual) {
      this.restartAutoPlay();
    }
  }
  
  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  
    this.restartAutoPlay();
  }
  
  goTo(index: number) {
    this.currentIndex = index;
    this.restartAutoPlay();
  }

}
