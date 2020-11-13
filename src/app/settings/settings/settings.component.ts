import { Component, OnInit } from '@angular/core';
import { MockConstant } from 'src/app/shared/constants/mock.constant';
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
  settings = MockConstant.Settings;
  constructor() {}

  ngOnInit(): void {
    chrome.alarms.create('alarm1', { periodInMinutes: 1 });
  }

  testar() {
    chrome.alarms.create('alarm1', { periodInMinutes: 1 });
    // chrome.notifications.clear('notificacao1');
    // chrome.notifications.create('notificacao1', {
    //   message: 'Que tal dar uma pausa para se esticar um pouco?',
    //   title: 'titulo',
    //   iconUrl: '../assets/stretch-icon.png',
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
