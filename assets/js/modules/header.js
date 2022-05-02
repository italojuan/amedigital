var header = {
	init: function(){
		this.toggleMenuMob();
	},
	toggleMenuMob: function(){
		$(".btn-mob").click(function(){
		    $(".btn-menu").toggleClass('active');
		    $(".primary-menu--mobile").toggleClass('active');
		});

		$('.primary-menu--mobile__item').click( function(){
			$('.primary-menu--mobile').removeClass('active');
			$('.btn-menu').removeClass('active');
		});
	},
}
header.init();