import { ReminderModel } from './Reminder.model';

export interface SettingsModel {
  OnOff: boolean; // true - on; false - off
  PopUpReminder: boolean; // true - will pop up on browser window; false - will group reminder on extension icon
  Reminders: ReminderModel[];
}
