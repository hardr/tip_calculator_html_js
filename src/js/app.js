$(document).ready(function() {
  console.log('ready!');

});

$('.form1').submit(function(event) {
  event.preventDefault();
  var tip = ($('.input1').val() * 0.20).toFixed(2);
  $('.results1').append('<h2>You should tip $' + tip + '</h2>');
});

$('.form2').submit(function(event) {
  event.preventDefault();
  var bill = $('.input2').val();

  var tip = (bill.replace('$', '') * 0.20).toFixed(2);

  $('.results2').append('<h2>You should tip $' + tip + '</h2>');
});

$('.form3').submit(function(event) {
  event.preventDefault();
  var bill = $('.input3').val();
  var tipAmount = $('.tipAmount').val();
  var tip = (bill.replace('$', '') * tipAmount).toFixed(2);

  $('.results3').append('<h2>You should tip $' + tip + '</h2>');
});
