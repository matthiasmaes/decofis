/**
* @author Matthias Maes
*/

;jQuery(function($){
	'use strict';


	$('.blockTest').hide();
	$('.servicesBlocks').hide();
	$('#hammenu').hide();



	var open = function(element){
		$('.blockTest').slideUp();
		$('.contentBlocks').css('background-color', '#f2f1f1');
		if ($('#' + element + 'Tekst').is(':visible')){
			$('#' + element + 'Tekst').slideUp();
			$('#' + element).css('background-color', '#f2f1f1');
		} else {
			$('#' + element + 'Tekst').slideDown();
			$('#' + element).css('background-color', '#f18903');
		}
	};


	$('.contentBlocks').on('click', function(e) {
		switch (e.target.tagName) {
			case 'IMG':
				open(e.target.parentElement.id);
				break;
			case 'H3':

				open(e.target.parentElement.parentElement.id);
				break;

				case 'SPAN':
				open(e.target.parentElement.parentElement.parentElement.id);
				break

		}
	});


	$('#hamIcon').on('click', function(e) {
		$('#hammenu').slideToggle();
	});





	//////////////
	// SERVICES //
	//////////////

	var targetElement = "";

	var resetServices = function(element){
		$('.servicesNav').children().children().filter('p').css('color', 'white');
		$('.servicesBlocks').slideUp();
		$(targetElement).children().children().filter('img').attr('src', 'img/icons/' + targetElement.substring(1, targetElement.length) + '.png');

	};

	$('.servicesNav').on('click', function(e, init) {
		resetServices();
		targetElement = (init == undefined) ? '#' + $(e.target).parentsUntil('ul').filter('li')[0].id : init;
		$(targetElement + 'Block').slideDown();
		$(targetElement).children().children().filter('p').css('color', '#062D5D');
		$(targetElement).children().children().filter('img').attr('src', 'img/icons/' + targetElement.substring(1, targetElement.length) + '-active.png');
	});










	$(document).ready(function() {
		$('#financial').trigger( "click", [ "#financial"]);
	});
});