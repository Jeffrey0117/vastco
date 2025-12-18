$(document).ready(function() {	

	// Scroll to Top
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 550);
		return false;
	});
	
	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});


	// category slider 

	var swiper = new Swiper(".categorySlider", {
		loop: true,
		spaceBetween: 20,

		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: ".sliderNextBtn1",
			prevEl: ".sliderPrevBtn1",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 8,
			}
		}
	});

	// banner slider 

	var swiper = new Swiper(".bannerSlider", {
		loop: true,
		spaceBetween: 0,
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: ".sliderNextBtn2",
			prevEl: ".sliderPrevBtn3",
		}
	});

	// noticiation marquee animation 

	  $('.slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        swipe: false,
        touchMove: false,
    });
	

	// recomanded slider 

	var swiper2 = new Swiper(".recomandedSlider", {
		loop: true,
		spaceBetween: 20,

		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: ".sliderNextBtn3",
			prevEl: ".sliderPrevBtn3",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 8,
			}
		}
	});

	// plate slider 

	var swiper3 = new Swiper(".PlateSlider", {
		loop: true,
		spaceBetween: 20,

		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: ".sliderNextBtn4",
			prevEl: ".sliderPrevBtn4",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 4,
			}
		}
	});
	var swiper4 = new Swiper(".PlateSlider2", {
		loop: true,
		spaceBetween: 20,

		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: ".sliderNextBtn5",
			prevEl: ".sliderPrevBtn5",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 4,
			}
		}
	});



	// accodion fucntion 

	 
		
});

$('.prAccordionContent').hide();

		$('.prAccordion-header').on('click', function () {

			const parentItem = $(this).closest('.prAccordion-item');
			const content = parentItem.find('.prAccordionContent');
			const icon = $(this).find('i');

			// toggle content
			content.slideToggle(300);

			// toggle icon
			if (icon.hasClass('fa-plus')) {
				icon.removeClass('fa-plus').addClass('fa-minus');
			} else {
				icon.removeClass('fa-minus').addClass('fa-plus');
			}
		});