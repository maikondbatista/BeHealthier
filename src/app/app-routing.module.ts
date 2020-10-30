import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlConstant } from './shared/constants/urls.contant';

const routes: Routes = [
  {
    path: UrlConstant.SettingsUrl,
    pathMatch: 'full',
    loadChildren: () =>
      import('./settings/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: UrlConstant.ManageSettingsUrl,
    loadChildren: () =>
      import('./manage/manage.module').then((m) => m.ManageModule),
  },
  {
    path: UrlConstant.ReminderUrl,
    loadChildren: () =>
      import('./reminder/reminder.module').then((m) => m.ReminderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
