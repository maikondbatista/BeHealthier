import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings').then(
        (m) => m.Settings
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
