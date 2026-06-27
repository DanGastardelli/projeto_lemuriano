import { Component } from '@angular/core';
import { About } from "./about/about";
import { Partnerships } from "./partnerships/partnerships";
import { PressKit } from "./press-kit/press-kit";
import { Header } from "./header/header";

@Component({
  selector: 'app-home',
  imports: [About, Partnerships, PressKit, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
