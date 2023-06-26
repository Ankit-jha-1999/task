document.addEventListener("DOMContentLoaded", function() {
  var sidebarLinks = document.querySelectorAll(".sidebar-link");
  var sections = document.querySelectorAll(".section");

  sidebarLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      var target = this.getAttribute("href");

      sections.forEach(function(section) {
        section.style.display = "none";
      });

      document.querySelector(target).style.display = "block";

      sidebarLinks.forEach(function(item) {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});
