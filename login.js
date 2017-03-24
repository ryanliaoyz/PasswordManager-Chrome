var register = document.getElementById("registerBtn");
var login = document.getElementById("loginBtn");

register.onclick = function() {
    window.location.href = 'signup.html';
    return;
}

login.onclick = function() {
    var userName = document.getElementById("username").value;
    var userPass = document.getElementById("password").value;
    $.ajax({
        url: "http://code.itotem.org/code/demo/iow9skv8/pw/user/queryby/userName/is/" + userName,
        // data: { userLogin: $("#userLogin").val() },
        // dataType: "jsonp",
        type: "get",
        success: function(data) {
            if (data.rows.length > 0) {
                if (data.rows[0].userPass == userPass) {
                    window.location.href = "sucess";
                } else {
                    document.getElementById("username").focus;
                    return;
                }
            }
        }
    });

}