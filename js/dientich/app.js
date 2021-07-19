function rundientich(){
    var Cd = document.querySelector('#chieudai');
    var Cr = document.querySelector('#chieurong');
    var DT = document.querySelector('#dientich');

   var run  =  parseInt(Cd.value) * parseInt( Cr.value);
   console.log(run);;
   DT.innerHTML = run;
}
function runchuvi(){
    var Cd = document.querySelector('#chieudai');
    var Cr = document.querySelector('#chieurong');
    var CV = document.querySelector('#chuvi');

   var runCV  =  (parseInt(Cd.value) + parseInt( Cr.value))*2;
   console.log(runCV);
   CV.innerHTML = runCV;
}