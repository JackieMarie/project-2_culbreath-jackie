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
})()

// Valid email address - rules on Contact Page

$(function() {
  $('#form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      email: 'Please enter a valid email'
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

// Modal

var $modalTrigger = $('.modal__trigger-btn'),
  $modalContainer = $('.modal__container'),
  $modalClose = $('.modal__close'),
  $modalActive = 'modal--active';

$modalTrigger.on('click', function(e) {
  e.preventDefault();
  console.log('hello');

  $($modalContainer).addClass($modalActive);
  $modalContainer.attr('aria-hidden', 'false');
});

$modalClose.on('click', function(e) {
  e.preventDefault();
  console.log('I am closing');

  $($modalContainer).removeClass($modalActive);
});
