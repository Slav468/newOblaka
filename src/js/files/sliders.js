/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';
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
			loop: true,
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 0,
			//autoHeight: true,
			speed: 300,
			grabCursor: true,
			//touchRatio: 0,
			// simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			lazy: true,
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
			on: {},
		});
	}
	// Directions slider
	if (document.querySelector('.directions-slider')) {
		new Swiper('.directions-slider', {
			modules: [Navigation, Pagination],
			loop: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.directions-button-prev',
				nextEl: '.directions-button-next',
			},
			/*
			Брейкпоінти
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
			on: {},
		});
	}
	// Service slider
	if (document.querySelector('.service-slider')) {
		new Swiper('.service-slider', {
			modules: [Navigation, Pagination],
			loop: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.service-button-prev',
				nextEl: '.service-button-next',
			},
			/*
			Брейкпоінти
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
			on: {},
		});
	}
	// Photo slider
	if (document.querySelector('.photo-slider')) {
		new Swiper('.photo-slider', {
			modules: [Navigation, Pagination],
			loop: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.photo-button-prev',
				nextEl: '.photo-button-next',
			},
			/*
			Брейкпоінти
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
			on: {},
		});
	}
	// Reviews slider
	if (document.querySelector('.reviews-slider')) {
		new Swiper('.reviews-slider', {
			modules: [Navigation, Pagination],
			loop: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.reviews-button-prev',
				nextEl: '.reviews-button-next',
			},
			/*
			Брейкпоінти
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
			on: {},
		});
	}
	// Employees slider
	if (document.querySelector('.employees-slider')) {
		// Вказуємо клас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.employees-slider', {
			modules: [Navigation, Pagination],
			loop: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.employees-button-prev',
				nextEl: '.employees-button-next',
			},
			/*
			Брейкпоінти
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
			on: {},
		});
	}
	// Partners slider
	if (document.querySelector('.partners-slider')) {
		// Вказуємо клас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.partners-slider', {
			modules: [Navigation, Pagination],
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
				prevEl: '.partners-button-prev',
				nextEl: '.partners-button-next',
			},
			/*
				Брейкпоінти
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
			on: {},
		});
	}
	// News slider
	if (document.querySelector('.news-slider')) {
		// Вказуємо клас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.news-slider', {
			modules: [Navigation, Pagination],
			loop: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.news-button-prev',
				nextEl: '.news-button-next',
			},
			/*
				Брейкпоінти
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
			on: {},
		});
	}
	// Share slider
	if (document.querySelector('.share-slider')) {
		new Swiper('.share-slider', {
			modules: [Navigation, Pagination],
			loop: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.share-button-prev',
				nextEl: '.share-button-next',
			},
			/*
					Брейкпоінти
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
			on: {},
		});
	}

	// Instagram slider
	if (document.querySelector('.instagram-slider')) {
		new Swiper('.instagram-slider', {
			modules: [Navigation, Pagination],
			loop: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.instagram-button-prev',
				nextEl: '.instagram-button-next',
			},
			/*
						Брейкпоінти
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
			on: {},
		});
	}
	// Teaser slider
	if (document.querySelector('.teaser-slider')) {
		new Swiper('.teaser-slider', {
			modules: [Navigation, Pagination],
			// loop: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.teaser-button-prev',
				nextEl: '.teaser-button-next',
			},
			/*
							Брейкпоінти
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
			on: {},
		});
	}
	// Projects slider
	if (document.querySelector('.projects-slider')) {
		new Swiper('.projects-slider', {
			modules: [Navigation, Pagination],
			// loop: true,
			loopAddBlankSlides: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.projects-button-prev',
				nextEl: '.projects-button-next',
			},
			/*
							Брейкпоінти
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
			on: {},
		});
	}
	// Categories slider
	if (document.querySelector('.categories-slider')) {
		new Swiper('.categories-slider', {
			modules: [Navigation, Pagination],
			// loop: true,
			loopAddBlankSlides: true,
			observer: true,
			observeParents: true,
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
				prevEl: '.categories-button-prev',
				nextEl: '.categories-button-next',
			},
			/*
								Брейкпоінти
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
			on: {},
		});
	}

	// Product slider in card
	if (document.querySelector('.product-slider')) {
		new Swiper('.product-slider', {
			modules: [Navigation, Pagination],
			loop: true,
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 5,
			//autoHeight: true,
			speed: 300,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			lazy: true,
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
				Брейкпоінти
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
			on: {},
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

window.addEventListener('load', function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	initSlidersScroll();
});
