$(function() {
  var $document = $(document)
    , $root = $('html, body')
    , $landingNav = $('.landing-nav');

  // Invert scrollbar if not at top
  $document.scroll(function() {
    if ($document.scrollTop() === 0)
      $landingNav.removeClass('inverse');
    else
      $landingNav.addClass('inverse');
  });

  // Smooth anchors
  $('a[href*="#"]').click(function(){
    var offset = $($(this).attr('href')).offset();

    if (offset)
      $root.animate({
        scrollTop: offset.top - 80 // make room for navbar
      }, 1000);

    return false;
  });
});
