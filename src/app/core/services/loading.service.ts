import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingService {
  showLoadSubject: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  show() {
    this.showLoadSubject.next(true);
  }

  hide() {
    this.showLoadSubject.next(false);
  }
}
