let completeBtn = document.querySelectorAll(".btn")

for(let i = 0; i<completeBtn.length; i++ ){
  const complete = completeBtn[i];
  
  complete.addEventListener('click', function(){
     
 

    let completeAssign = document.getElementById('completAssign').innerText;
    completeAssign = parseInt(completeAssign);
    completeAssign = completeAssign - 1;
    document.getElementById('completAssign').innerText = completeAssign;

     let completeTask = document.getElementById('completTask').innerText;
     completeTask = parseInt(completeTask);
     completeTask = completeTask + 1;
     document.getElementById('completTask').innerText = completeTask;

     
    alert('task complete is successfull')

    if(completeAssign == 0){
        alert('congrats man !! your task is complete ')
    }

   complete.setAttribute('disabled', 'true');


   document.getElementById('oneByone').innerText;

   let newHistory = document.createElement('p');

   let time = curentTime();
   newHistory.innerText ="You have succesfully complete button Fix Mobile Button Issue";

   let allClearHistory= document.getElementById('historyClear');
   if(allClearHistory){
    allClearHistory.style.display ="none";
   }


    document.getElementById("oneByone").insertAdjacentElement("afterbegin", newHistory);
    


  })
}

function curentTime(){
   let now = new Date();
   let hours = now.getHours();
   let minuts = now.getMinutes();
   let seconds = now.getSeconds();
   let remaining = hours >= 24 ? "PM" : "AM";
   hours = hours % 24;
    

   return `${hours}:${minuts}:${seconds}:${remaining}`;



}


