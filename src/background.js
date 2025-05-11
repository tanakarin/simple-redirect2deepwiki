browser.browserAction.onClicked.addListener((tab) => {
  const currentUrl = tab.url;
  let newUrl;

  if (currentUrl.includes('github.com')) {
    newUrl = currentUrl.replace('github.com', 'deepwiki.com');
  } else if (currentUrl.includes('deepwiki.com')) {
    newUrl = currentUrl.replace('deepwiki.com', 'github.com');
  }

  if (newUrl) {
    browser.tabs.update(tab.id, { url: newUrl });
  }
}); 