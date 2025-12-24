$(function () {
  $("#header").load("components/header.html", function () {
    let currentPage = window.location.pathname.split("/").pop(); 
    $("nav li").removeClass("active");
    let $currentLink = $(`nav a[href$='${currentPage}']`);
    if ($currentLink.length) {
      $currentLink.parent("li").addClass("active");
      $currentLink.closest("li").parents("li").addClass("active");
    }
  });
  $("#footer").load("components/footer.html");
});
