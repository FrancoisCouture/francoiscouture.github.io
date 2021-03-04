var prevScrollpos = window.pageYOffset;
var highWindow = document.getElementById("high");
var arrImg = document.getElementById("arr-i");
var ddProg = document.getElementById("dd-prog");
var ddAbt = document.getElementById("dd-abt");

window.onload = function() {
  var currentScrollpos = window.pageYOffset;
  if (currentScrollpos > 100) {
    highWindow.style.top = "-90px";
    arrImg.style.opacity = "1";
  }
  
}
window.setInterval(function(){
  if (getComputedStyle(highWindow).getPropertyValue("top") == "-90px"){
    arrImg.style.transition = "opacity 0.2s";
    arrImg.style.opacity = "1"; 
      
  }
  
}, 750);



function setNavPos(){
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos != currentScrollPos && scrollY > 100) {
    highWindow.style.transition = "top 1s";
    highWindow.style.transitionDelay = "0.5s";
    highWindow.style.top = "-90px";
    
    arrImg.style.transition = "top 1s";
    arrImg.style.transitionDelay = "0.5s";
    arrImg.style.top = "-1%";
    
    ddAbt.style.transition = "visibility 0";
    ddAbt.style.transitionDelay = "0.8s";
    ddProg.style.transition = "visibility 0";
    ddProg.style.transitionDelay = "0.8s";
    ddAbt.style.visibility = "hidden";
    ddProg.style.visibility = "hidden";
     
  } else if(currentScrollPos < 200){
    highWindow.style.transition = "all 0.5s";
    highWindow.style.transitionDelay = "0s";
    highWindow.style.top = "0";
    
    arrImg.style.transition = "top 0.5s, opacity 0.75s";
    arrImg.style.transitionDelay = "0s";
    arrImg.style.top = "90px";
    arrImg.style.opacity = "0";
    
    ddAbt.style.visibility = "visible";
    ddProg.style.visibility = "visible";
  }
  
  prevScrollpos = currentScrollPos;
  
}
window.onscroll = function() {
  setNavPos();
}

/* Function *******************/
function canClick(item) {
  if(highWindow.style.top == "-90px") {
    return item.style.cursor = "pointer";
    
  }
  else {
    return item.style.cursor = "default";
    
  }  
}
/* Applies to */
arrImg.onmouseover = function(){
  canClick(arrImg);
};
highWindow.onmouseover = function(){
  canClick(highWindow);
}


/* Function *******************/
function expandNav(){
  highWindow.style.transition = "all 0.5s";
  highWindow.style.transitionDelay = "0s";
  highWindow.style.top = "0";
  
  arrImg.style.transition = "all 0.5s";
  arrImg.style.transitionDelay = "0s";
  arrImg.style.top = "90px";
  
  ddAbt.style.visibility = "visible";
  ddProg.style.visibility = "visible";
}

/* Applies to */
highWindow.onclick = function(){
  expandNav();
  canClick(highWindow);
  setNavPos();
}
arrImg.onclick = function(){
  expandNav();
  canClick(arrImg);
  setNavPos();
}
