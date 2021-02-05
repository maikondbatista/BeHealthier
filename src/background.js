var OriginalDb = {};
var Schedule = {};
var dbName = "Settings";

setInterval(() => {
  let shouldUpdateDatabase = false;
  const db = JSON.parse(localStorage.getItem(this.dbName));
  const now = new Date();
  db?.Reminders.map((item) => {
    if (new Date(item?.remindAt) <= now /* && item.IsDisabled */) {
      shouldUpdateDatabase = true;
      const notificationIdentifier = this.getNotificationIdentifier(item);
      chrome.notifications.clear(notificationIdentifier);
      chrome.notifications.create(notificationIdentifier, {
        message: item.description,
        title: item.title,
        iconUrl: item.icon,
        type: "basic",
      });
      item = GetNextInterval(item);
    }
    return item;
  });
  if (shouldUpdateDatabase) {
    this.UpdateDatabase(db);
  }
}, 1000);

function GetNextInterval(config) {
  let now = new Date();
  // if (!config.remindAt) {
  config.remindAt = now;
  // }
  // config.remindAt = new Date(config.remindAt);
  config.remindAt.setMinutes(config.remindAt.getMinutes() + config.interval);
  return config;
}

function getNotificationIdentifier(reminder) {
  return reminder.title + reminder.id;
}

function UpdateDatabase(settings) {
  localStorage.setItem(dbName, JSON.stringify(settings));
}
