var prevScrollpos = window.pageYOffset;
var highWindow = document.getElementById("h-high");
var arrImg = document.getElementById("arr-i");
var ddProg = document.getElementById("dd-prog");
var ddAbt = document.getElementById("dd-abt");
var tabs = document.getElementsByClassName("s-head");

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

window.onload = function() {
  
  var currentScrollpos = window.pageYOffset;
  if (currentScrollpos > 100) {
    highWindow.style.top = "-90px";
    arrImg.style.opacity = "1";
  }
   
  var heads = document.getElementsByClassName("s-head");
  for(var i = 0; i < heads.length; i++){heads[i].style.zIndex = heads.length+1 - i;}
  
  var contents = document.getElementsByClassName("s-content");
  contents[0].style.display = "block";
  for(var i = 1; i < contents.length; i++){contents[i].style.display = "none";}
}
window.setInterval(function(){
  if (getComputedStyle(highWindow).getPropertyValue("top") == "-90px"){
    arrImg.style.transition = "opacity 0.2s";
    arrImg.style.opacity = "1"; 
      
  }
  
}, 750);

/* Function *******************/
function canClickNav(item) {
  if(highWindow.style.top == "-90px") {return item.style.cursor = "pointer";}
  else                                {return item.style.cursor = "default";}  
}
/* Applies to */
arrImg.onmouseover = function(){
  canClickNav(arrImg);
};
highWindow.onmouseover = function(){
  canClickNav(highWindow);
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
  canClickNav(highWindow);
  setNavPos();
}
arrImg.onclick = function(){
  expandNav();
  canClickNav(arrImg);
  setNavPos();
}


/* Function *******************/
function canClickTab(tab) {
  var contents = document.getElementsByClassName("s-content");
  const element = document.querySelector('.s-content');
  const style = getComputedStyle(element);
  var zPage = style.zIndex;
  
  if(tab.style.zIndex <= zPage) {return tab.style.cursor = "pointer";}
}
/* Applies to */
for(var i = 0;i < tabs.length;i++){
  tabs[i].onmouseover = function () {canClickTab(this)};
  
}


/* Function *******************/
function switchTab(tab) {
  
  if (tab.style.cursor = "pointer") {
    var heads = document.getElementsByClassName("s-head");
    var contents = document.getElementsByClassName("s-content");
    var i = 0;
    for(var j = 0; j < heads.length; j++) {
      heads[j].style.zIndex = heads.length+1;
      console.log(heads[j].style.zIndex);
      contents[j].style.display = "none";
      }
    while(tab != heads.item(i)){i++;}
    
    /* decrement zIndex right */
    var d = 0;
    for(var j = i; j < heads.length; j++) {
      heads[j].style.zIndex -= d;
      console.log(heads[j].style.zIndex);
      d++;
    }
    /* decrement zIndex left  */
    var d = 0;
    for(var j = i; j >= 0; j--) {
      heads[j].style.zIndex -= d;
      console.log(heads[j].style.zIndex);
      d++;
    }
    contents[i].style.display = "block";
    tab.style.cursor = "default";
  } 
} 
/* Applies to */
for(var i = 0;i < tabs.length;i++){
  tabs[i].onclick = function() {switchTab(this);};
  
}


