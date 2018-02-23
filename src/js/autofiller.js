class Autofiller {


    callComponentUpdate(jsonObject){
        var url = location.port == 4000 ? "/api/componentService/componentValueChanged" : "/form/api/componentService/componentValueChanged";
        $.ajax(url, {
            data: JSON.stringify(jsonObject), contentType: 'application/json', type: 'POST',
        });
    }

    getWidget(element) {
        var className = '.row-with-' + element["name"].replace(/\./g, "_");
        return $(className);
    }

    createJsonObject(stkn, element) {
        var jsonObject = {};
        jsonObject["formNumber"] = stkn;
        jsonObject["widgetChangedModel"] = {"id": element["name"], "changed": {"value": element["value"]}};
        return jsonObject;
    }

    fillForm(stkn, form) {
        console.log('Filling form=' + form["formName"]);
        for (let element of form.widgets) {
            var widget = this.getWidget(element);
            if (widget.length !== 0) {
                var jsonObject = this.createJsonObject(stkn, element);
                this.callComponentUpdate(jsonObject);
            }
        }


    }
}