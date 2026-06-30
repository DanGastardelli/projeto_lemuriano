import { Component } from '@angular/core';
import { LanguageSwitcher } from "./../../shared/language-switcher/language-switcher";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [LanguageSwitcher, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
