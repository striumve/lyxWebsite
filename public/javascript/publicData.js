var deviceFlag = 1; // 1: PC; 2: mobile
var languageFlag = 1; //1: Chinese; 2: English
var body = document.querySelector('body');
const currentVersion = 'v4.0.3';
const latestUpdateTime = '2025.12.06';

var thisOS = navigator.platform;
var os = new Array("iPhone", "iPod", "iPad", "android", "Nokia", "SymbianOS", "Symbian", "Windows Phone",
    "Phone", "Linux armv71", "MAUI", "UNTRUSTED/1.0", "Windows CE", "BlackBerry", "IEMobile");
var check = navigator.appVersion;

function checkDevice() {
    deviceFlag = 1;
    for (var i = 0; i < os.length; i++) {
        if (thisOS.match(os[i])) {
            deviceFlag = 2;
        }
    }
    if (navigator.platform.indexOf('iPad') != -1) {
        deviceFlag = 2;
    }
    if (check.match(/linux/i)) {
        if (check.match(/mobile/i) || check.match(/X11/i)) {
            deviceFlag = 2;
        }
    }
    Array.prototype.in_array = function (e) {
        for (i = 0; i < this.length; i++) {
            if (this[i] == e)
                return true;
        }
        return false;
    }
}

checkDevice();