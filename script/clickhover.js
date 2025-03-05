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

   let time = currentTime();
   newHistory.innerText =`You have succesfully complete button Fix Mobile Button Issue ${time}`;

   let allClearHistory= document.getElementById('historyClear');
   if(allClearHistory){
    allClearHistory.style.display ="none";
   }


    document.getElementById("oneByone").insertAdjacentElement("afterbegin", newHistory);
    


  })
}

function currentTime(){
   let now = new Date();
   let hours = now.getHours();
   let minuts = now.getMinutes();
   let seconds = now.getSeconds();
   let period = hours >= 12 ? "PM" : "AM";
   hours = hours % 12;
    

   return `${hours}:${minuts}:${seconds}:${period}`;

}


const allOver =document.getElementById('oneByone');
const allClear = document.getElementById('historyClear');
document.getElementById('clearHistory').addEventListener('click', function(){
  allClear.style.display = 'block';
    allOver.style.display = "none";
})




const today = new Date();
const day = today.toLocaleString("en-us", {weekday: "short"});
const date = today.toLocaleDateString("en-us", {month: "short", day:"2-digit", year:"numeric"});

window.onload = function() {
document.getElementById("date-month").innerText = date;
document.getElementById("week-day").innerText = day;
};