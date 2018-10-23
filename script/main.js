var myNav = document.getElementsByClassName('navbar')[0];
var myNavClass = myNav.classList;
var element = myNavClass[myNavClass.length-1];
window.onscroll = function () { 
    "use strict";
    if (window.pageYOffset >= 200 || document.documentElement.scrollTop >= 200 || document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-active");
        myNav.classList.remove(element);
    } 
    else {
        myNav.classList.remove("nav-active");
        myNav.classList.add(element);
    }
};