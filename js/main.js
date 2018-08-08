// JQuery and CSS animation Hamburger Nav

$(function() {

  $('.menu--toggle').on('click', function(e) {
    $('.menu').toggleClass('menu--active');
  });

});

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

//JQuery scrollTop: Used on Home and About Pages in Main div on Download Now link

$(function() {

  $('.scrolldown').click(function() {
    $('html, body').animate({
      scrollTop: $(".cta").offset().top
    }, 3000)
  })
});

//To disable submit button on Sign In Modal

$(function(){
  $('#form2 .input').keyup(function() {

    var empty = false;
    $('#form2 .input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });

    if (empty) {
      $('#submit2').hasClass('button--disabled');
    } else {
      $('#submit2').removeAttr('disabled').addClass('button--primary').removeClass('button--disabled');
    }
  });

  $('#reset2').click(function() {
    $('#submit2').attr('disabled', true).addClass('button--disabled').removeClass('button--primary');
  });
}());

// JS to Disable Submit button - code from class and included code from Brittany to for reset button (she shared during the presentation)

$(function(){
  $('#form .input').keyup(function() {

    var empty = false;
    $('#form .input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });

    if (empty) {
      $('#submit').hasClass('button--disabled');
    } else {
      $('#submit').removeAttr('disabled').addClass('button--primary').removeClass('button--disabled');
    }
  });

  $('#reset').click(function() {
    $('#submit').attr('disabled', true).addClass('button--disabled').removeClass('button--primary');
  });
}());
