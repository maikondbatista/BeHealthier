import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapSliderModule,
    ModalModule.forRoot(),
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapSliderModule,
    ModalModule,
  ],
  providers: [StorageService],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
