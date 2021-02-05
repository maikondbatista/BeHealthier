import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UrlConstant } from 'src/app/shared/constants/urls.contant';
import {
  ReminderModel,
  SettingsModel,
} from 'src/app/shared/models/Model.module';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  Title = 'Be Healthier';
  settings: SettingsModel;
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.settings = this.storageService.Settings;
  }

  saveReminder(reminder: ReminderModel) {
    this.storageService.SetReminder(reminder);
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
