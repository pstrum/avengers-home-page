var showCategory = function(event) {

    event.preventDefault();

    var category = $(this).data("category");

    console.log(category);

    if (category === 'all-works') {
      $('[data-category]').show();
      return;
    }

    $('figure [data-tags*="' + category + '"]').addClass('current-category');
    // $(".bullets a").removeClass("current");
    // $(this).addClass("current");

    // $(".active-slide").removeClass("active-slide");
    // $(slideID).addClass("active-slide");

};

$(".nav-item").click(showCategory);
