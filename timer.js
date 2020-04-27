var count = 0;
var countEl = document.querySelector("#count");
var intervalID = window.setInterval(myCallback, 1000);

// timer functions
function setCounterText() {
  countEl.textContent = count;
}


function myCallback(){  
  count++;
  setCounterText();
}
 