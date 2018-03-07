class Autofiller {


    constructor(restClient) {
        this.restClient = restClient;
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

    fillForm(stkn, form, callbackSuccess) {
        console.log('Filling form=' + form["formName"]);
        var counter = 0;
        this.callUpdateOnWidget(stkn, form.widgets, counter, form.widgets.length, callbackSuccess)
    }

    callUpdateOnWidget(stkn, widgets, counter, maxLength, callbackSuccess) {
        if (counter<maxLength) {
            var widget = this.getWidget(widgets[counter]);
            console.log('widget=' + widgets[counter].name);
            if (widget.length !== 0) {
                var jsonObject = this.createJsonObject(stkn, widgets[counter]);
                this.restClient.callComponentUpdate(jsonObject, () => {
                    this.callUpdateOnWidget(stkn, widgets, ++counter, maxLength, callbackSuccess);
                });
            } else {
                this.callUpdateOnWidget(stkn, widgets, ++counter, maxLength, callbackSuccess);
            }
        } else {
            callbackSuccess();
        }
    }
}