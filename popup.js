function click(e) {
	chrome.tabs.executeScript(null, { file: "jquery-3.1.1.min.js" , allFrames: true });
	chrome.tabs.executeScript(null, { file: "typed.min.js" });
	chrome.tabs.executeScript(null, { file: "content-script.js" });

	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
	$('.fillall').off("click");
	$('.fillall').click(function(){
		click();
	});
});
