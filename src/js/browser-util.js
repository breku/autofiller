class BrowserUtil {

    getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'),
            sParameterName, i;
        for (i = 0; i<sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

    getUrlParameterAfterHash(sParam) {
        var sPageURL = decodeURIComponent(window.location.hash.substring(1)), sURLVariables = sPageURL.split(';'),
            sParameterName, i;

        for (i = 0; i<sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }


    insertParam(key, value) {
        key = escape(key);
        value = escape(value);

        var kvp = document.location.search.substr(1).split('&');
        if (kvp == '') {
            document.location.search = '?' + key + '=' + value;
        } else {

            var i = kvp.length;
            var x;
            while (i--) {
                x = kvp[i].split('=');

                if (x[0] == key) {
                    x[1] = value;
                    kvp[i] = x.join('=');
                    break;
                }
            }

            if (i<0) {
                kvp[kvp.length] = [key, value].join('=');
            }

            //this will reload the page, it's likely better to store this until finished
            document.location.search = kvp.join('&');
        }
    }

    getFormName() {
        var formName = this.getUrlParameter('formName')
        if (formName) {
            return formName;
        }
        var type = window.location.hash.substr(2);
        var splittedType = type.split(';');
        return splittedType[0];

    }

}