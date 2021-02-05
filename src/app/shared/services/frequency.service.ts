import { ReminderModel } from '../models/Model.module';

// function replicated at background.js temporarily
export function GetNextInterval(config: ReminderModel) {
  let now = new Date();
  // if (!config.remindAt) {
  config.remindAt = now;
  // config.remindAt = new Date(config.remindAt);
  config.remindAt.setMinutes(config.remindAt.getMinutes() + config.interval);
  return config;
}
