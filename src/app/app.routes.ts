import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./teste/teste').then(
        (m) => m.Teste
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
