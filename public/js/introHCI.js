// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log('Page ready');
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	$(function() {
		$('.judge-img').bind('taphold', tapholdHandler);

		function tapholdHandler(event) {
			// get the id of the event source
			var targetIdPrefix = event.target.id;
			
			// show bio
			$(`#${targetIdPrefix}-bio`).show();
		}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
	$('#rsvpForm').submit(function(e) {
		e.preventDefault();
		var rsvpEmail = $('#rsvpEmail').val();

		$.post('/addRSVP', {
			rsvpEmail: rsvpEmail
		}, postCallback);
	});

	function postCallback(res) {
		alert('RSVP form has been successfully submitted!');
		$('#rsvpEmail').val(''); // clear out the form
	}
}