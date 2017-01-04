// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




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

//  var divs = document.querySelectorAll('.fillall');
//	$(divs).off();
//  for (var i = 0; i < divs.length; i++) {
//    divs[i].addEventListener('click', click);
//  }


});
