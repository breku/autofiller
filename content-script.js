
function log(text){
	console.log(text);
}

function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}


var stkn = getUrlParameter('stkn');

var widgets = [
	{"name":"GesComplexComponent1.GesComplexComponent1.GesTileGroup1", "value":"1"},
	{"name":"GesComplexComponent1.GesComplexComponent1.GesTileGroup2", "value":"2"},
	{"name":"GesComplexComponent1.GesComplexComponent1.GesTileGroup3", "value":"1"},
	{"name":"GesComplexComponent1.GesComplexComponent1.GesTileGroup4", "value":"2"},

	{"name":"GesComplexComponent2.GesComplexComponent1.GesTextField1", "value":"Kuba"},
	{"name":"GesComplexComponent2.GesComplexComponent1.GesTextField2", "value":"Nazwisko"},
	{"name":"GesComplexComponent2.GesComplexComponent1.GesTextField3", "value":"Nazwisko Rodowe"},
	{"name":"GesComplexComponent2.GesComplexComponent1.GesTextField5", "value":"Imie Matki"},
	{"name":"GesComplexComponent2.GesComplexComponent1.GesTextField4", "value":"Nazwisko panieńskie matki"},
	{"name":"GesComplexComponent2.GesComplexComponent1.GesTextField6", "value":"31010817377"},
	{"name":"GesComplexComponent2.GesComplexComponent1.GesTextField7", "value":"Miejsce urodzenia"},
	{"name":"GesComplexComponent2.GesComplexComponent1.GesTextField8", "value":"AEI670249"},
	{"name":"GesComplexComponent2.GesComplexComponent1.GesDatePicker1", "value":"1506031200000"},

	{"name":"GesComplexComponent3.GesComplexComponent1.GesTextField1", "value":"+48 123 123 123"},
	{"name":"GesComplexComponent3.GesComplexComponent1.GesTextField2", "value":"a@a.pl"},
	{"name":"GesComplexComponent3.GesComplexComponent1.GesComplexComponent1.GesCombobox1", "value":"AL"},
	{"name":"GesComplexComponent3.GesComplexComponent1.GesComplexComponent1.GesTextField1", "value":"Ulica"},
	{"name":"GesComplexComponent3.GesComplexComponent1.GesComplexComponent1.GesTextField2", "value":"2"},
	{"name":"GesComplexComponent3.GesComplexComponent1.GesComplexComponent1.GesTextField3", "value":"3"},
	{"name":"GesComplexComponent3.GesComplexComponent1.GesComplexComponent1.GesTextField4", "value":"23-423"},
	{"name":"GesComplexComponent3.GesComplexComponent1.GesComplexComponent1.GesTextField5", "value":"Miejscowość"},

	{"name":"GesComplexComponent4.GesComplexComponent1.GesTileGroup1", "value":"2"},
	{"name":"GesComplexComponent4.GesComplexComponent1.GesTileGroup3", "value":"2"},

	{"name":"GesComplexComponent4.GesComplexComponent2.GesTileGroup1", "value":"1"},
	{"name":"GesComplexComponent4.GesComplexComponent2.GesTileGroup2", "value":"2"},

	{"name":"GesComplexComponent4.GesComplexComponent3.GesTileGroup1", "value":"2"},
	{"name":"GesComplexComponent4.GesComplexComponent3.GesTileGroup2", "value":"2"},



	]

var jsonObject = {};
jsonObject["formNumber"] = stkn;


$.each(widgets,function (i,element) {
	jsonObject["widgetChangedModel"] = {"id":element["name"],"changed":{"value":element["value"]}};

	var className = '.row-with-'+ element["name"].replace(/\./g,"_");
	var widget = $(className);
	if(widget.length != 0){
		$.ajax( "/form/api/componentService/componentValueChanged",{
			data: JSON.stringify(jsonObject),
			contentType : 'application/json',
			type : 'POST',
		});
	}
})



location.reload();
