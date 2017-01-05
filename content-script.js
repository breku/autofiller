
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
	        "values": ["Jan","Kuba","Jacek", "Maly Jan", "Zbychu"]
	    },
	    {
            "names": ["nazwisko"],
            "values": ["Kowalski"]
        },
        {
            "names": ["ulica","street"],
            "values": ["Naramowicka","Serbska"]
        },
        {
            "names": ["miejscowosc","city","miejsce"],
            "values": ["Warszawa","Szczecin"]
        },
        {
            "names": ["nrmieszkania","numermieszkania","numer_mieszkania","nrdomu","numerdomu","dom","mieszkanie","building","flat"],
            "values": ["1","22"]
        },
	    {
	        "names": ["seriainumer","numerdowodu","numer_dowodu", "dowod", "idcard"],
	        "values": ["ABI410622","AGM145394","AKW266309"]
	    },
	    {
            "names": ["nip"],
            "values": ["7630899425"]
        },
	    {
	        "names": ["rachunek","rachunku","account"],
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
		 "names": ["mail","page3.GesComplexComponent6.GesTextField4"],
		 "values": ["a@a.pl"]
		},
        {
         "names": ["kodpocztowy","postal","kod_pocztowy"],
         "values": ["78-888","88123","11-222"]
        }
	];

var randomValues = ["aaa","123"];

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
    	},300);
	}
}

var invokeEventForCombobox = function(element, eventType) {
    var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent(eventType, true, true);
    document.getElementsByName(element.attr("name"))[0].dispatchEvent(changeEvent);
}

function fillElementSelect(chosenDiv) {

	var select = $($(chosenDiv).parent()).children(':first');
    var firstOption = $(select).find('option').eq(1)[0];
    $(firstOption).attr('selected', 'selected');
    select.val(firstOption.value);

    var selectText = $(chosenDiv).find(".iew-ComboboxText")[0];
    selectText.innerHTML = $(firstOption).text();
    invokeEventForCombobox(select, "change");
    $(select).trigger('chosen:updated');
}



function fillElementRadio(radioGroup) {
	var radios = $(radioGroup).find('input');
	radios[0].click();
    invokeEvent(radioGroup, "change");
}

function fillElementCheckBox(checkbox) {
    if(!checkbox.checked){
        $(checkbox).click();
        invokeEvent(checkbox, "change");
    }
}


function filledWithPredefinedValues(textField, mid){
	for(var index in midMap){
		for (var j= 0;  j< midMap[index].names.length ; j++) {
			var possibleMidMatch = midMap[index].names[j].toLowerCase();
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
	for (var i = 0, len = textFields.length; i < len; i++) {
		var textField = textFields[i];
		var mid = $(textField).attr('mid').toLowerCase();
		if(!filledWithPredefinedValues(textField,mid)){
			fillValueForTextfield(textField,randomValues, 0);
		}
	}
}

function fillVisibleRadioGroups(){
	var radioGroups = $('.iew-PageProxyPanelShown fieldset:visible.iew-RadioButtonGroup');
	for (var i = 0, len = radioGroups.length; i < len; i++) {
		fillElementRadio(radioGroups[i])
	}
}

function fillVisibleCheckboxes(){
	var checkboxes = $('.iew-PageProxyPanelShown input[type=checkbox]:visible');
	for (var i = 0, len = checkboxes.length; i < len; i++) {
		fillElementCheckBox(checkboxes[i])
	}
}

function fillVisibleComboboxes(){
	var comboboxes = $('.iew-PageProxyPanelShown div:visible.chosen-container');
	for (var i = 0, len = comboboxes.length; i < len; i++) {
		fillElementSelect(comboboxes[i])
	}
}

fillVisibleTextfields();
fillVisibleRadioGroups();
fillVisibleCheckboxes();
fillVisibleComboboxes();