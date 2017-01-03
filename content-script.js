
function log(text){
	console.log(text);
}

var textFieldValues = ["aaaa", "96080701155", "07271214101","67020200603","AJM977446","BX5930092","6636965944","PL47035097377694",
"PL251090957365511087681086789746","251090957365511087681086789746", "AA AA", "123456789","12-555", "77888","478585036", "87996238542736"
];


function fillVisibleTextfields(){
	var textFields = $('.iew-PageProxyPanelShown input:enabled.gwt-TextBox.iew-TextField');
	log('Found ' + textFields.length + ' visible and enabled textfields.')



$(textFields[0]).focus();
$(textFields[0]).val('s56756');
$(textFields[0]).parent().parent().trigger("change");
$(textFields[0]).parent().parent().trigger("mousedown");
$(textFields[0]).parent().parent().trigger("mouseup");
$(textFields[0]).parent().parent().trigger("select");
var x= $('table.gwt-TabBar');
log(x);



	$(x).click();
//	$(textFields).each(function(){
//		$(this).click();
//		$(this).val('');
//		$(this).val('aaa');
////		$(this).val('\n ');
//		$(this).blur();
//		$(this).trigger('keypress');
////		$(this).sendkeys('keypressasdfasdfas');
//var e = jQuery.Event("keypress");
//e.which = 13; //choose the one you want
//e.keyCode = 13;
//$(this).trigger(e);
//$(this).submit();
//
//
//
//	})
}

fillVisibleTextfields();