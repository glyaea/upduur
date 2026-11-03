chrome.webNavigation.onBeforeNavigate.addListener(
	({ tabId, frameId, url }) => {
		if (!frameId && new URL(url).hostname.startsWith("_")) {
			chrome.tabs.update(tabId, { url: url.replaceAll("_", "") });
		}
	}
);
