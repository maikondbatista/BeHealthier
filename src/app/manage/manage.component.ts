// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { InitialReminders } from '../shared/constants/initial-reminders';
// import { UrlConstant } from '../shared/constants/urls.contant';
// import { ReminderModel, SettingsModel } from '../shared/models/Model.module';
// import { StorageService } from '../shared/services/storage.service';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-manage',
//   templateUrl: './manage.component.html',
//   styleUrls: ['./manage.component.scss'],
//   imports: [CommonModule, ReactiveFormsModule, FormsModule ],
//   standalone: true
// })
// export class ManageComponent implements OnInit {
//   Title = 'Be Healthier';
//   settings!: SettingsModel;
//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private storageService: StorageService
//   ) {}

//   ngOnInit(): void {
//     this.loadSettings();
//   }
//   loadSettings() {
//     this.settings = this.storageService.Settings;
//   }

//   newReminder() {
//     const url = `../${UrlConstant.ReminderUrl}`;
//     this.router.navigate([url], { relativeTo: this.route });
//   }
//   Update(reminder: ReminderModel) {
//     this.router.navigate(['../reminder'], {
//       state: reminder,
//       relativeTo: this.route,
//     });
//   }

//   Delete(reminder: ReminderModel) {
//     this.storageService.DeleteReminder(reminder);
//     this.loadSettings();
//   }

//   saveReminder(reminder: ReminderModel) {
//     this.storageService.SetReminder(reminder);
//   }
// }
