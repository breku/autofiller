
class Main {

    constructor(browserUtil, autofiller) {
        this.browserUtil = browserUtil;
        this.autofiller = autofiller;
    }

    main() {
        var stkn = this.browserUtil.getUrlParameter('stkn');
        var formName = this.browserUtil.getUrlParameter('formName');

        if (stkn != null) {
            var form = forms.find(x => x["formName"] === formName);
            if(form){
                this.autofiller.fillForm(stkn, form);
            }
            location.reload();
        } else {
            console.log("Skip filling form due to empty stkn url parameter")
        }
    }
}



