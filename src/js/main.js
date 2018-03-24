// MAIN

// when hover over work-item, take it's data-src attr and set it as imgSrc's img attr
var workItem = $('.recent-work-list--is-home > li a');
var breakpoint = 800;
workItem.on({
	mouseenter: function () {

		var imgContainer = $('.work-item-image img')
		var currentSrc = $(this).data('src');
		if ($(window).width() >= breakpoint) {
			imgContainer.attr('src', currentSrc);
			$(this).addClass('active');
			imgContainer.addClass('active');
		}
	}
});