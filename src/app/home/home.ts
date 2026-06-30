import { Component } from '@angular/core';
import { About } from "./about/about";
import { Partnerships } from "./partnerships/partnerships";
import { PressKit } from "./press-kit/press-kit";
import { Header } from "./header/header";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSwitcher } from '../shared/language-switcher/language-switcher';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [About, Partnerships, PressKit, Header, TranslateModule, LanguageSwitcher],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private translate: TranslateService) {
    this.translate.use('pt-BR');
  }
}
