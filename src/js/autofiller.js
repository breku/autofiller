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

    fillForm(stkn, form) {
        console.log('Filling form=' + form["formName"]);
        for (let element of form.widgets) {
            var widget = this.getWidget(element);
            if (widget.length !== 0) {
                var jsonObject = this.createJsonObject(stkn, element);
                this.restClient.callComponentUpdate(jsonObject);
            }
        }


    }
}