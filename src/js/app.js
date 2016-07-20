$(document).ready(function() {
  console.log("ready!");

});

$('form').submit(function(event) {
  event.preventDefault();
  var tip = ($('.bill').val() * .2).toFixed(2);
  $('.results').append('<h2>You should tip $' + tip + '</h2>');
})
