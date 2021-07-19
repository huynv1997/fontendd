function check(){
    var a = document.querySelector('#number-one');
    var b = document.querySelector('#number-tow');
    var c = document.querySelector('#number-three');
    var d = document.querySelector('#number-four');
    var s = document.querySelector('#show');
    console.log(a.value);
    var max = a.value;
    if(max < b.value){
        max = b.value;
        s.innerHTML= max;
    }
    if(max < c.value){
        max = c;
        s.innerHTML = c.value;
    }
    if(max <d.value){
        max = d.value;
        s.innerHTML = d.value;
    }
}