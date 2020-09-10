import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingInterceptor } from 'src/app/core/Interceptors/loading-interceptor';

const SERVICES = [
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...SERVICES],
    };
  }
}
