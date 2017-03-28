var register = document.getElementById("registerBtn");
var login = document.getElementById("loginBtn");

login.onclick = function() {
    window.location.href = 'login.html';
    return;
}

register.onclick = function() {

    var userName = document.getElementById("username").value;
    var userPass = document.getElementById("password").value;
    var reUserPass = document.getElementById("rntPassword").value;

    if (userPass != reUserPass) {
        alert("two passwords do not correspond")
        return;
    } else {
        $.ajax({
            url: "http://code.itotem.org/code/demo/iow9skv8/pw/user/update",
            data: {
                userName: userName,
                userPass: userPass
            },
            type: "post",
            success: function(data) {
                if (data.result) {
                    window.location.href = 'popup.html';
                } else {
                    alert("invalid username, try again");
                    return;
                }
            }
        });
    }
}