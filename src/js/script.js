const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: true,
	controls: false,
	nav: false,
	// responsive: {
	// 	640: {
	// 	  edgePadding: 20,
	// 	  gutter: 20,
	// 	  items: 2
	// 	},
	// 	700: {
	// 	  gutter: 30
	// 	},
	// 	900: {
	// 	  items: 3
	// 	}
	// }
  });

document.querySelector('.prev').addEventListener('click', function () {
slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
	});

$(document).ready(function(){
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	  });

	function toggleSlide(item) {
		$(item).each(function(i){
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};
	toggleSlide('.catalog-item__link')
	toggleSlide('.catalog-item__back')

	// Модальные окна

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn();
	});

	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut();
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn();
		})
	});


	function validateForms(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Введите ваше имя",
				phone: "Введите номер телефона",
				email: {
				  required: "Введите электронный адрес",
				  email: "Некорректный адрес электронной почты"
				}
			}
		})
	};

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	$('input[name=phone]').mask("+7 (999) 999-99-99");
	
	$('form').submit(function(e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function(){
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn;

			$('form').trigger('reset');
		});
		return false;
	});

	//Smooth scroll and pageup
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	new WOW().init();
});