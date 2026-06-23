import { Component } from '@angular/core';
import { About } from "./about/about";
import { Partnerships } from "./partnerships/partnerships";
import { PressKit } from "./press-kit/press-kit";

@Component({
  selector: 'app-home',
  imports: [About, Partnerships, PressKit],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
