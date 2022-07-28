const cal=()=>{
  let account=document.getElementById("account").value;
  let maths=document.getElementById("Maths").value;
  let social=document.getElementById("Social").value;
  let nepali=document.getElementById("Nepali").value;
  let science=document.getElementById("Science").value;
  let english=document.getElementById("English").value;
  let total= parseInt(account)+parseInt(maths)+parseInt(social)+parseInt(nepali)+parseInt(science)+parseInt(english);
 
  let per=(total)/600*100;
  
   
 
  if(per<=100 && per>=90){
    GRADES='A';
    
  }
  else if(per<=89 && per>=70){
    GRADES='B';
  }
  else if(per<=69 && per>=50){
    GRADES='C';
  }
  else{
    GRADES='D';
  }
  if(per>=40){
    document.getElementById("pub").innerHTML=`  Out Of 600 Your Total Is ${total} And Percentage Is ${per}% Your Grades Is ${GRADES}.You  Are Pass🥰`
  }
    
  else{
  document.getElementById("pub").innerHTML=`  Out Of 600 Your Total Is ${total} And Percentage Is ${per}%.Your Grades Is ${GRADES}.You Are Fail😥`
  }
  }