// the following files are prepended to this through codekit:
// foundation.js
// foundation.interchange.js
// typer.js

// set up foundation js plugins
$(document).foundation();

$(function() {
	var navMenu = $('.js-nav');
	var nameLogo = $('.js-nav .name-logo');

	// custom lazy load function to work with Foundation's Interchange
	$.fn.lazyInterchange = function() {
		var selectors = this.each(function() {
		if($(this).attr('data-lazy')){
				$(this).attr('data-interchange',$(this).attr('data-lazy'));
				$(this).removeAttr('data-lazy');
				$(this).foundation('interchange', 'reflow');
			}
		});
		return selectors;
    };

	// unveil/lazy load functionality
	$('img.js-delay-load').unveil(200, function(){
		$(this).load(function(){
			$(this).lazyInterchange();
		});
	});

	// typing effect on the home page
	$('.js-typer').typed({	
		strings: ['Designer', 'Developer', 'UX Expert', 'Strategist', 'Husband', 'Father', 'Leader', 'Mentor', 'Southerner'],
		loop: true,
		typeSpeed: 100
	});

	// open menu nav
	$('.js-toggle-nav').on('click', function(e){
		$('body').addClass('has-no-scroll');
		navMenu.addClass('is-shown');
		nameLogo.addClass('logo-fade');

		e.preventDefault();
	});

	// close nav menu
	$('.js-nav-close, .js-nav a').on('click', function(){
		$('body').removeClass('has-no-scroll');
		navMenu.removeClass('is-shown');
		nameLogo.removeClass('logo-fade');
	});

	$('.js-nav-close').on('click', function(e){
		e.preventDefault();
	});

	// make interior page <aside> sticky
	$('.interior-page aside').addClass('is-sticky');

	$(window).scroll(function(){
		var intro = $('.js-intro');
		var workSidebar = $('.js-work-aside');
		var aboutSidebar = $('.js-about-aside');
		var contactSidebar = $('.js-contact-aside');
		var nextProject = $('.js-view-next-project');
		var interiorNavToggle = $('.toggle-nav-wrap');

		// add background color transition to .intro 
		if (intro[0]) {
			if ($(window).scrollTop() > 300){
				intro.addClass('has-color-transition');
			} else {
				intro.removeClass('has-color-transition');
			}
		}

		// sticky portfolio section
		if (workSidebar[0]) { // make sure item exists on the page otherwise ignore
			var workTop = $('.js-work').offset().top; // in this if statement b/c it threw errors on every scrolled pixel looking for .top value
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
		}

		// sticky about section
		if (aboutSidebar[0]) { // make sure item exists on the page otherwise ignore
			var aboutTop = $('.js-about').offset().top; // in this if statement b/c it threw errors on every scrolled pixel looking for .top value
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
		}

		// sticky contact section
		if (contactSidebar[0]) { // make sure item exists on the page otherwise ignore
			var contactTop = $('.js-contact').offset().top;
			if ($(window).scrollTop() >= contactTop){ // in this if statement b/c it threw errors on every scrolled pixel looking for .top value
				contactSidebar.addClass('is-sticky');
				contactSidebar.addClass('fadeIn');
			} else {
				contactSidebar.removeClass('is-sticky');
				contactSidebar.removeClass('fadeIn');
			}
		}

		// view next project link
		if (Modernizr.mq('only screen and (min-width: 64.0625em)')) {
			if (nextProject[0]) {
				if ($(window).scrollTop() > 100){
					nextProject.addClass('is-shown');
				}
			}
		}

		// mobile sticky nav only on 'small' and 'medium' devices
		if (Modernizr.mq('only screen and (max-width: 40em)') || Modernizr.mq('only screen and (max-width: 64em)')) {
			if($(window).scrollTop() > 20) {
				interiorNavToggle.addClass('is-sticky');
				$('aside').css('marginTop', $('.toggle-nav-wrap.is-sticky').height());
			} else {
				interiorNavToggle.removeClass('is-sticky');
				$('aside').css('marginTop', 0);
			}
		} else {
			// this removes the sticky class in case user goes from mobile to desktop without page refresh
			interiorNavToggle.removeClass('is-sticky');
			$('aside').css('marginTop', 0);
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

	// portfolio details on mobile
	$('.js-work-samples .button').on('click', function(e){
		$(this).find('.cover').addClass('show-details');
		e.preventDefault();
	});
//close jquery
});