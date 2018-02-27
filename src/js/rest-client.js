class RestClient{

    callComponentUpdate(jsonObject){
        var url = location.port == 4000 ? "/api/componentService/componentValueChanged" : "/form/api/componentService/componentValueChanged";
        $.ajax(url, {
            data: JSON.stringify(jsonObject), contentType: 'application/json', type: 'POST',
        });
    }


    callGetFormTemplate(formId, callback){
        var url = location.port == 4000 ? "/api/formService/getFormTemplate" : "/form/api/formService/getFormTemplate";
        var jsonObject = {};
        jsonObject["formId"] = formId;
        jsonObject["params"] = {"page": ["Page1"]};
        $.ajax(url, {
            data: JSON.stringify(jsonObject), contentType: 'application/json', type: 'POST',
            success: function (data) {
                callback(data);
            }
        });
    }
}