// JavaScript for Navbar Toggler
document.addEventListener("DOMContentLoaded", function() {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", function() {
    navbarCollapse.classList.toggle("show");
  });

  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function() {
      navbarCollapse.classList.remove("show");
    });
  });
});

// JavaScript for FAQ Accordion
document.addEventListener("DOMContentLoaded", function() {
  var accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function(accordion) {
    accordion.addEventListener("click", function() {
      accordion.classList.toggle("active");
      var content = accordion.querySelector(".accordion-content");
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
