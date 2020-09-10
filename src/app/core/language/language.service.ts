import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  getLanguage(): string {
    const language = this.getBrowserLanguage();

    return language && language.toLowerCase();
  }
  setLanguage(language: string): void {
    if (!language) {
      return;
    }
  }

  getBrowserLanguage(): string {
    const language = navigator.language;
    const shortLanguage = this.getShortLanguage(language);

    return language;
  }
  getShortLanguage(language: string): string {
    return language.toLowerCase().substring(0, 2);
  }
}
