
(function () {
	// remove source link in top right corner
	$('#sourcelink').remove();

	// center heading for all pages except the blog
	if (document.location.href.indexOf('blog') < 0){
		$('h1').addClass('text-center');
	}

	// style projects page different
	if (document.title === "Projects | kaderx.com") {
		$('.section').css('margin-bottom', '70px');
	}
})();