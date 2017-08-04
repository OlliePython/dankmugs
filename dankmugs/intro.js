window.onload = init;


function init() {
	$(document).ready(function() {
		setTimeout(function() {
			$(".intro").fadeIn("slow", function() {
				$(".row").fadeIn("slow")
			});
		}, 500)
		
	});
}