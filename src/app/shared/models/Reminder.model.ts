export interface ReminderModel {
  id: number;
  title: string; // short name shown on main screen
  description: string;
  value: number; // value in minutes
  onOff?: boolean; // on/off reminder
  icon: string;
  PopUpReminder?: boolean; // true - will pop up on OS; false - will group reminder on extension icon
}
