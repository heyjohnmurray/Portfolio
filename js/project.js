$(function() {
	$('.js-typer').typed({
		strings: ['Designer', 'Developer', 'UX Expert', 'Strategist', 'Husband', 'Father', 'Leader', 'Mentor', 'Southerner'],
		loop: false,
        typeSpeed: 100
	});

	$(window).scroll(function(){
		var workSidebar = $('.js-aside');
		var workTop = $('.js-work-position').offset().top;
		//var portfolioHeight = $(document).height() - $(window).scrollTop() - $(window).height();

	  	if($(window).scrollTop() >= workTop){
			workSidebar.addClass('is-sticky');
		} else {
			workSidebar.removeClass('is-sticky');
		}

		// work on unstickying the fixed content after a certain scroll point

		// if($(window).scrollTop() >= portfolioHeight){
		// 	$('body').addClass('stooooooooop');
		// } else {

		// }
	});
//close jquery    
});