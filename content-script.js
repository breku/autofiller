
function log(text){
	console.log(text);
}
console.log('aaa');
let browserUtil = new BrowserUtil();
console.log(browserUtil);

var stkn = browserUtil.getUrlParameter('stkn');

var jsonObject = {};
jsonObject["formNumber"] = stkn;


$.each(forms[0].widgets,function (i,element) {
	jsonObject["widgetChangedModel"] = {"id":element["name"],"changed":{"value":element["value"]}};

	var className = '.row-with-'+ element["name"].replace(/\./g,"_");



    var widget = $(className);
	if(widget.length != 0){
		var url = location.port == 4000 ?  "/api/componentService/componentValueChanged" : "/form/api/componentService/componentValueChanged";
		$.ajax( url,{
			data: JSON.stringify(jsonObject),
			contentType : 'application/json',
			type : 'POST',
		});
	}
})



location.reload();
