import { Component } from '@angular/core';
import { ListenNow } from "./listen-now/listen-now";
import { Trajectory } from "./trajectory/trajectory";

@Component({
  selector: 'app-about',
  imports: [ListenNow, Trajectory],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
