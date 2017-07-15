// Page is ready event
$(document).ready(function() {
  // Left navigation menu show event
  $('.left-nav-handle').on('click', function() {
    $('.left-nav-menu').addClass('in');
    $('.main-wrapper').addClass('blur');
    $('body .overlay').fadeIn();
  });

  // Left navigation menu hide event
  $('.close-icon').on('click', function() {
    $('.left-nav-menu').removeClass('in');
    $('.main-wrapper').removeClass('blur');
    $('body .overlay').fadeOut();
  });

  // Initialize carousel
  imagesCarousel = $('.images-carousel');

  // Setup options for owlCarousel
  imagesCarousel.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplaySpeed: 1200,
    autoplayTimeout: 3000
  });
});
