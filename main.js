chrome.webNavigation.onBeforeNavigate.addListener(
	({ tabId, frameId, url }) => {
		if (!frameId && url.includes("_")) {
			chrome.tabs.update(tabId, { url: url.replaceAll("_", "") });
		}
	}
);
