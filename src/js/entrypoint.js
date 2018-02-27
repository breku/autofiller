
var browserUtil = new BrowserUtil();
var restClient = new RestClient();
var autofiller = new Autofiller(restClient);
var main = new Main(browserUtil, autofiller, restClient);

main.main();


