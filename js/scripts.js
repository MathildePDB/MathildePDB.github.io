// Navbar sticky

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var navbarBurger = document.getElementById("navbar-hamburger");

var sticky = navbar.offsetTop;
// var stickyBurger = navbarBurger.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// function myFunctionBurger() {
//   if (window.pageYOffset >= sticky) {
//     navbarBurger.classList.add("sticky")
//   } else {
//     navbarBurger.classList.remove("sticky");
//   }
// }

// hamburger menu
// var sidenav = document.getElementById("mySidenav");
// var items = document.querySelectorAll("item"); 
// var openBtn = document.getElementById("openBtn"); 
// var closeBtn = document.getElementById("closeBtn"); 
// var menu = document.getElementById("navbar-hamburger"); 

// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

// function openNav() {
//   sidenav.classList.add("active");
// }

// function closeNav() {
//   sidenav.classList.remove("active");
// }

// function toggleMenu() {
//   if (sidenav.classList.contains("showMenu")) {
//     sidenav.classList.add("showMenu");
//     closeBtn.style.display = "block";
//     openBtn.style.display = "none";
//     sidenav.style.display = "block";
//   } else {
//     sidenav.classList.remove("showMenu");
//     closeBtn.style.display = "none";
//     openBtn.style.display = "block";
//     sidenav.style.display = "none";
//   }
// }
// openBtn.addEventListener("click", toggleMenu);
// items.forEach(
//   function(menuItem) {
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )