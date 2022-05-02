var landingPage = {
	init: function(){
		this.apiCarousel();
	},
	apiCarousel: function(){
		$('.api-carousel').owlCarousel({
		    loop:true,
		    autoplay: true,
		    margin:10,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        600:{
		            items:1,
		            nav:false
		        },
		        1000:{
		            items:1,
		            nav:true,
		            loop:false
		        }
		    }
		})
	},
}
landingPage.init();