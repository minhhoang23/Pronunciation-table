$('a').click(function (e) {
	'use strict';
	e.preventDefault();
	var audio = new Audio("sounds/" + this.id + ".mp3");
	audio.play();
});