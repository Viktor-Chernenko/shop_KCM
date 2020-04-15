$(document).ready(function () {

	//=== Кнопка подробнее в карточках товаров ===

	// let	goods_card = $('.product-card'),
	// 	goods_card_more_detailed = $('.product-card__more-detailed');

	// goods_card.hover(function () {
	// 	$(this).find(goods_card_more_detailed).css("display", "block");
			
	// 	}, function () {
	// 		$(this).find(goods_card_more_detailed).css("display", "none");
	// 	}
	// );

	// === checkbox ===

	if($(".ui-checkbox__item").length > 0) {
		$('.ui-checkbox__item:checked').parent('.ui-checkbox__box').toggleClass('ui-checkbox__box_active');
		$(".ui-checkbox").click(function () {
			$('.ui-checkbox__item').parent('.ui-checkbox__box').removeClass('ui-checkbox__box_active');
			$('.ui-checkbox__item:checked').parent('.ui-checkbox__box').toggleClass('ui-checkbox__box_active');
		}); 
	}

	// === Табы ===

	// === Табы в секции Сервис ===
	
	if($(".services-page-content__item").length > 0) {
		let tab_btn = $(".services-page .ui-tabs__label"),
			tab_content = $(".services-page-content__item");

		tab_btn.click(function () { 
			let i = $(this).index();
			tab_content.removeClass("services-page-content__item_active");
			tab_content.eq(i).addClass("services-page-content__item_active");
		}); 
	}

	// === Табы в секции Список серий ===
	
	if($(".list-series-content__item").length > 0) {
		let tab_btn = $(".list-series .ui-tabs__label"),
			tab_content = $(".list-series-content__item");

		tab_btn.click(function () { 
			let i = $(this).index();
			tab_content.removeClass("list-series-content__item_active");
			tab_content.eq(i).addClass("list-series-content__item_active");
		}); 
	}

	// === Открытие меню Каталог в header === 

	var catalog_btn = $(".btn-catalog"),
      	catalog_btn_icon = $(".btn-catalog__icon"),
	  	catalog_menu = $(".header-catalog-content__box"),
	  	user_nav_mobile_btn = $('#user-nav-btn-mobile'),
		user_nav_mobile = $('.user-nav-mobile .user-nav');
	  
	$(catalog_btn).click(function (e) {
		e.preventDefault();
		catalog_btn_icon.eq(0).toggleClass("btn-catalog__icon_active");
		catalog_btn_icon.eq(1).toggleClass("btn-catalog__icon_active");
		catalog_btn.toggleClass("btn-catalog_active");
		catalog_menu.toggleClass('header-catalog-content__box_open');

		user_nav_mobile_btn.removeClass("active");
		user_nav_mobile.removeClass('user-nav_active');

		$('#nav-btn-mobile').removeClass("active");
		$('.nav-mobile .nav__list').removeClass('nav__list_active');
	});

	// === Маска для ввода телефона в секции Сервис ===

	let form_tel = $('.services-page-form__phone'),
  		cart_form_tel = $('#cart_form_phone');

	if(form_tel.length > 0) {
		form_tel.mask("+7 (999) 999 - 9999");
	}

	if(cart_form_tel.length > 0) {
		cart_form_tel.mask("+7 (999) 999 - 9999");
	}



	// === Кнопки выбора страницы с списком товаров ===

	let pagination__btn = $(".pagination__btn");

	if(pagination__btn.length > 0) {

		pagination__btn.click(function () {
				pagination__btn.removeClass("pagination__btn_active");
				$(this).addClass("pagination__btn_active");
		});
	}

	// === Страница Корзина , выбор способа доставки ===

	 if($('.choice-method-receipt__radio').length > 0) {
		$('.choice-method-receipt__radio:checked').parent(".choice-method-receipt__box").addClass('choice-method-receipt__box_active');
		$('.choice-method-receipt__item').click(function() {
			$('.choice-method-receipt__radio').parent(".choice-method-receipt__box").removeClass('choice-method-receipt__box_active');
			$('.choice-method-receipt__radio:checked').parent(".choice-method-receipt__box").addClass('choice-method-receipt__box_active');

			$('.choice-method-receipt__item').removeClass('choice-method-receipt__item_active');
			$(this).addClass('choice-method-receipt__item_active');


			let i = $(this).index();
			$('.method-receipt-container__item').removeClass('method-receipt-container__item_active');
			$('.method-receipt-container__item').eq(i).addClass('method-receipt-container__item_active');
		})
	}

	// === Страница Корзина , выбор транспортной компании ===

	if($('.transport-company__radio').length > 0) {
		$('.transport-company__radio:checked').parent(".transport-company__item").addClass('transport-company__item_active');

		$('.transport-company__item').click(function() {
			$('.transport-company__item').removeClass('transport-company__item_active');
			$(this).addClass('transport-company__item_active');
		})
	}

	// === Страница Корзина , выбор способа оплаты ===

	if($('.cart-payment-method-box__radio').length > 0) {
		$('.cart-payment-method-box').click(function() {
			$('.cart-payment-method-box').find('.cart-payment-method-box__radio-box').removeClass('cart-payment-method-box__radio-box_active');
			$(this).find('.cart-payment-method-box__radio-box').addClass('cart-payment-method-box__radio-box_active');
		})
	}

	// === Страница Личный кабинет ===

	// === Переключение навигации ===

	if($('.user-nav__item').length > 0) {
		$('.user-nav__item').click(function() {
			$('.user-box').show();
			$('.user-settings').hide();
			$('.user-nav__item').removeClass('user-nav__item_active');
			$(this).addClass('user-nav__item_active');
			let i = $(this).index();
			$('.user-container__item').hide();
			$('.user-container__item').eq(i).show();
		})
	}

	// === Переключение навигации ===

	$('.user-box__change-data').click(function() {
		$('.user-box').hide();
		$('.user-settings').show();
		$('.user-container__item').hide();
		$('.make-deal').hide();
		$('.make-deal-complete').hide();
	})

	// === Переключение между списками товаров ===

	if($(".user-list-product__item").length > 0) {
		let tab_btn = $(".user-catalog .ui-tabs__label"),
			tab_content = $(".user-list-product__item"),
			tab_btn_active = $(".user-catalog .ui-tabs__input:checked").index();

			tab_content.hide();
			tab_content.eq(tab_btn_active).show();

		tab_btn.click(function () { 
			let i = $(this).index();
			tab_content.hide();
			tab_content.eq(i).show();

		}); 
	}

	// === / Страница Личный кабинет ===

	// === Select ===

	$(document).click(function(event) {
		if (!$(event.target).closest(".ui-dropdown__current").length) {
			$(".ui-dropdown__current").parent().removeClass('ui-dropdown--open');
		}   
	});
	
	
	
	$('.ui-dropdown__current').click(function(e){

		e.preventDefault();
		var button =  $(this),
			parent = button.parent();

		if(window.__lastOpenedButton && window.__lastOpenedButton != button)
		{
			window.__lastOpenedButton.parent().removeClass('ui-dropdown--open');
		}


		   
			parent.toggleClass('ui-dropdown--open');
			window.__lastOpenedButton = button;
	})

	
	$(".ui-dropdown").each(function() {
		var btn = $(this).find('[type="radio"]'),
			value = $(this).find('.ui-dropdown__current');
			
			btn.change(function(){
				value.text($(this).val());
			});

	});

	// === media ===

	  // === Меню навигации ===
	  
	  if($(window).width() <= 1200) {
		let user_nav_mobile_btn = $('#user-nav-btn-mobile'),
			user_nav_mobile = $('.user-nav-mobile .user-nav'),
			user_nav_item = $('.user-nav__item'),
			nav_mobile_btn = $('#nav-btn-mobile'),
			nav_mobile = $('.nav-mobile .nav__list');

		user_nav_item.click(function (e) { 
			user_nav_mobile_btn.toggleClass("active");
			user_nav_mobile.toggleClass('user-nav_active');
		});

		nav_mobile_btn.click(function (e) { 
			e.preventDefault();
			
			nav_mobile_btn.toggleClass("active");
			nav_mobile.toggleClass('nav__list_active');

			user_nav_mobile_btn.removeClass("active");
			user_nav_mobile.removeClass('user-nav_active');

			$('.btn-catalog__icon').eq(0).addClass("btn-catalog__icon_active");
			$('.btn-catalog__icon').eq(1).removeClass("btn-catalog__icon_active");
			$(".btn-catalog").removeClass("btn-catalog_active");
			$(".header-catalog-content__box").removeClass('header-catalog-content__box_open');
		});

		user_nav_mobile_btn.click(function (e) { 
			e.preventDefault();
			
			user_nav_mobile_btn.toggleClass("active");
			user_nav_mobile.toggleClass('user-nav_active');

			if($(".user-nav").hasClass("user-nav_active")) {
				$(".user-nav-mobile").css('z-index', '1000');
			} else {
				$(".user-nav-mobile").removeAttr("style");
			}

			nav_mobile_btn.removeClass("active");
			nav_mobile.removeClass('nav__list_active');

			$('.btn-catalog__icon').eq(0).addClass("btn-catalog__icon_active");
			$('.btn-catalog__icon').eq(1).removeClass("btn-catalog__icon_active");
			$(".btn-catalog").removeClass("btn-catalog_active");
			$(".header-catalog-content__box").removeClass('header-catalog-content__box_open');
		});
	  }
});