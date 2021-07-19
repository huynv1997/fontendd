function check(){
    var a = document.querySelector("#numberA");
    var showw = document.querySelector('#show');
    if(a % 2 === 0){
        console.log("so chan");
        showw.innerHTML = "so chan";
    }
    else{
        console.log("so le");
        showw.innerHTML = "so chan";  
    }
       
}
// check(5)