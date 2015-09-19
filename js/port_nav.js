// Attempted to impletment this using Jed's approach.
// Isnt' quite working.


var showCategory = function(event) {

  event.preventDefault();

  var category = $(this).data("category");

  console.log(category);

  if (category === 'all-works') {
    $('[data-category]').show();
    return;
  }

  $('[data-tags]').hide();

  $('[data-tags*="' + category + '"]').show();

  $('.nav-item.portfolio-nav-active').removeClass('portfolio-nav-active');

  $(this).addClass('portfolio-nav-active');


};

$(".nav-item").click(showCategory);
