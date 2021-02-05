import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultIcon } from '../shared/constants/default.icon';
import { UrlConstant } from '../shared/constants/urls.contant';
import { ReminderModel } from '../shared/models/Model.module';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent implements OnInit {
  value = 1;
  reminder = {
    id: 0,
    description: 'Lembrete para piscar',
    interval: 7,
    title: 'Piscar',
    On: true,
  } as ReminderModel;
  constructor(
    public location: Location,
    private storageService: StorageService,
    private router: Router
  ) {
    let reminder = router.getCurrentNavigation()?.extras
      ?.state as ReminderModel;
    if (reminder) {
      reminder.icon;
      this.reminder = reminder;
    }
  }

  ngOnInit(): void {}

  get urlConstant() {
    return UrlConstant;
  }

  goBack() {
    this.location.back();
  }
  get thereIsPreviousPage() {
    return window.history.length > 1;
  }

  save() {
    this.storageService.SetReminder(this.reminder);
    this.router.navigate(['../manage']);
  }

  changeListener(evt): void {
    const self = this;
    var tgt = evt.target || window.event.srcElement,
      files = tgt.files;

    if (FileReader && files && files.length) {
      var fr = new FileReader();
      fr.onload = function () {
        self.reminder.icon = fr.result as string;
      };
      fr.readAsDataURL(files[0]);
    }
  }
}
