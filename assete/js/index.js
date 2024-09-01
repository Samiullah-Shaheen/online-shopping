

       
       // hambargar minue part is started here

        const bar1 = document.getElementById('bar');
        const close1 = document.getElementById('close');
        const nav = document.getElementById('navbar');

        if(bar1){
            bar1.addEventListener('click', () => {
                nav.classList.add('active');
                // nav.classList.add('active');
            })
        }
        if(close1){
            close1.addEventListener('click', () => {
                nav.classList.remove('active');
            })
        }


       //   cookie part is started here

    //    function setcookie(){
    //     var u=document.getElementById("username").value;
    //     var p=document.getElementById("password").value;
    //     document.cookie="myusername="+u+";expires= 2 3 2024";
    //     document.cookie="mypassword="+p+";expires= 2 3 2024";
    // }


    //    function goShop(){
    //     if(localStorage.length!=0){
    //         window.location.href="shop.html";
            
    //     }
    //     else{
    //         if(confirm("do you want save cookei")){
    //             window.location.href="loginPage.html";
    //         }
    //         else{
    //             window.location.href="#";
    //         }
    //     }
    // }
    
    // function getcookei(){

    //     var user=document.getElementById("username").value;
    //     var pass=document.getElementById("password").value;
    //     localStorage.setItem("name",user);
    //     localStorage.setItem("password",pass);
    // }



            //   sesssion part is started here

            function setcookie(){
                var u=document.getElementById("username").value;
                var p=document.getElementById("password").value;
                window.sessionStorage.setItem("sami",u);
                window.sessionStorage.setItem("pass",p);
        
            }

       
        function goShop(){
            if(window.sessionStorage.length>1){
                window.location.href="shop.html";
                
            }
            else{
                if(confirm("do you want save cookei")){
                    window.location.href="loginPage.html";
                }
                else{
                    window.location.href="#";
                }
            }
        }

        function Blogfunc(){
            if(window.sessionStorage.length>1){
                window.location.href="blog.html";
                
            }
            else{
                if(confirm("do you want save cookei")){
                    window.location.href="loginPage.html";
                }
                else{
                    window.location.href="#";
                }
            }
        }

        function contactfunc(){
            if(window.sessionStorage.length>1){
                window.location.href="contact.html";
                
            }
            else{
                if(confirm("do you want save cookei")){
                    window.location.href="loginPage.html";
                }
                else{
                    window.location.href="#";
                }
            }
        }

        function aboutfunc(){
            if(window.sessionStorage.length>1){
                window.location.href="about.html";
                
            }
            else{
                if(confirm("do you want save session storage")){
                    window.location.href="loginPage.html";
                }
                else{
                    window.location.href="#";
                }
            }
        }

        function cartfunc(){
            if(window.sessionStorage.length>1){
                window.location.href="cart.html";
                
            }
            else{
                if(confirm("do you want save session storage")){
                    window.location.href="loginPage.html";
                }
                else{
                    window.location.href="#";
                }
            }
        }





