// $(document).ready(function(){
//   $('.carousel__inner').slick({
// 	speed: 1200,
// 	adaptiveHeight: true,
// 	// autoplay: true,
// 	// autoplaySpeed: 2000,
// 	prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
// 	nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
// 	responsive: [
// 		{
// 			breakpoint: 768,
// 			settings: {
// 			dots: true,
// 			arrows: false
// 		}
// 	}]
//   });
// });

const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
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