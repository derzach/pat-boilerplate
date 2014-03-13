$(document).ready(function() {

	setBreakpointClass();

});

$(window).resize(function() {

	setBreakpointClass();

});



/*
 * Add Classes for Breakpoints
 */

function setBreakpointClass() {

	var $width = $(window).width();

	if ($width < 768) {
		$('html').attr('class', 'breakpoint-xs');
	} else if($width < 992) {
		$('html').attr('class', 'breakpoint-sm');
	} else if($width < 1200) { 
		$('html').attr('class', 'breakpoint-sm');
	} else {
		$('html').attr('class', 'breakpoint-lg');
	}

}

/*
 * Get Current Breaktpoint String
 */

function getCurrentBreakpoint() {

	if ($('html').hasClass('breakpoint-xs')) {
		return 'xs';
	} else if ($('html').hasClass('breakpoint-sm')){
		return 'sm';
	} else if ($('html').hasClass('breakpoint-md')){
		return 'md';
	} else if ($('html').hasClass('breakpoint-lg')){
		return 'lg';
	}



}


/*
 * Mobile Menu
 */


$('#navbar_mobile .sub').on('click', function(e) {
	$(this).children('ul').slideDown('slow');
	return false;
});

// Get Type and Trigger the Status with the right class

function toggleMobileNav(type){

	setMobileNavStatus($('#navbar_mobile .navbar-' + type));

}

// Set Status, if element is already active, scroll up. If not, scroll all others up and add active class.

function setMobileNavStatus($element) {

	if($element.hasClass('nav-active')) {
		$element.removeClass('nav-active');
		$element.children('.navbar-overlay').slideUp('1000');
	} else { 
		closeMobileNavs();
		$element.addClass('nav-active');
		$element.children('.navbar-overlay').slideDown('1000');
	}

}



// Scroll Up nav-active overlay and remove class

function closeMobileNavs() {
	$('#navbar_mobile .nav-active .navbar-overlay').slideUp('1000');
	$('#navbar_mobile .nav-active').removeClass('nav-active');
	$('#navbar_mobile .sub ul').slideUp('1000');
}


























