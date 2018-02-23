chrome.commands.onCommand.addListener(function(command){
        console.log(command);
    	chrome.tabs.executeScript(null, { file: "jquery-3.1.1.min.js" , allFrames: true });
    	chrome.tabs.executeScript(null, { file: "typed.min.js" });
        chrome.tabs.executeScript(null, { file: "browser-util.js" });
        chrome.tabs.executeScript(null, { file: "forms.js" });
        chrome.tabs.executeScript(null, { file: "content-script.js" });
})
