import { Injectable } from '@angular/core';
import { DefaultIcon } from '../constants/default.icon';
import { InitialReminders } from '../constants/initial-reminders';
import { ReminderModel, SettingsModel } from '../models/Model.module';
import { GetNextInterval } from './frequency.service';

@Injectable()
export class StorageService {
  private storage = localStorage;

  // settings: SettingsModel;
  constructor() {}
  private SetDefaultAlerts() {
    this.UpdateDatabase(InitialReminders);
  }

  private stringify(obj: SettingsModel): string {
    return JSON.stringify(obj);
  }

  private parse(value: string): SettingsModel {
    return JSON.parse(value) as SettingsModel;
  }
  get Settings() {
    return this.parse(this.storage.getItem(dbName));
  }
  CheckDatabase() {
    const settings = this.Settings;
    if (!settings || settings.Reminders?.length === 0) {
      this.SetDefaultAlerts();
    }
  }
  public SetReminder(reminder: ReminderModel) {
    const settings = this.Settings;
    if (reminder.icon) {
      reminder.icon = DefaultIcon;
    }
    reminder = GetNextInterval(reminder);
    if (reminder.id > 0) {
      const index = settings.Reminders.findIndex((s) => s.id === reminder.id);
      settings.Reminders[index] = reminder;
    } else {
      settings.Reminders.push(reminder);
    }

    // temporary method until there's unique key control
    this.UpdateDatabase(settings);
  }

  DeleteReminder(reminder: ReminderModel) {
    const settings = this.Settings;
    let index = settings.Reminders.findIndex((s) => s.id === reminder.id);
    if (index > -1) {
      settings.Reminders.splice(index, 1);
    }
    this.UpdateDatabase(settings);
  }

  UpdateDatabase(settings: SettingsModel) {
    settings.Reminders.map((val, index) => {
      val.id = index + 1; // unique key control
    });
    this.storage.setItem(dbName, this.stringify(settings));
  }
  public GetReminderById(id: number): ReminderModel {
    return this.Settings.Reminders.find((s) => s.id === id);
  }
}

export function LoadDatabase(storageService: StorageService) {
  return () => storageService.CheckDatabase();
}

// document.addEventListener(
//   'reminderHasChanged',
//   function (e) {
//     // change here Event to CustomEvent
//     console.log(e);
//   }.bind(this)
// );

export const dbName = 'Settings';
