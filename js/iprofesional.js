var windowWidth = $(window).width();
var windowHeight = $(window).height();

// MENU EFECTOS

		$(window).scroll(function() {  
		   if($(window).scrollTop() >= (windowHeight/2)) {
				setTimeout(function(){
					$(".cabezalmobile .seccionesexpandido").fadeOut( 300, function(){
						$(".cabezalmobile .logotipoblanco").fadeIn( 300);
					});
				}, 300);
			} 
			if($(window).scrollTop() < (windowHeight/2)) {
				setTimeout(function(){
					$(".cabezalmobile .logotipoblanco").fadeOut( 300, function(){
						$(".cabezalmobile .seccionesexpandido").fadeIn( 300);
					});
				}, 300);
			}
		});
		if($(window).scrollTop() > (windowHeight/2-25)) {
			$(".cabezalmobile .logotipoblanco").hide();
			$(".cabezalmobile .seccionesexpandido").show();
		} 




	// SLIDER ZOOM RECOMENDADAS
	var swiper = new Swiper('.swiper-container1', {
		pagination: {
			el: '.swiper-pagination1',
		},
		loop:true,
		autoplay:5000,
		slidesPerView: 2,
		slidesPerColumn: 1,
		paginationClickable: true,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		spaceBetween: 15
	});
	// BRIEFING
	var swiper = new Swiper('.swiper-container2', {
		pagination: {
			el: '.swiper-pagination2',
		},
		loop:true,
		autoplay:5000,
		slidesPerView: 2,
		slidesPerColumn: 1,
		paginationClickable: true,
		spaceBetween: 15
	});
	// SLIDER DESTACADAS DE OTROS MEDIOS
	var swiper = new Swiper('.swiper-container3', {
		pagination: {
			el: '.swiper-pagination3',
		},
		loop:true,
		autoplay:10000,
		slidesPerView: 2,
		slidesPerColumn: 1,
		paginationClickable: true,
		spaceBetween: 15
	});
	// NOTA MEDIANA CON SLIDER 1
	var swiper = new Swiper('.swiper-container_med1', {
		pagination: {
			el: '.swiper-pagination_med1',
		},
		loop:true,
		autoplay:5000,
		slidesPerView: 1,
		slidesPerColumn: 1,
		paginationClickable: true,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next1',
			prevEl: '.swiper-button-prev1',
		},
		spaceBetween: 30
	});
	// NOTA MEDIANA CON SLIDER 2
	var swiper = new Swiper('.swiper-container_med2', {
		pagination: {
			el: '.swiper-pagination_med2',
		},
		loop:true,
		autoplay:5000,
		slidesPerView: 1,
		slidesPerColumn: 1,
		paginationClickable: true,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next2',
			prevEl: '.swiper-button-prev2',
		},
		spaceBetween: 30
	});
	// NOTA MEDIANA CON SLIDER 3
	var swiper = new Swiper('.swiper-container_med3', {
		pagination: {
			el: '.swiper-pagination_med3',
		},
		loop:true,
		autoplay:5000,
		slidesPerView: 1,
		slidesPerColumn: 1,
		paginationClickable: true,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next3',
			prevEl: '.swiper-button-prev3',
		},
		spaceBetween: 30
	});

	// GALERIA NOTA BOMBA
	var swiper = new Swiper('.swiper-galeria', {
		// Lazy loading
		lazy: true,
		pagination: {
			el: '.swiper-pagination-galeria',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next-galeria',
			prevEl: '.swiper-button-prev-galeria',
		},
	});

	// MENU
	function funcionMenu() {
		var x = document.getElementById('menuflotante');
		if (x.style.display === 'block') {
			x.style.display = 'none';
			$('.botonmenu').removeClass('botonmenuclose');
			event.preventDefault();
		} else {
			x.style.display = 'block';
			$('.botonmenu').addClass('botonmenuclose');
			event.preventDefault();
		}
	}
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll) {
			$('#menuflotante').fadeOut('fast');
			$('.botonmenu').removeClass('botonmenuclose');
			event.preventDefault();
		}
	});

	// BUSCADOR
	function abrirBuscador() {
		var b = document.getElementById('buscador');
		b.style.display = 'block';
		event.preventDefault();
	}
	function cerrarBuscador() {
		var b = document.getElementById('buscador');
		b.style.display = 'none';
		event.preventDefault();
	}


	// Fancybox
	$(document).ready(function() {
		$('.fancybox').fancybox();
	});

	// Scroll top

	$(document).ready(function(){
		$("a").on('click', function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 2000, function(){
					window.location.hash = hash;
				});
			}
		});
	});

	// Checkbox switchers areas de interes suscripcion

	$('.checkbox')
	.mousedown(function(){
		$(this).toggleClass('checkbox-on checkbox-off');
	});
	

	$(".botonconfigurartipo").click(function() {
		$(".cajasuscripcion").slideToggle("slow");
	});

	// Lazy Load

	$("img.lazy").lazyload();
