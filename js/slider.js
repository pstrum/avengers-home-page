var selectBullet = function(event) {

    event.preventDefault();

    var slideID = $(this).attr("href");

    $(".bullets a").removeClass("current");
    $(this).addClass("current");

    $(".active-slide").removeClass("active-slide");
    $(slideID).addClass("active-slide");

};

$(".bullets a").click(selectBullet);


