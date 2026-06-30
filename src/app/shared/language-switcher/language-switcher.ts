import {
  Component,
  ElementRef,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {

  private platformId = inject(PLATFORM_ID);
  private el = inject(ElementRef);

  dropdownOpen = false;

  availableLangs = [
    { code: 'ca', label: 'Català' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'it', label: 'Italiano' },
    { code: 'pt-BR', label: 'Português' }
  ];

  constructor(private translate: TranslateService) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  changeLang(lang: string) {
    this.translate.use(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }

    this.dropdownOpen = false;
  }

  currentLang() {
    return this.translate.currentLang;
  }
  
}