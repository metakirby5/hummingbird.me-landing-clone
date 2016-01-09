$(function() {
  var $document = $(document)
    , $landingNav = $('.landing-nav');

  // Invert scrollbar if not at top
  $document.scroll(function() {
    if ($document.scrollTop() === 0)
      $landingNav.removeClass('inverse');
    else
      $landingNav.addClass('inverse');
  });
});
