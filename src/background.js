chrome.alarms.onAlarm.addListener(function (alarm) {
  chrome.notifications.clear("notificacao1");
  chrome.notifications.create('notificacao1', {
      message: 'Que tal dar uma pausa para se esticar um pouco?',
      title: 'Movimentar-se',
      iconUrl: '../assets/stretch-icon.png',
      type: 'basic',
    });
});
