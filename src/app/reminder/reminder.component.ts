import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../shared/constants/urls.contant';
import { ReminderModel } from '../shared/models/Model.module';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent implements OnInit {
  value = 1;
  reminder = {
    id: 1,
    description: 'Lembrete para piscar',
    value: 7,
    title: 'Piscar',
  } as ReminderModel;
  constructor(public location: Location) {}

  ngOnInit(): void {}

  get urlConstant() {
    return UrlConstant;
  }

  teste() {
    console.log(this.location.getState());
    console.log(window.history.length);
    this.location.back();
  }
  get thereIsPreviousPage() {
    return window.history.length > 1;
  }
}
