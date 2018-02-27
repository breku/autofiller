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
        jsonObject["clientMetadata"] = {
            "channel": "web",
            "channelDescription": "web",
            "operatingSystem": "linux",
            "sourceApp": "pkbase",
            "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36",
        };
        $.ajax(url, {
            data: JSON.stringify(jsonObject), contentType: 'application/json', type: 'POST',
            success: function (data) {
                callback(data);
            }
        });
    }
}