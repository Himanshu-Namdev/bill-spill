let tipValue=0;
function g1(){
 tipValue=5;
 document.getElementById("g1").style="border:5px solid blue";
}
function g2(){
 tipValue=10;
 document.getElementById("g2").style="border:5px solid blue";
}
function g3(){
 tipValue=20;
 document.getElementById("g3").style="border:5px solid blue";
}
function g4(){
 tipValue=25;
 document.getElementById("g4").style="border:5px solid blue";
}
function g5(){
 tipValue=50;
 document.getElementById("g5").style="border:5px solid blue";
}
function g6(){
 tipValue=75;
 document.getElementById("g6").style="border:5px solid blue";
}
function generate(){
 const amount=document.getElementById("amount").value;
 const NumberOfPeople = document.getElementById("NumberOfPeople").value;
 if(tipValue!=0&&amount!=0&&NumberOfPeople!=0)
 {
     let y = (tipValue*amount)/100;
     let bill=parseInt(amount)+parseInt(y);
     bill=(bill/NumberOfPeople)
     document.getElementById("TA").innerHTML="₹"+y.toString();
     document.getElementById("TT").innerHTML="₹"+bill.toString();
     document.getElementById("reset").style="background: white";
 }
 else
 {
     document.getElementById("error").innerHTML="Enter Data Correctly";
 }
}
function reset(){
 document.getElementById("amount").innerHTML=0;
 document.getElementById("NumberOfPeople").innerHTML=0;
 tipValue=0;
 document.getElementById("reset").style="background: #C39FFF";
 document.getElementById("g1").style="border:none";
 document.getElementById("g2").style="border:none";
 document.getElementById("g3").style="border:none";
 document.getElementById("g4").style="border:none";
 document.getElementById("g5").style="border:none";
 document.getElementById("g6").style="border:none";
 document.getElementById("TA").innerHTML="₹ 0.00";
 document.getElementById("TT").innerHTML="₹ 0.00";
}
