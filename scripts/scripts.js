$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(this).toggleClass("active");
    $("nav").toggleClass("active");
    $(".mobile-navigation").toggleClass("active");
    $("header").toggleClass("active");
  });
});
