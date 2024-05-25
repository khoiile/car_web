document.addEventListener("DOMContentLoaded",()=>{
    const token = localStorage.getItem("pretique_car_token_account") || null;
    $.ajax({
        url : "http://localhost:27017/api/auth/checkLogin",
        type : "POST",
        headers: {
            "x-auth-token" : token
        },
        success : function (data){
            window.location.href="landing.html"
            console.log(data)
        },
        error : function (err){
            const json = err
            switch(err.status){
                case 400:
                    console.log(json)
                    break
    
                case 401:
                    console.log(json)
                    break
    
                case 500:
                    console.log(json)
    
                    break
            }
        }
    })
})

function login(){
    const email = $("#email_inp").val();
    const pass = $("#pass_inp").val()
    $.ajax({
        url : "http://localhost:27017/api/auth/login",
        type : "POST",
        data:{
            email: email,
            password: pass
        },
        success : function(data){
            localStorage.setItem("pretique_car_token_account",data.token)
            window.location.href="landing.html"
        },
        error : function(err){
            console.log(err)
        }
    })
}