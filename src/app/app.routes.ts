import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
  },
  // {
  //   path: 'manage',
  //   loadChildren: () =>
  //     import('./manage/manage.component').then((m) => m.ManageComponent),
  // },
  // {
  //   path: 'reminder',
  //   loadChildren: () =>
  //     import('./reminder/reminder.component').then((m) => m.ReminderComponent),
  // },
];
