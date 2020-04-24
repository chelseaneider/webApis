var count = 0;
// var incrementEl = document.querySelector("#btnStart");
var countEl = document.querySelector("#count");
var intervalID = window.setInterval(myCallback, 1000);


function setCounterText() {
  countEl.textContent = count;
}



// incrementEl.addEventListener("", function() {
//   var intervalID = window.setInterval(myCallback, 500);
//   count++;
//   setCounterText();
// });


function myCallback(){  
  count++;
  setCounterText();
}
 
// decrementEl.addEventListener("click", function() {
//   if(count > 0) {
//     count--;
//     setCounterText();
//   }
// }); 

//timer event simler to onclick 