import { Component, OnInit } from '@angular/core';
import { ReminderModel, SettingsModel } from '../shared/models/model.module';
import { StorageService } from '../shared/services/storage/storage.service';
import { UrlConstant } from '../shared/constants/url.constant';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings implements OnInit{
Title = 'Be Healthier';
  settings!: SettingsModel;
  constructor(private storageService: StorageService) { }

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
