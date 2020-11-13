import { ReminderModel, SettingsModel } from '../models/Model.module';

export class MockConstant {
  static Settings: SettingsModel = {
    OnOff: true,
    PopUpReminder: true,
    Reminders: [
      {
        id: 1,
        description: 'Que tal dar uma pausa para piscar?',
        value: 7,
        title: 'Piscar',
      } as ReminderModel,
      {
        id: 1,
        description: 'Que tal dar uma pausa para tomar água?',
        value: 120,
        title: 'Água',
      } as ReminderModel,
      {
        id: 1,
        description: 'Que tal dar uma pausa para corrigir a postura?',
        value: 30,
        title: 'Postura',
      } as ReminderModel,
      {
        id: 1,
        description: 'Que tal dar uma pausa para se esticar um pouco?',
        value: 120,
        title: 'Movimentar-se',
      } as ReminderModel,
    ],
  };
}
