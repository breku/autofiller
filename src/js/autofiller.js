class Autofiller {


    callComponentUpdate(jsonObject){
        var url = location.port == 4000 ? "/api/componentService/componentValueChanged" : "/form/api/componentService/componentValueChanged";
        $.ajax(url, {
            data: JSON.stringify(jsonObject), contentType: 'application/json', type: 'POST',
        });
    }


    fillForm(stkn, form) {
        console.log('Filling form=' + form["formName"]);
        var jsonObject = {};
        jsonObject["formNumber"] = stkn;

        var that = this;
        $.each(form.widgets, function (i, element) {
            jsonObject["widgetChangedModel"] = {"id": element["name"], "changed": {"value": element["value"]}};

            var className = '.row-with-' + element["name"].replace(/\./g, "_");


            var widget = $(className);
            if (widget.length != 0) {
                that.callComponentUpdate(jsonObject);
            }
        })


    }
}