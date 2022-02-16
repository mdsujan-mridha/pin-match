function getRandomPin(){
    const pin=Math.round(Math.random()*10000);
    // const firstPin=Math.random();
    // const pin=Math.round(firstPin*10000);
    const stringPin=pin+'';
    if(stringPin.length==4){
        return pin;
    }
    else{
        return getRandomPin();
    }
}

// function creatPin(){
//     const Pin=getRandomPin();
//     // console.log(Pin);
//    document.getElementById('set-pin').value=Pin;
// }


 document.getElementById('update-pin').addEventListener('click',function(){
     const pin=getRandomPin();
   document.getElementById('set-pin').value=pin;
 })

 document.getElementById('key-pad').addEventListener('click',function(event){
    const targetNumber= event.target.innerText;
    const displayNumber= document.getElementById('display-key');
     if(isNaN(targetNumber)){
         if(targetNumber=='C'){
            displayNumber.value="";
         }
     }
    else{
    
        const typedNumber= displayNumber.value;
        const newTypedNumber=typedNumber+targetNumber
        displayNumber.value=newTypedNumber;
    }
 })
 document.getElementById('submit-value').addEventListener('click',function(){

     const pin=document.getElementById('set-pin').value;
     const typedNumber= document.getElementById('display-key').value;
     if(pin==typedNumber){
        succesMessage.style.display='block';
        errorMessage.style.display='none';;
     }
     else{
        errorMessage.style.display='block';
        succesMessage.style.display='none';

     }
 })