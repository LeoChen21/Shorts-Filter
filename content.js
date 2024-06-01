// Function to detect new Shorts video elements
function detectNewShortsVideos() {
    chrome.tabs.onUpdated.addListener((tabId, tab) => {
        if (tab.url && tab.url.includes("youtube.com/shorts")) {
      
          chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParameters.get("v"),
          });
        }
      });
}

// Start detecting new Shorts videos
detectNewShortsVideos();