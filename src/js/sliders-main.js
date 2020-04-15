$(document).ready(function () {

	// === Распродажа ===

	var mySwiper = new Swiper ('.sale-swiper-container', {
		navigation: {
			nextEl: '.sale-swiper-button-next',
			prevEl: '.sale-swiper-button-prev'
		},

		pagination: {
			el: '.sale-swiper-pagination',
			clickable: 'true'
		}
	});

	// === Популярные товары ===

	var mySwiper_2 = new Swiper ('.popular .swiper-container', {
		navigation: {
			nextEl: '.popular .swiper-button-next',
			prevEl: '.popular .swiper-button-prev'
		},

		breakpoints: {
			1005: {
				slidesPerView: 4,
				spaceBetween: 20
			},

			760: {
				slidesPerView: 3,
				spaceBetween: 20
			},

			485: {
				slidesPerView: 2,
				spaceBetween: 10
			},

			0: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});

	// === Акции ===

	var mySwiper_3 = new Swiper ('.stocks .swiper-container', {
		breakpoints: {
			1005: {
				slidesPerView: 4,
				spaceBetween: 20
			},

			760: {
				slidesPerView: 3,
				spaceBetween: 20
			},

			485: {
				slidesPerView: 2,
				spaceBetween: 10
			},

			0: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		},

		navigation: {
			nextEl: '.stocks .swiper-button-next',
			prevEl: '.stocks .swiper-button-prev'
		}
	});

	// === Кресла ===

	var mySwiper_3 = new Swiper ('.armchairs .swiper-container', {
		breakpoints: {
			1005: {
				slidesPerView: 4,
				spaceBetween: 20
			},

			760: {
				slidesPerView: 3,
				spaceBetween: 20
			},

			485: {
				slidesPerView: 2,
				spaceBetween: 10
			},

			0: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		},

		navigation: {
			nextEl: '.armchairs .swiper-button-next',
			prevEl: '.armchairs .swiper-button-prev'
		}
	});

	// === Нам доверяют ===

	var mySwiper_4 = new Swiper ('.trust-us-clients .swiper-container', {
		navigation: {
			nextEl: '.trust-us-clients .swiper-button-next',
			prevEl: '.trust-us-clients .swiper-button-prev'
		},

		breakpoints: {
			1005: {
				slidesPerView: 4,
				spaceBetween: 10
			},

			760: {
				slidesPerView: 3,
				spaceBetween: 10
			},

			485: {
				slidesPerView: 2,
				spaceBetween: 10
			},

			0: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});

	// === Подробная информация о карточки товара ===

	var galleryThumbs = new Swiper ('.product-card-info-slider .gallery-thumbs', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		freeMode: true,
		loopedSlides: 5,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	  });
	  var galleryTop = new Swiper('.product-card-info-slider .gallery-top', {
		loop:true,
		loopedSlides: 5,
		spaceBetween: 20,
		navigation: {
		  nextEl: '.product-card-info-slider .swiper-button-next',
		  prevEl: '.product-card-info-slider .swiper-button-prev',
		},
		thumbs: {
		  swiper: galleryThumbs,
		},
	  });

	  // === С этим так же покупают ===

	  var mySwiper_5 = new Swiper ('.this-also-buy .swiper-container', {
		navigation: {
			nextEl: '.trust-us-clients .swiper-button-next',
			prevEl: '.trust-us-clients .swiper-button-prev'
		},

		breakpoints: {
			1005: {
				slidesPerView: 4,
				spaceBetween: 20
			},

			760: {
				slidesPerView: 3,
				spaceBetween: 20
			},

			485: {
				slidesPerView: 2,
				spaceBetween: 10
			},

			0: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});

	  // === Похожие товары ===

	  var mySwiper_6 = new Swiper ('.similar-products .swiper-container', {
		navigation: {
			nextEl: '.trust-us-clients .swiper-button-next',
			prevEl: '.trust-us-clients .swiper-button-prev'
		},

		breakpoints: {
			1005: {
				slidesPerView: 4,
				spaceBetween: 20
			},

			760: {
				slidesPerView: 3,
				spaceBetween: 20
			},

			485: {
				slidesPerView: 2,
				spaceBetween: 10
			},

			0: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});

});