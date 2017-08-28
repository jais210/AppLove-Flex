$(document).ready(function(){

$('.ag').click(function(e){
  var img = e.target.src;
  var modal = '<div class="modal" id="modal"><img src="'+ img + '" class="modalImg"><div class="boton" id="boton">X</div></div>';
  $('#computin').append(modal);
  $('#boton').click(function(){
    $('#modal').remove();
  })
});

	$(document).keyup(function(e){
  if (e.which==27) {
    $('#modal').remove();
  }
});

});


// function name (a,b,c){ // pasa por referencia
// 	a++;
// 	b.push(4);
// 	c.a++;
// }

// // por copia, no pasa por la función

// let c = {a:5};
// let a = 5;
// let b = [1,2,3];
// name(a,b,c);

// console.log(a);
// console.log(b);
// console.log(c.a);




