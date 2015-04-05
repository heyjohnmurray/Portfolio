$(function() {
	$('.js-typer').typed({
		strings: ['Designer', 'Developer', 'UX Expert', 'Strategist', 'Husband', 'Father', 'Leader', 'Mentor', 'Southerner'],
		loop: false,
        typeSpeed: 100
	});

	$(window).scroll(function(){
		var workSidebar = $('.js-work-aside');
		var aboutSidebar = $('.js-about-aside');
		var workTop = $('.js-work').offset().top;
		var aboutTop = $('.js-about').offset().top;

	  	if($(window).scrollTop() >= workTop){
			workSidebar.addClass('is-sticky');
		} else {
			workSidebar.removeClass('is-sticky');
		}

		if($(window).scrollTop() >= $('.js-work-samples').offset().top + $('.js-work-samples').outerHeight() - window.innerHeight) {
			workSidebar.removeClass('is-sticky');
	    }

	    if($(window).scrollTop() >= aboutTop){
			aboutSidebar.addClass('is-sticky');
		} else {
			aboutSidebar.removeClass('is-sticky');
		}

		if($(window).scrollTop() >= $('.js-about-bio').offset().top + $('..js-about-bio').outerHeight() - window.innerHeight) {
			aboutSidebar.removeClass('is-sticky');
	    }
	});
//close jquery
});