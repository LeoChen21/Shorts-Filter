function detectNewShortsVideos() {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        console.log(tab.url, changeInfo.status === 'complete');
        if (changeInfo.status === 'complete') {
            const url = new URL(tab.url);
            const videoId = url.pathname.split("/")[2]; // Extract video ID from the URL

            chrome.tabs.sendMessage(tabId, {
                type: "NEW",
                videoId: videoId,
            });
            console.log("background.js detected new video.");
        }
    });
}

// Start detecting new Shorts videos
detectNewShortsVideos();