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
            url: "http://code.itotem.org/code/demo/iow9skv8/pw/user/queryby/userName/is/" + userName,
            // data: { userLogin: $("#userLogin").val() },
            // dataType: "jsonp",
            type: "post",
            success: function(data) {
                if (data.rows.length > 0) {
                    if (data.rows[0].userPass == userPass) {
                        window.location.href = "success";
                    } else {
                        document.getElementById("username").focus;
                        return;
                    }
                }
            }
        });
    }
}