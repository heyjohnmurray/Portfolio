$(function() {
	$('.js-typer').typed({
		strings: ['Designer', 'Developer', 'UX Expert', 'Strategist', 'Husband', 'Father', 'Leader', 'Mentor', 'Southerner'],
		loop: false,
        typeSpeed: 100
	});

	$(window).scroll(function(){
		var workSidebar = $('.js-aside');
		var workTop = $('.js-work-position').offset().top;

	  	if($(window).scrollTop() >= workTop){
			workSidebar.addClass('is-sticky');
		} else {
			workSidebar.removeClass('is-sticky');
		}

		if($(window).scrollTop() >= $('.js-work-samples').offset().top + $('.js-work-samples').outerHeight() - window.innerHeight) {
			workSidebar.removeClass('is-sticky');
	    }
	});
//close jquery
});