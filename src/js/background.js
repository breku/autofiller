

chrome.commands.onCommand.addListener(function(command){
    chrome.tabs.executeScript(null, {file: "lib/jquery-3.1.1.min.js", allFrames: true});
    chrome.tabs.executeScript(null, {file: "src/js/browser-util.js"});
    chrome.tabs.executeScript(null, {file: "src/js/forms.js"});
    chrome.tabs.executeScript(null, {file: "src/js/autofiller.js"});
    chrome.tabs.executeScript(null, {file: "src/js/main.js"});
    chrome.tabs.executeScript(null, {file: "src/js/entrypoint.js"});
})