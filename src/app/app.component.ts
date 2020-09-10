import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private loaderService: LoadingService) {}
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.loaderService.showLoadSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.isLoading = data;
      });
  }
}
