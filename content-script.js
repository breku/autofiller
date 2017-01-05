
function log(text){
	console.log(text);
}


var midMap =
	[
		{
			"names": ["pesel"],
			"values": ["96080701155","478585036"]
		},
		{
	        "names": ["imie","name"],
	        "values": ["Jan","Kuba","Jacek"]
	    },
	    {
	        "names": ["seriainumer","numerdowodu","numer_dowodu", "dowod", "idcard"],
	        "values": ["ABI410622","AGM145394","AKW266309"]
	    },
	    {
	        "names": ["rachunek","numerrachunku","numer_rachunku","account"],
	        "values": ["PL97109003813413","RO17409318005209","RO522225089696946566608356730556","3696816720","PL24708197578827"]
	    },
	    {
	        "names": ["regon"],
	        "values": ["698359625","09207986618702","930844867"]
	    },
        {
            "names": ["phone","telephone","telefon"],
            "values": ["+48","123-456-789","123456789"]
        },
		{
		 "names": ["mail"],
		 "values": ["a@a.pl"]
		},
        {
         "names": ["kodpocztowy","postal","kod_pocztowy"],
         "values": ["78-888","88123","11-222"]
        }
	];

var randomValues = ["aaa","123","a@a.pl"];

var invokeEvent = function(element, eventType) {
	$(element).focus();
    var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent(eventType, true, true);
    element.dispatchEvent(changeEvent);
    $(element).blur();
    $(element).focus();
    $(element).blur();
}

function validToFill(textField){
	return !$(textField).next().hasClass('iew-CorrectIcon');
}


function fillValueForTextfield(textField, textFieldValues, valueCounter) {

	if(valueCounter < textFieldValues.length && validToFill(textField)){
		$(textField).val(textFieldValues[valueCounter]);
    	invokeEvent(textField,"change");
    	setTimeout(function(){
    	    if($(textField).hasClass('iew-Error')){
    	        fillValueForTextfield(textField, textFieldValues, valueCounter+1);
    	    }
    	},200);
	}

}

function filledWithPredefinedValues(textField, mid){
	for(var index in midMap){
		for (var j= 0;  j< midMap[index].names.length ; j++) {
			var possibleMidMatch = midMap[index].names[j]
			if(mid.indexOf(possibleMidMatch) != -1 ){
				fillValueForTextfield(textField,midMap[index].values, 0);
				return true;
			}
		}
	}
	return false;

}

function fillVisibleTextfields(){
	var textFields = $('.iew-PageProxyPanelShown input:enabled.gwt-TextBox.iew-TextField');
	log('Found ' + textFields.length + ' visible and enabled textfields.')
	for (var i = 0, len = textFields.length; i < len; i++) {
		var textField = textFields[i];
		var mid = $(textField).attr('mid').toLowerCase();
		if(!filledWithPredefinedValues(textField,mid)){
			fillValueForTextfield(textField,randomValues, 0);
		}
	}
}


fillVisibleTextfields();