
$("#showAll").click(function () {
	$(".box").removeClass('hidden');
});

// This really means hide everything else
$("#showRed").click(function () {
	$(".box").removeClass('hidden');
	$(".blue, .purple, .orange").addClass("hidden");
});

$("#showBlue").click(function () {
	$(".box").removeClass('hidden');
	$(".red, .purple, .orange").addClass("hidden")
})

$("#showOrange").click(function () {
	$(".box").removeClass('hidden');
	$(".red, .purple, .blue").addClass("hidden")
})

$("#showPurple").click(function () {
		$(".box").removeClass('hidden');
	$(".red, .blue, .orange").addClass("hidden")
})