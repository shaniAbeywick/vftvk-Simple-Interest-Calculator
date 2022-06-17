function compute()
{
   
   var amount = parseInt(document.getElementById("principal").value);
   var rate = parseInt(document.getElementById("vol").value);
   var time = parseInt(document.getElementById("years").value);

   var interest = amount* rate * time /100 ;
   var total = interest + amount;

   document.getElementById("output_1").innerHTML="If you deposit " + amount;
   document.getElementById("output_2").innerHTML="at an interest rate of " + rate +"%";
   document.getElementById("output_3").innerHTML="You will receive an amount of " + total;
   document.getElementById("output_4").innerHTML="in the year " + time;



   


   

   
   


    
}
        