// Navbar sticky

window.onscroll = function() {myFunction(), myFunctionBurger()};

var navbar = document.getElementById("navbar");
var navbarBurger = document.getElementById("navbar-hamburger");

var sticky = navbar.offsetTop;
var stickyBurger = navbarBurger.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function myFunctionBurger() {
  if (window.pageYOffset >= sticky) {
    navbarBurger.classList.add("sticky")
  } else {
    navbarBurger.classList.remove("sticky");
  }
}

// hamburger menu
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}