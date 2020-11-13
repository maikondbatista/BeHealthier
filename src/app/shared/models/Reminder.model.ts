export interface ReminderModel {
  id: number;
  title: string; // short name shown on main screen
  description: string;
  value: number; // value in minutes
  onOff: boolean;
  icon: string;
}
