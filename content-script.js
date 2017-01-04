
function log(text){
	console.log(text);
}

var textFieldValues = ["aaaa","11111","10", "96080701155", "07271214101","67020200603","AJM977446","BX5930092","6636965944","PL47035097377694",
"PL251090957365511087681086789746","251090957365511087681086789746", "AA AA", "123456789","12-555", "77888","478585036", "87996238542736"
];

var invokeEvent = function(element, eventType) {
	$(element).off();
    var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent(eventType, true, true);
    element.dispatchEvent(changeEvent);
}


function fillValueForTextfield(textField, textFieldValues, valueCounter) {

	if(valueCounter < textFieldValues.length){
		$(textField).val(textFieldValues[valueCounter]);
    	invokeEvent(textField,"change");
    	setTimeout(function(){
    	    if($(textField).hasClass('iew-Error')){
    	        fillValueForTextfield(textField, textFieldValues, valueCounter+1);
    	    }
    	},2000);
	}

}

function fillVisibleTextfields(){
	var textFields = $('.iew-PageProxyPanelShown input:enabled.gwt-TextBox.iew-TextField');
	log('Found ' + textFields.length + ' visible and enabled textfields.')
	var valueCounter = 0;
	for (var i = 0, len = textFields.length; i < len; i++) {
		fillValueForTextfield(textFields[i],textFieldValues, valueCounter)
	}
}

fillVisibleTextfields();