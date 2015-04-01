$(function() {
	$('.js-typer').typed({
		strings: ['Designer', 'Developer', 'UX Expert', 'Strategist', 'Husband', 'Father', 'Leader', 'Mentor', 'Southerner'],
		loop: false,
        typeSpeed: 100
	});

	$(window).scroll(function(){
	  	if ($(this).scrollTop() > 1350){
			$('.work sidebar').addClass('is-sticky');
		} else {
			$('.work sidebar').removeClass('is-sticky');
		}	
	});
//close jquery    
});