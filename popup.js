// function GeneratePassword() {
//     var text = "";
//     var number = ['1234567890'];
//     var special = ['~!@#$%^&*()_+";",./?<>'];
//     var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
//     var lowercase = ['abcdefghijklmnopqrstuvwxyz'];
//     if (document.getElementById("OptionLowercase").checked = "checked") {
//         var text = text + lowercase;
//     }
//     if (document.getElementById("OptionUppercase").checked = "checked") {
//         var text = text + uppercase;
//     }
//     if (document.getElementById("OptionNumber").checked = "checked") {
//         var text = text + number;
//     }
//     if (document.getElementById("OptionSpecial").checked = "checked") {
//         var text = text + special;
//     }
//     var rand = function(min, max) { return Math.floor(Math.max(min, Math.random() * (max + 1))); }
//     var len = document.getElementById("optionLength").value;
//     var pw = '';
//     for (i = 0; i < len; ++i) {
//         var strpos = rand(0, 3);
//         pw += text[strpos].charAt(rand(0, text[strpos].length));
//     }
//     return pw;
//     document.getElementById("PasswordDisplay").value = pw;
// }

var generator = document.getElementById("generator");

generator.onclick = function() {
    var pw = '';
    var len = document.getElementById("optionLength").value;
    if (len < 4) {
        pw = 'The length must be over 4';
        document.getElementById("PasswordDisplay").value = pw;
        return;
    }
    var text = "";
    var number = ['1234567890'];
    var special = ['~!@#$%^&*()_+";",./?<>'];
    var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    var lowercase = ['abcdefghijklmnopqrstuvwxyz'];
    var count;
    if (document.getElementById("OptionLowercase").checked) {
        var text = text + lowercase;
    }
    if (document.getElementById("OptionUppercase").checked) {
        var text = text + uppercase;
        0
    }
    if (document.getElementById("OptionNumber").checked) {
        var text = text + number;
    }
    if (document.getElementById("OptionSpecial").checked) {
        var text = text + special;
    }
    var rand = function(min, max) { return Math.floor(Math.max(min, Math.random() * (max + 1))); }
    for (i = 0; i < len; ++i) {
        pw += text.charAt(rand(0, text.length));
    }
    str = pw;
    pw = '';
    while (str.length > 0) {
        pp = str.charAt(rand(0, str.length));
        str = str.replace(pp, "");
        pw += pp;

    }
    document.getElementById("PasswordDisplay").value = pw;
    return
}