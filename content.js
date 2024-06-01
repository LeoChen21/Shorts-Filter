chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "NEW") {
        console.log("New YouTube Shorts video detected:", message.videoId);
        // Optionally, you could perform more actions here
    }
});