import { Injectable } from '@angular/core';
import { ReminderModel } from '../../models/model.module';

@Injectable({
  providedIn: 'root',
})
export class Frequency {
  
}

export function GetNextInterval(config: ReminderModel) {
  let now = new Date();
  // if (!config.remindAt) {
  config.remindAt = now;
  // config.remindAt = new Date(config.remindAt);
  config.remindAt.setMinutes(config.remindAt.getMinutes() + config.interval);
  return config;
}
