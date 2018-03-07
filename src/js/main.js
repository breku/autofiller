class Main {

    constructor(browserUtil, autofiller, restClient) {
        this.browserUtil = browserUtil;
        this.autofiller = autofiller;
        this.restClient = restClient;
    }

    main() {
        var stkn = this.browserUtil.getUrlParameter('stkn');
        if (!stkn) {
            stkn = this.browserUtil.getUrlParameterAfterHash('stkn');
        }

        var formName = this.browserUtil.getFormName();

        if (stkn != null) {
            this.fillForm(stkn, formName);
        } else {
            this.initializeStkn(formName)
        }
    }

    fillForm(stkn, formName) {
        var form = forms.find(x => x["formName"] === formName);
        if (form) {
            this.autofiller.fillForm(stkn, form, () => {
                location.reload();
            });
        } else {
            console.log("No form found")
        }
    }

    initializeStkn(formName) {
        var that = this;
        restClient.callGetFormTemplate(formName, function (data) {
            var stkn = data['changePageData']['members']['formModel']['sessionToken']['token'];
            that.browserUtil.insertParam('stkn', stkn);
        });

    }
}



