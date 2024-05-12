var sidenav = document.querySelector(".side-navbar");
var togglebutton = document.querySelector(".navbar-menu-toggle");


togglebutton.addEventListener("click",function(){
    sidenav.style.left="0";
});

function closeSidenav(){
    sidenav.style.left="-60%";
}