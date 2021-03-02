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
    ddWindow.style.transition = "opacity 0.2s";
    ddWindow.style.opacity = "1"; 
      
  }
}, 750);

function setNavPos(){
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos != currentScrollPos && scrollY > 100) {
    highWindow.style.transition = "top 1s";
    highWindow.style.transitionDelay = "0.5s";
    highWindow.style.top = "-90px";
    ddWindow.style.transition = "top 1s";
    ddWindow.style.transitionDelay = "0.5s";
    ddWindow.style.top = "-1%";
    
    
     
  } else if(currentScrollPos < 200){
    highWindow.style.transition = "all 0.5s";
    highWindow.style.transitionDelay = "0s";
    highWindow.style.top = "0";
    
    
    ddWindow.style.transition = "top 0.5s, opacity 0.75s";
    ddWindow.style.transitionDelay = "0s";
    ddWindow.style.top = "90px";
    ddWindow.style.opacity = "0";

  }
  prevScrollpos = currentScrollPos;
  
}
window.onscroll = function() {
  setNavPos();
}

/* function */
function canClick(item) {
  if(highWindow.style.top == "-90px") {
    return item.style.cursor = "pointer";
    
  }
  else {
    return item.style.cursor = "default";
    
  }  
}

/* Applies to */
ddWindow.onmouseover = function(){
  canClick(ddWindow);
};
highWindow.onmouseover = function(){
  canClick(highWindow);
}
/**/

/* Function */
function expandNav(){
  highWindow.style.transition = "all 0.5s";
  highWindow.style.transitionDelay = "0s";
  highWindow.style.top = "0";
  
  ddWindow.style.transition = "all 0.5s";
  ddWindow.style.transitionDelay = "0s";
  ddWindow.style.top = "90px";
}

/* Applies to */
highWindow.onclick = function(){
  expandNav();
  canClick(highWindow);
  setNavPos();
}
ddWindow.onclick = function(){
  expandNav();
  canClick(ddWindow);
  setNavPos();
}
/**/
