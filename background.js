chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "NEW") {
        console.log("new video detected");
    }
});