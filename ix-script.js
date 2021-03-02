var prevScrollpos = window.pageYOffset;
var highWindow = document.getElementById("high")
var ddWindow = document.getElementById("dd")

window.onload = function() {
  var currentScrollpos = window.pageYOffset;
  if (currentScrollpos > 100) {
    highWindow.style.top = "-90px";
    ddWindow.style.opacity = "1";
  }
  
}

window.setInterval(function(){
    
    if (getComputedStyle(highWindow).getPropertyValue("top") == "-90px"){
      ddWindow.style.opacity = "1"; 
    } else {
      ddWindow.style.opacity = "0"; 
    }
}, 100)

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos && currentScrollPos > 100) {
    highWindow.style.transition = "all 1s";
    highWindow.style.transitionDelay = "0.75s";
    highWindow.style.top = "-90px"; 
     
  } else if(currentScrollPos < 200){
    highWindow.style.transition = "all 0.5s";
    highWindow.style.transitionDelay = "0s";
    highWindow.style.top = "0";
     
  }
  prevScrollpos = currentScrollPos;
} 
highWindow.onmouseover = function(){
  if(highWindow.style.top == "-90px") {
    highWindow.style.cursor = "pointer"; 
  }
  else {
    highWindow.style.cursor = "default";  
  }
  
}
highWindow.onclick = function(){
  highWindow.style.transition = "all 0.5s";
  highWindow.style.transitionDelay = "0s";
  highWindow.style.top = "0";
}

