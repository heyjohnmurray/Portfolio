// the following files are prepended to this through codekit:
// foundation.js
// foundation.interchange.js
// typer.js

$(function() {
	var navMenu = $('.js-nav');
	var nameLogo = $('.js-nav .name-logo');

	// typing effect on the home page
	$('.js-typer').typed({
		strings: ['Designer', 'Developer', 'UX Expert', 'Strategist', 'Husband', 'Father', 'Leader', 'Mentor', 'Southerner'],
		loop: true,
		typeSpeed: 100
	});

	// open menu nav
	$('.js-toggle-nav').on('click', function(e){
		navMenu.addClass('is-shown');
		nameLogo.addClass('logo-fade');

		e.preventDefault();
	});

	// close nav menu
	$('.js-nav-close, .js-nav a').on('click', function(){
		navMenu.removeClass('is-shown');
		nameLogo.removeClass('logo-fade');
	});

	$('.js-nav-close').on('click', function(e){
		e.preventDefault();
	});

	// make interior page <aside> sticky
	$('.interior-page aside').addClass('is-sticky');

	$(window).scroll(function(){
		var workTop = $('.js-work').offset().top;
		var aboutTop = $('.js-about').offset().top;
		var contactTop = $('.js-contact').offset().top;
		var workSidebar = $('.js-work-aside');
		var aboutSidebar = $('.js-about-aside');
		var contactSidebar = $('.js-contact-aside');

		// add background color transition to .intro 
		if ($(window).scrollTop() > 300){
			$('.intro').addClass('has-color-transition');
		} else {
			$('.intro').removeClass('has-color-transition');
		}

		// sticky portfolio section
		if ($(window).scrollTop() >= workTop){
			workSidebar.addClass('is-sticky');
			workSidebar.addClass('fadeIn');
		} else {
			workSidebar.removeClass('is-sticky');
			workSidebar.removeClass('fadeIn');
		}

		// turn off sticky at the bottom of the portfolio section
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

		// turn off sticky at the bottom of the about section
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
	});

	// scrolling links
	$('a[href^="#"]').on('click',function (e) {
		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top + 1 // add a pixel to trigger transition fadeIn
		}, 1000, 'swing', function () {
			window.location.hash = target;
		});

		e.preventDefault();
	});
//close jquery
});