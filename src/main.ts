import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TAB } from './app/core/providers/tab.provider';
import { environment } from './environments/environment';

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (environment.production) {
    enableProdMode();
  }

  const tab = [...tabs].pop();
  const { id: tabId } = tab;

  // provides the current Tab ID so you can send messages to the content page
  platformBrowserDynamic([{ provide: TAB, useValue: tabId }])
    .bootstrapModule(AppModule)
    .catch((error) => console.error(error));
});
