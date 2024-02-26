document.addEventListener('keydown', function(event) {
    if (event.key === 'Space' || event.key == " ") {
      event.preventDefault()

      
      chrome.runtime.sendMessage({ action: 'loopTabs' });

     
    }
  });
  