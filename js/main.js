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

// Hamburger Navigation
//
// document.addEventListener("DOMContentLoaded", () => {
// 	let navbar_list = document.getElementById('navbar--list');
// 	let navbar_toggle = document.getElementById('navbar--toggle');
// 	navbar_toggle.addEventListener('click', function () {
// 		if (this.classList.contains('active')) {
// 			navbar_list.style.display = "none";
// 			this.classList.remove('active');
// 		} else {
// 			navbar_list.style.display = "flex";
// 			this.classList.add('active');
// 		}
// 	})
// })

// jQuery and CSS animation Hamburger Nav
$(function() {

  $('.menu--toggle').on('click', function(e) {
    $('.menu').toggleClass('menu--active');
  });

});
