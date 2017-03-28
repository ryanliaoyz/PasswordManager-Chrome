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

var rand = function(min, max) {
    return Math.floor(Math.max(min, Math.random() * (max + 1)));
}
if (generator) {

    generator.onclick = function() {
        var pw = '';
        var len = 0;
        if (document.getElementById("optionLengthRandom").checked) {
            len = rand(6, 20);
        } else {
            len = document.getElementById("optionLength").value;
        }

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
        // var count;
        if (document.getElementById("OptionLowercase").checked) {
            var text = text + lowercase;
        }
        if (document.getElementById("OptionUppercase").checked) {
            var text = text + uppercase;
        }
        if (document.getElementById("OptionNumber").checked) {
            var text = text + number;
        }
        if (document.getElementById("OptionSpecial").checked) {
            var text = text + special;
        }
        ///
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
}

function changeTab(index) {
    for (var i = 0, len = tabs.length; i < len; i++) {
        if (i === index) {
            tabs[i].className = "selected";
            contents[i].className = "show";
        } else {
            tabs[i].className = '';
            contents[i].className = '';
        }
    }
}

window.onload = function() {
    var oDiv = document.getElementById("tab");
    var oLi = oDiv.getElementsByTagName("div")[0].getElementsByTagName("li");
    var aCon = oDiv.getElementsByTagName("div")[1].getElementsByTagName("div");
    var timer = null;
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onmouseover = function() {
            show(this.index);
        }
    }

    function show(a) {
        index = a;
        var alpha = 0;
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
            aCon[j].className = "";
            aCon[j].style.opacity = 0;
            aCon[j].style.filter = "alpha(opacity=0)";
        }
        oLi[index].className = "cur";
        clearInterval(timer);
        timer = setInterval(function() {
                alpha += 2;
                alpha > 100 && (alpha = 100);
                aCon[index].style.opacity = alpha / 100;
                aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
                alpha == 100 && clearInterval(timer);
            },
            5)
    }
}