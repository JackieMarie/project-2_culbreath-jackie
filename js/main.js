// To disable submit button on Contact Page

var form = document.getElementById('form')
var nameInput = document.getElementById('name');
var telephoneInput = document.getElementById('telephone');
var emailInput = document.getElementById('email');
var contactmethodInput = document.getElementById('contactmethod');
var messageInput = document.getElementById('message');
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');

console.log(nameInput);

(function() {
  var submitted = false;
  console.log(submit);
  submit.disabled = true;
  submit.className = "button--disabled";

  addEvent(nameInput, 'input', function(e) {
    console.log('hello')
  });

})();

// Modal

// var $modalTrigger = $('.modal__trigger-btn'),
//   $modal = $('.modal'),
//   $modalClose = $('.modal__close'),
//   $modalActive = '.modal--active';
//
// $modalTrigger.on('click', function(e) {
//   e.preventDefault();
//   console.log('hello');
//
//   $(this).siblings($modal).addClass($modalActive);
//   $modal.attr('aria-hidden', 'false');
// });
//
// $modalClose.on('click', function(e) {
//   e.preventDefault();
//   console.log('I am closing');
//
//   $(this).parents($modal).removeClass($modalActive);
// });

// Get Modal Element
var modal = document.getElementById('loginModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for a open click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to open modal
function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
if(e.target == modal){
	modal.style.display ='none';
	}
}
