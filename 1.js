let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    let name = document.getElementById("name");
    if(name.value===''){
        document.getElementById("nameid").innerHTML = "please enter your name"
    }
    else{
        document.getElementById("nameid").innerHTML = ""
    }
    let pass = document.getElementById("pass");
    if(pass.value===''){
        let t=document.getElementById("passid");
        document.getElementById("passid").innerHTML  = "please enter your password"
    }
    else{
        document.getElementById("nameid").innerHTML = ""
    }
    let sel = document.getElementById("sel");
    if(sel.value==='Branch'){
        document.getElementById("selid").innerHTML  = "please enter your branch"
     
    }
    else{
        document.getElementById("selid").innerHTML = ""
    }
    let r1 = document.getElementById("r1");
    let r1 = document.getElementById("r2");
    let r1 = document.getElementById("r3");
    if(r1.checked ==false && r2.checked==false &&  r3.checked ==false ){
        document.getElementById("reid").innerHTML  = "please enter your gender" 
    }
    else{
        document.getElementById("radid").innerHTML = ""
    }
    let ch1 = document.getElementById("ch1");
    let ch2 = document.getElementById("ch2");
    let ch3 = document.getElementById("ch3");
    if(ch1.checked == true || ch2.checked== true || ch3.checked == true ){
        document.getElementById("chid").innerHTML  = ""
    }
    else{
        document.getElementById("chid").innerHTML = "please enter your interest"
    }

})


