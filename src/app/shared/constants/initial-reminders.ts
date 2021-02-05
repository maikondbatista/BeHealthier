import { ReminderModel, SettingsModel } from '../models/Model.module';
import { DefaultIcon } from './default.icon';

export var InitialReminders: SettingsModel = {
  Reminders: [
    {
      id: 1,
      description: 'Que tal dar uma pausa para piscar?',
      interval: 7,
      title: 'Piscar',
      On: true,
      remindAt: new Date(),
      icon: DefaultIcon,
    } as ReminderModel,
    {
      id: 2,
      description: 'Que tal dar uma pausa para tomar água?',
      interval: 120,
      title: 'Água',
      On: true,
      remindAt: new Date(),
      icon: DefaultIcon,
    } as ReminderModel,
    {
      id: 3,
      description: 'Que tal dar uma pausa para corrigir a postura?',
      interval: 30,
      title: 'Postura',
      On: true,
      remindAt: new Date(),
      icon: DefaultIcon,
    } as ReminderModel,
    {
      id: 4,
      description: 'Que tal dar uma pausa para se esticar um pouco?',
      interval: 120,
      title: 'Movimentar-se',
      On: true,
      remindAt: new Date(),
      icon: DefaultIcon,
    } as ReminderModel,
  ],
};
