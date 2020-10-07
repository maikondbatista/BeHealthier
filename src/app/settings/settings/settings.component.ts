import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SettingsModel } from 'src/app/shared/shared/models/model.module';
import { ReminderModel } from 'src/app/shared/shared/models/Reminder.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  Title = 'Be Healthier';
  bsModalRef: BsModalRef;
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
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  testar() {
    chrome.notifications.clear('notificacao1');
    chrome.notifications.create('notificacao1', {
      message: 'olá, sou uma notificação!',
      title: 'titulo',
      iconUrl: '../favicon.ico',
      type: 'basic',
    });

    // this.bsModalRef = this.modalService.show(ModalContentComponent);
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
}
