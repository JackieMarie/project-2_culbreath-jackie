// To disable submit button on Contact Page

var form = document.getElementById('form')
var nameInput = document.getElementById('name');
var phoneInput = document.getElementById('phone');
var emailInput = document.getElementById('email');
var methodInput = document.getElementById('method');
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
  })

})();
