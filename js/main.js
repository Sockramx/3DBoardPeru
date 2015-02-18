function SoloTexto() {
	if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122)){
	 	event.returnValue = false;	
	}
}
var indicador = 0;

$(document).ready(function(){
	$('.left').on('click', function(e){
		e.preventDefault();
		moveSlider('left');
	});
	$('.right').on('click', function(e){
		e.preventDefault();
		moveSlider('right');
	});
	defineSizes();
});
$(window).on('resize', defineSizes);
function defineSizes(){
	$('.slide').each(function(i,el){
		$(el).css({
			'background-image': "url("+$(el).data("background")+")",
			'height': ($('.slider_container').width() * 0.4)+ 'px',
			'width': $('.slider_container').width() + 'px',
		});

	});

	$('.slidercontainer').css({
		'margin-left': -(indicador * $('.slider_container').width()) + 'px'
	});
}

function moveSlider(direccion){
	var limite = $('.slide').length;
	indicador = (direccion == 'right') ? indicador + 1 : indicador - 1;
	indicador = (indicador >= limite) ? 0 : indicador;
	indicador = (indicador < 0) ? limite - 1 : indicador;
	$('.slidercontainer').animate({
		'margin-left': -(indicador * $('.slider_container').width()) + 'px'
	});

}


/* ------ ------ */

// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});