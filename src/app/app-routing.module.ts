import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: 'manage',
    loadChildren: () =>
      import('./manage/manage.module').then((m) => m.ManageModule),
  },
  {
    path: 'reminder',
    loadChildren: () =>
      import('./reminder/reminder.module').then((m) => m.ReminderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
