import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InitialReminders } from '../shared/constants/initial-reminders';
import { UrlConstant } from '../shared/constants/urls.contant';
import { SettingsModel, ReminderModel } from '../shared/models/Model.module';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  Title = 'Be Healthier';
  settings = InitialReminders.All;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  newReminder() {
    const url = `../${UrlConstant.ReminderUrl}`;
    this.router.navigate([url], { relativeTo: this.route });
  }
}
