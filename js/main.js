var source = 'https://api.github.com/repos/MSCLoaderPro/MSCModLoaderPro/releases';
var sourceInstaller = 'https://api.github.com/repos/MSCLoaderPro/docs/releases';

function success() {
    var data = JSON.parse(this.responseText);
    document.getElementById("version").innerHTML = "Version: <b>" + data[0].tag_name;
}

function success2() {
    var data = JSON.parse(this.responseText);
    document.getElementById("version2").innerHTML = "Installer: <b>" + data[0].tag_name;
}

function error(err) {
    console.err(err);
}

var xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open('GET', source);
xhr.send();

var xhr2 = new XMLHttpRequest();
xhr2.onload = success2;
xhr2.onerror = error;
xhr2.open('GET', sourceInstaller);
xhr2.send();