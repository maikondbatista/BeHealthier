import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InitialReminders } from '../constants/initial-reminders';
import { ReminderModel, SettingsModel } from '../models/Model.module';

@Injectable()
export class StorageService {
  private storage = localStorage;
  private dbName = 'Alerts';
  // settings: SettingsModel;
  constructor() {}
  private SetDefaultAlerts() {
    this.UpdateDatabase(InitialReminders.All);
  }

  private stringify(obj: SettingsModel): string {
    return JSON.stringify(obj);
  }

  private parse(value: string): SettingsModel {
    return JSON.parse(value) as SettingsModel;
  }
  get Settings() {
    return this.parse(this.storage.getItem(this.dbName));
  }
  CheckDatabase() {
    const settings = this.Settings;
    if (!settings || settings.Reminders?.length === 0) {
      this.SetDefaultAlerts();
    }
  }
  public SetReminder(reminder: ReminderModel) {
    const settings = this.Settings;
    if (reminder.id > 0) {
      const index = settings.Reminders.findIndex((s) => s.id === reminder.id);
      settings.Reminders[index] = reminder;
    } else {
      settings.Reminders.push(reminder);
    }
    // temporary method until there's unique key control
    this.UpdateDatabase(settings);

    ///IMPLEMENTAR: TROCAR O DIV POR DOCUMENT E SEGUIR
    let event = new CustomEvent('reminderHasChanged', reminder as any);

    document.dispatchEvent(event);

    // document.dispatchEvent(
    //   new CustomEvent('funcDoRequest', {
    //     detail: { task: 'dir' },
    //   })
    // );
  }
  UpdateDatabase(settings: SettingsModel) {
    settings.Reminders.map((val, index) => {
      val.id = index + 1; // unique key control
    });
    this.storage.setItem(this.dbName, this.stringify(settings));
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
