chrome.runtime.onInstalled.addListener(()=>{
      console.log("service worker installed");
})


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {


            var currentTabIndex = sender.tab.index;
             chrome.tabs.query({}, function(tabs) {
             var nextTabIndex = (currentTabIndex + 1) % tabs.length;
            chrome.tabs.update(tabs[nextTabIndex].id, { active: true });
   
    });
    




})