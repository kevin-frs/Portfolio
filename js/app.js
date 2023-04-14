/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
  "particles-js",
  "../resources/jsons/particles.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);

/****** Menu burder for mobile ******/
window.onload = () => {
  var sidenav = document.getElementById("mySidenav");
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  /* Set the width of the side navigation to 250px */
  function openNav() {
    sidenav.classList.add("active");
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    sidenav.classList.remove("active");
  }
};

/* When the user scrolls down, change the navbar. */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var inside_nav = document.querySelector("#navbar .container");
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    //When scrolled

    navbar.style.background = "#000c";
    inside_nav.style.height = "50px";
  } else {
    //Base

    navbar.style.background = "#000F";
    inside_nav.style.height = "75px";
  }
}
