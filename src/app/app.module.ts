import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageModule } from './core/language/language.module';
import { LoadingService } from './core/services/loading.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LanguageModule],
  providers: [LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
