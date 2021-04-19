var source = 'https://api.github.com/repos/MSCLoaderPro/EarlyAccessRelease/releases';

function success() {
    var data = JSON.parse(this.responseText);
    console.log(data);
    document.getElementById("version").innerHTML = "Version: <b>" + data[0].tag_name + "</b>";
}

function error(err) {
    console.err(err);
}

var xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open('GET', source);
xhr.send();