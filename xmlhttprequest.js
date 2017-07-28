
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

xhr.onreadystatechange = function () {
    if (this.readyState = 4 && this.status == 200) {
        var animeInfo = JSON.parse(this.responseText);
        console.log(animeInfo)
    }
};
