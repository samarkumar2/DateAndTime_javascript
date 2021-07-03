const countdown=document.querySelector("#countdown");
const localdate=document.querySelector("#localdate");
setInterval(function(){
    let date = new Date();
    localdate.innerHTML="Todays's Date: "+date.toLocaleDateString();
    countdown.innerHTML="Current Time: "+date.toLocaleTimeString()
},1);