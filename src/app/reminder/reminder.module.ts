import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReminderRoutingModule } from './reminder-routing.module';
import { ReminderComponent } from './reminder.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ReminderComponent],
  imports: [ReminderRoutingModule, SharedModule.forRoot()],
})
export class ReminderModule {}
