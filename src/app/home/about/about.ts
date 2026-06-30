import { Component } from '@angular/core';
import { ListenNow } from "./listen-now/listen-now";
import { Trajectory } from "./trajectory/trajectory";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [ListenNow, Trajectory, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
