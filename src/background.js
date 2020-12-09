// async function install(timer, settingsManager) {
//     settings = await settingsManager.get();
//     settingsManager.on('change', async newSettings => {
//       settings = newSettings;
//       await setAlarm(settings);
//     });
//     chrome.alarms.onAlarm.addListener(alarm => onAlarm(alarm, timer));
//     await setAlarm(settings);
//   }

//   Alarms.install(timer, settingsManager);
//   chrome.browserAction.onClicked.addListener(() => {
//     if (timer.isRunning) {
//       timer.pause();
//     } else if (timer.isPaused) {
//       timer.resume();
//     } else {
//       timer.start();
//     }
//   });

//   async function setAlarm(settings) {
//     await mutex.exclusive(async () => {
//       await Chrome.alarms.clearAll();

//       let time = settings.autostart && settings.autostart.time;
//       if (!time) {
//         return;
//       }

//       const now = new Date();

//       let startAt = new Date();
//       startAt.setHours(...time.split(':'), 0, 0);
//       if (startAt <= now) {
//         // The trigger is in the past. Set it for tomorrow instead.
//         startAt.setDate(startAt.getDate() + 1);
//       }

//       Chrome.alarms.create('autostart', { when: +startAt, });
//     });
//   }

//   async function install(timer, settingsManager) {
//     settings = await settingsManager.get();
//     settingsManager.on('change', async newSettings => {
//       settings = newSettings;
//       await setAlarm(settings);
//     });
//     chrome.alarms.onAlarm.addListener(alarm => onAlarm(alarm, timer));
//     await setAlarm(settings);
//   }

//   async function setAlarm(settings) {
//     await mutex.exclusive(async () => {
//       await Chrome.alarms.clearAll();

//       let time = settings.autostart && settings.autostart.time;
//       if (!time) {
//         return;
//       }

//       const now = new Date();

//       let startAt = new Date();
//       startAt.setHours(...time.split(':'), 0, 0);
//       if (startAt <= now) {
//         // The trigger is in the past. Set it for tomorrow instead.
//         startAt.setDate(startAt.getDate() + 1);
//       }

//       Chrome.alarms.create('autostart', { when: +startAt, });
//     });

//   }

// chrome.extension.onMessage.addListener(function (
//   myMessage,
//   sender,
//   sendResponse
// ) {
//   //do something that only the extension has privileges here
//   return true;
// });

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.type == "worktimer-notification")
//     chrome.notifications.create('worktimer-notification', request.options, function() { });

//   sendResponse();
// });
var OriginalDb = {};
var Schedule = {};
setInterval(() => {
  // const db = JSON.parse(localStorage.getItem('Alerts'));
  // if(OriginalDb !== db)
  // {
  //   this.findUpdatedAlerts(OriginalDb, db)
  // }

  chrome.notifications.clear("notificacao1");
  chrome.notifications.create("notificacao1", {
    message: "Que tal dar uma pausa para se esticar um pouco?",
    title: "titulo",
    iconUrl:
      "data:image/png;base64,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",
    type: "basic",
  });
}, 1000 * 60);

function findUpdateAlerts(OriginalDb, db) {}
