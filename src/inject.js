chrome.extension.sendMessage({}, function (response) {
  //code to initialize my extension
});

//code to send message to open notification. This will eventually move into my extension logic
chrome.runtime.sendMessage({
  type: "notification",
  options: {
    type: "basic",
    iconUrl: chrome.extension.getURL("icon128.png"),
    title: "Test",
    message: "Test",
  },
});
