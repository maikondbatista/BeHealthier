import { Component, OnInit } from '@angular/core';
import { UrlConstant } from 'src/app/shared/constants/urls.contant';
import {
  ReminderModel,
  SettingsModel,
} from 'src/app/shared/models/Model.module';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  Title = 'Be Healthier';
  settings: SettingsModel = {
    OnOff: true,
    PopUpReminder: true,
    Reminders: [
      {
        id: 1,
        description: 'Lembrete para piscar',
        value: 7,
        title: 'Piscar',
      } as ReminderModel,
    ],
  };
  constructor() {}

  ngOnInit(): void {}

  testar() {
    chrome.alarms.create('alarm1', { periodInMinutes: 1 });
    // chrome.notifications.clear('notificacao1');
    // chrome.notifications.create('notificacao1', {
    //   message: 'olá, sou uma notificação!',
    //   title: 'titulo',
    //   iconUrl: '../favicon.ico',
    //   type: 'basic',
    // });

    // this.bsModalRef = this.modalService.show(ModalContentComponent);
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
  manageReminders() {
    const url = `${UrlConstant.IndexBaseUrl}${UrlConstant.ManageSettingsUrl}`;
    chrome.tabs.create({ url });
  }

  newReminder() {
    const url = `${UrlConstant.IndexBaseUrl}${UrlConstant.ReminderUrl}`;
    chrome.tabs.create({ url });
  }
}
