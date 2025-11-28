export interface ReminderModel {
  id: number;
  title: string; // short name shown on main screen
  description: string;
  interval: number; // value in minutes
  On: boolean; // on/off reminder
  icon: string;
  PopUpReminder?: boolean; // true - will pop up on OS; false - will group reminder on extension icon
  remindAt: Date; // next remind date/time
}
