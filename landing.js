document.addEventListener("DOMContentLoaded",()=>{
    check()
})

function check(){
    const token = localStorage.getItem("pretique_car_token_account") || null;
    $.ajax({
        url : "http://localhost:27017/api/auth/checkLogin",
        type : "POST",
        headers: {
            "x-auth-token" : token
        },
        success : function(data) {
            console.log("success")
            $("#log_in").hide()
            $("#sign_up").hide()
            $("#log_out").show()
        },
        error : function(err){
            console.log(err)
        }
    })
}

function logout(){
    $.ajax({
        url : "http://localhost:27017/api/auth/checkLogin",
        type : "POST",
        headers: {
            "x-auth-token" : token
        },
        success : function(data) {
            console.log("success")
            $("#log_in").hide()
            $("#sign_up").hide()
            $("#log_out").show()
        },
        error : function(err){
            console.log(err)
        }
    })
}