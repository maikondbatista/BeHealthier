import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageModule } from './core/language/language.module';
import { SharedModule } from './shared/shared.module';
import {
  LoadDatabase,
  StorageService,
} from './shared/services/storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LanguageModule,
    SharedModule.forRoot(),
  ],
  exports: [SharedModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: LoadDatabase,
      deps: [StorageService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
