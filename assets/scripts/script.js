$(document).ready(function () {
  $(".open-menu").click(function () {
    $(".box-menu").toggleClass("active-menu");
    $("body").toggleClass("no-scroll");
  });
});
