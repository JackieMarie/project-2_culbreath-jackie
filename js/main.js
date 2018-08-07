// To disable submit button on Contact Page

$(function(){
  $('.input').keyup(function() {

    var empty = false;
    $('.input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });

    if (empty) {
      $('#submit').attr('disabled', 'disabled').hasClass('.button--disabled').removeClass('button--primary');
    } else {
      $('#submit').removeAttr('disabled').addClass('button--primary').removeClass('button--disabled');
    }
  });
})

// JS Modal

var $modalTrigger = $('.modal__trigger-btn'),
  $modalContainer = $('.modal__container'),
  $modalClose = $('.modal__close'),
  $modalActive = 'modal--active';

$modalTrigger.on('click', function(e) {
  e.preventDefault();

  $($modalContainer).addClass($modalActive);
  $modalContainer.attr('aria-hidden', 'false');
});

$modalClose.on('click', function(e) {
  e.preventDefault();

  $($modalContainer).removeClass($modalActive);
});

// jQuery and CSS animation Hamburger Nav

$(function() {

  $('.menu--toggle').on('click', function(e) {
    $('.menu').toggleClass('menu--active');
  });

});

// JQUERY Mouseover, Mouseout, and Click events:

// $(function() {
//
//   $('.gearimg').on('click mouseover', function() {
//     $(this).attr('src','images/gear.png');
//   });
//
//   $('.gearimg').on('click mouseout', function() {
//     $(this).attr('src', 'images/gear2.png');
//   });
// });

// JQUERY Mouseover, Mouseout, and Click event used on Home and About pages in Call-to-Action section:

$(function() {

  $('#download').on('click mouseover', function() {
    $(this).stop().animate({
      'font-size': '30px',
    }, 2000);
  });

  $('#download').on('click mouseout', function() {
    $(this).stop().animate({
      'font-size': '17px',
    }, 2000);
  });
});

//JQuery Scroll Down: Used on Home and About Pages in Main div on Download Now link

$(function() {

  $('.scrolldown').click(function() {
    $('html, body').animate({
      scrollTop: $(".cta").offset().top
    }, 3000)
  })
});
