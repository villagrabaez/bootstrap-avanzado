// Document ready

$(document).ready(function(){
  // alert('jQuery Listo!');
  $('#parrafo').text("Hola Mundo!");

  $('.saludo').css({'background-color':'red', 'text-align':'center'});

  $('div').text("Hola DIV");
});

// Diferentes formas de activar el metodo ready()

// Forma 1 - Recomendada
$(function(){
  // alert('Primera forma');
});

// Forma 2
$().ready(function(){
  // alert('Segunda forma');
});

// Forma 3
$(document).ready(function(){
  // alert('Tercera forma');
});

// Forma 4
$('h1').ready(function(){
  // alert('Cuarta forma');
});

// Manejo de errores en jQuery

$.when($.ready, $.getScript('js/index.js'))
  .then(function(){
    // console.log('paso');
  })
  .catch(function(){
    // console.log('no paso');
  })

// Setters && Getters
$(function(){
  var saludo = $('.saludo').html(); // Get
  var atributo = $('h1').attr('class', 'hola'); // Get y Set
  var atributo_id = $('h1').attr('id'); // Get
  console.log(saludo + ' ' + atributo + ' ' + atributo_id);
})

// Medoto CSS
$(document).ready(function(){
  $('.saludo').css({'background-color':'red', 'text-align':'center'});
});

// Manejo de clases: hasClass, removeClass, addClass
$(document).ready(function(){
  var hasClass = $('#parrafo').hasClass('saludo');
  if (hasClass) {
    alert('Tiene clase!');
    $('#parrafo').removeClass('saludo');
  } else {
    alert('No tiene clase :(');
    $('#parrafo').addClass('saludo');
  }
});

// Metodos Show && Hide
$(document).ready(function(){
  var classP = $('p').attr('class');
  if (classP == 'saludo') {
    $('p').hide();
  }
});