$(function() {
	$('.js-typer').typed({
		strings: ['Designer', 'Developer', 'UX Expert', 'Strategist', 'Husband', 'Father', 'Leader', 'Mentor', 'Southerner'],
		loop: false,
		typeSpeed: 100
	});

	$(window).scroll(function(){
		var workTop = $('.js-work').offset().top;
		var aboutTop = $('.js-about').offset().top;
		var contactTop = $('.js-contact').offset().top;
		var workSidebar = $('.js-work-aside');
		var aboutSidebar = $('.js-about-aside');
		var contactSidebar = $('.js-contact-aside');

		// sticky portfolio section

		if ($(window).scrollTop() >= workTop){
			workSidebar.addClass('is-sticky');
			workSidebar.addClass('fadeIn');
		} else {
			workSidebar.removeClass('is-sticky');
			workSidebar.removeClass('fadeIn');
		}

		if ($(window).scrollTop() >= $('.js-work-samples').offset().top + $('.js-work-samples').outerHeight() - window.innerHeight) {
			workSidebar.removeClass('is-sticky');
			workSidebar.removeClass('fadeIn');
		}

		// sticky about section

		if ($(window).scrollTop() >= aboutTop){
			aboutSidebar.addClass('is-sticky');
			aboutSidebar.addClass('fadeIn');
		} else {
			aboutSidebar.removeClass('is-sticky');
			aboutSidebar.removeClass('fadeIn');
		}

		if($(window).scrollTop() >= $('.js-about-bio').offset().top + $('.js-about-bio').outerHeight() - window.innerHeight) {
			aboutSidebar.removeClass('is-sticky');
			aboutSidebar.removeClass('fadeIn');
		}

		// sticky contact section

		if ($(window).scrollTop() >= contactTop){
			contactSidebar.addClass('is-sticky');
			contactSidebar.addClass('fadeIn');
		} else {
			contactSidebar.removeClass('is-sticky');
			contactSidebar.removeClass('fadeIn');
		}

		if($(window).scrollTop() >= $('.js-contact-info').offset().top + $('.js-contact-info').outerHeight() - window.innerHeight) {
			aboutSidebar.removeClass('is-sticky');
			aboutSidebar.removeClass('fadeIn');
	    }

	});
//close jquery
});