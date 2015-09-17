$(".bullets a").click(function() {
  event.preventDefault();
  var slideID = $(this).attr("href");

  $(".bullets a").removeClass("current");
  $(this).addClass("current");

  $(".active-slide").fadeOut().removeClass("active-slide");
  $(slideID).fadeIn().addClass("active-slide");
});
