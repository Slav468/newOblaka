/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import '../../scss/base/swiper.scss';
// Повний набір стилів з scss/libs/swiper.scss
// import '../../scss/libs/swiper.scss';
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Banner slider
	if (document.querySelector('.banner__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.banner__slider', {
			modules: [Navigation, Pagination],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 0,
			//autoHeight: true,
			speed: 300,
			grabCursor: true,
			//touchRatio: 0,
			// simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			// lazy: true,
			/*
			Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			// Пагінація
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			// on: {},
		});
	}
	// Directions slider
	if (document.querySelector('.directions-slider')) {
		new Swiper('.directions-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
			Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.directions-button-prev',
				nextEl: '.directions-button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},

			// Події
			// on: {},
		});
	}
	// Service slider
	if (document.querySelector('.service-slider')) {
		new Swiper('.service-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.service-button-prev',
				nextEl: '.service-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// Photo slider
	if (document.querySelector('.photo-slider')) {
		new Swiper('.photo-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
			Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.photo-button-prev',
				nextEl: '.photo-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// Reviews slider
	if (document.querySelector('.reviews-slider')) {
		new Swiper('.reviews-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
			Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.reviews-button-prev',
				nextEl: '.reviews-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				520: {
					spaceBetween: 20,
					slidesPerView: 2,
				},
			},
			// Події
			// on: {},
		});
	}
	// Employees slider
	if (document.querySelector('.employees-slider')) {
		// Вказуємо клас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.employees-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
			Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.employees-button-prev',
				nextEl: '.employees-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// Partners slider
	if (document.querySelector('.partners-slider')) {
		// Вказуємо клас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.partners-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
				Ефекти
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.partners-button-prev',
				nextEl: '.partners-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				479: {
					spaceBetween: 14,
				},
				698: {
					spaceBetween: 16,
				},
				991: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// News slider
	if (document.querySelector('.news-slider')) {
		// Вказуємо клас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.news-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
				Ефекти
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.news-button-prev',
				nextEl: '.news-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// Share slider
	if (document.querySelector('.share-slider')) {
		new Swiper('.share-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
					Ефекти
					effect: 'fade',
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.share-button-prev',
				nextEl: '.share-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// Instagram slider
	if (document.querySelector('.instagram-slider')) {
		new Swiper('.instagram-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
						Ефекти
						effect: 'fade',
						autoplay: {
							delay: 3000,
							disableOnInteraction: false,
						},
						*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
						scrollbar: {
							el: '.swiper-scrollbar',
							draggable: true,
						},
						*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.instagram-button-prev',
				nextEl: '.instagram-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// Teaser slider
	if (document.querySelector('.teaser-slider')) {
		new Swiper('.teaser-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			// slidesPerView: 4,
			// spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			// lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
							Ефекти
							effect: 'fade',
							autoplay: {
								delay: 3000,
								disableOnInteraction: false,
							},
							*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
							scrollbar: {
								el: '.swiper-scrollbar',
								draggable: true,
							},
							*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.teaser-button-prev',
				nextEl: '.teaser-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 14,
					slidesPerView: 1,
				},
				598: {
					spaceBetween: 14,
					slidesPerView: 2,
				},
				1100: {
					spaceBetween: 100,
					slidesPerView: 3,
				},
				1680: {
					spaceBetween: 100,
					slidesPerView: 4,
				},
			},
			// Події
			// on: {},
		});
	}
	// Projects slider
	if (document.querySelector('.projects-slider')) {
		new Swiper('.projects-slider', {
			modules: [Navigation],
			// loop: true,
			// loopAddBlankSlides: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			// lazy: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
							Ефекти
							effect: 'fade',
							autoplay: {
								delay: 3000,
								disableOnInteraction: false,
							},
							*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
							scrollbar: {
								el: '.swiper-scrollbar',
								draggable: true,
							},
							*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.projects-button-prev',
				nextEl: '.projects-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// Categories slider
	if (document.querySelector('.categories-slider')) {
		new Swiper('.categories-slider', {
			modules: [Navigation],
			// loop: true,
			// loopAddBlankSlides: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			autoHeight: true,
			speed: 300,
			// lazy: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
				Ефекти
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
			*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.categories-button-prev',
				nextEl: '.categories-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	if (document.querySelector('.request-slider')) {
		new Swiper('.request-slider', {
			modules: [Navigation],
			// loop: true,
			// loopAddBlankSlides: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			// lazy: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
								Ефекти
								effect: 'fade',
								autoplay: {
									delay: 3000,
									disableOnInteraction: false,
								},
								*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
								scrollbar: {
									el: '.swiper-scrollbar',
									draggable: true,
								},
								*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.request-button-prev',
				nextEl: '.request-button-next',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// Product slider in card
	if (document.querySelector('.product-slider')) {
		new Swiper('.product-slider', {
			modules: [Navigation, Pagination],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 5,
			speed: 300,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			// lazy: true,
			/*
				Ефекти
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/
			// Пагінація
			pagination: {
				el: '.product-slider__pagination',
				clickable: true,
			},
			// Скроллбар
			/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
			// Події
			// on: {},
		});
	}
	// Card Slider
	if (document.querySelector('.card-slider')) {
		new Swiper('.card-slider', {
			modules: [Navigation],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			// autoHeight: true,
			speed: 300,
			lazy: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			/*
			Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.card-button-prev',
				nextEl: '.card-button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},

			// Події
			// on: {},
		});
	}
	// Page slider
	if (document.querySelector('.page-slider')) {
		new Swiper('.page-slider', {
			modules: [Navigation, Pagination],
			// loop: true,
			// observer: true,
			// observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 170,
			// autoHeight: true,
			speed: 300,
			grabCursor: true,
			//touchRatio: 0,
			// simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			// lazy: true,
			/*
			Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			// Пагінація
			pagination: {
				el: '.page-slider__pagination',
				clickable: true,
			},
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.page-slider-prev',
				nextEl: '.page-slider-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			// on: {},
		});
	}
	// Slider general
	if (document.querySelector('.slider-general')) {
		const swiper = new Swiper('.slider-thumb', {
			modules: [Navigation, Thumbs],
			direction: 'vertical',
			spaceBetween: 10,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-thumb-next',
				prevEl: '.slider-thumb-prev',
			},
		});

		const swiper2 = new Swiper('.slider-general', {
			modules: [Navigation, Thumbs],
			slidesPerView: 'auto',
			spaceBetween: 0,
			thumbs: {
				swiper: swiper,
			},
		});
	}
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar =
				sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('DOMContentLoaded', function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	// initSlidersScroll();
});
