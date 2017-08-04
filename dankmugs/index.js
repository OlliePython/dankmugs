window.onload = init;


function init() {
	$(document).ready(function() {
		$(".text").fadeIn("slow", function() {
			setTimeout(function() {
				$(".text").fadeOut("slow", function() {
					window.location.replace("intro.html");
				});
			}, 2000)
		});	
	});
}