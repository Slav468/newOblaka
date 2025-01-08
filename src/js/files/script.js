import noUiSlider from 'nouislider';
import { formValidate } from './forms/forms.js';
import {
	bodyLock,
	bodyUnlock,
	menuClose,
	overlayHide,
	overlayShow,
} from './functions.js';

const header = document.querySelector('header');
const asideMenu = document.querySelector('.aside-menu');
const dropButton = document.querySelectorAll('.menu__svg');
const mobileBackButtons = document.querySelectorAll('.mobile-back');
const contactsPhoneButton = document.querySelectorAll('.contacts-phone__arrow');
const asidePhonesArrow = document.querySelectorAll('.aside-phone__arrow');
const asideDropButtons = document.querySelectorAll('.aside-menu__svg');
const asideCloseButton = document.querySelector('.aside-menu__close');
const pageMenuButtons = document.querySelectorAll('.page-menu__svg');
const overlay = document.querySelector('.overlay');

// Close aside menu
function closeAsideMenu() {
	asideCloseButton.addEventListener('click', e => {
		menuClose();
		overlayHide();
	});
}
closeAsideMenu();

// Add drop
function dropMenu(array, selector, event = 'click') {
	array.forEach(item => {
		item.addEventListener(`${event}`, e => {
			const target = e.currentTarget;
			const parentDrop = target.closest(selector);
			parentDrop.classList.add('drop');
			header.classList.add('drop');
			bodyLock();
		});
	});
}

dropMenu(dropButton, '.menu__item', 'touchstart');
dropMenu(asideDropButtons, '.aside-menu__item');
dropMenu(contactsPhoneButton, '.contacts-phone', 'click');
dropMenu(asidePhonesArrow, '.aside-phone');

if (document.querySelector('.options')) {
	const optionsTitle = document.querySelectorAll('.options__title');
	dropAny(optionsTitle, '.options');
}
function dropAny(array, selector, event = 'click') {
	array.forEach(item => {
		item.addEventListener(`${event}`, e => {
			const target = e.currentTarget;
			const parentDrop = target.closest(selector);
			parentDrop.classList.toggle('drop');
		});
	});
}

function removeDrop(array, selector, parentNode) {
	array.forEach(item => {
		item.addEventListener('click', e => {
			const target = e.currentTarget;
			const dropEl = target.closest(`${selector}.drop`);
			const parent = target.closest(`${parentNode}`);
			const childFirstCircle = parent.children;
			let isParent = false;

			for (let child of childFirstCircle) {
				child === dropEl ? (isParent = true) : false;
			}

			if (isParent) {
				header.classList.remove('drop');
				dropEl.classList.remove('drop');
				bodyUnlock();
			} else {
				dropEl.classList.remove('drop');
			}
		});
	});
}

const contactsPhones = document.querySelectorAll(
	'.contacts .contacts-phone .mobile-back'
);
removeDrop(contactsPhones, '.contacts-phone', '.contacts__block');

const menuItemsBack = document.querySelectorAll('.menu__item .mobile-back');
removeDrop(menuItemsBack, '.menu__item', '[data-menulist]');

function removeDropAside(asideMenu, selector) {
	const removeButtons = asideMenu.querySelectorAll('.mobile-back');
	removeButtons.forEach(item => {
		item.addEventListener('click', e => {
			const target = e.currentTarget;
			const parentDrop = target.closest('.drop');
			if (parentDrop.matches(`${selector} .drop`)) {
				parentDrop.classList.remove('drop');
			} else {
				header.classList.remove('drop');
				parentDrop.classList.remove('drop');
			}
		});
	});
}
removeDropAside(asideMenu, '.aside-menu__item');

function removeSomeDrop(selector) {
	const allDrop = document.querySelectorAll(selector);
	allDrop.forEach(item => {
		item.classList.remove('drop');
	});
}

// Close Element on click an press Esc
overlay.addEventListener('click', () => {
	menuClose();
	removeSomeDrop('.aside-phone');
	removeSomeDrop('.aside-menu__item');
});

document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		menuClose();
		removeSomeDrop('.aside-phone');
		removeSomeDrop('.contacts-phone');
		removeSomeDrop('.options');
		removeSomeDrop('.sort');
	}
});

document.addEventListener('click', e => {
	const target = e.target;

	closeOnClickDocument(target, '.options');
	closeOnClickDocument(target, '.sort');
});

function closeOnClickDocument(eventTarget, selector, mod = 'drop') {
	if (document.querySelector(`${selector}`)) {
		if (!eventTarget.closest(`${selector}`)) {
			const elements = document.querySelectorAll(`${selector}`);
			elements.forEach(element => {
				element.classList.remove(`${mod}`);
			});
		}
	} else {
		return;
	}
}

// Enable button in form
function setBtnState() {
	const forms = document.querySelectorAll('[data-form]');
	forms.forEach(form => {
		const formCheckBox = form.querySelector('[data-formCheckbox] input');

		if (formCheckBox) {
			formCheckBox.addEventListener('change', e => {
				let error = formValidate.checkValidate(form);
				formValidate.toggleBtnAttr(error, form);
			});
		} else {
			return;
		}
	});
}

if (document.querySelector('[data-formCheckbox]')) {
	setBtnState();
}

// Counter in card
if (document.querySelector('.count')) {
	const countsBlocks = document.querySelectorAll('.count');
	countsBlocks.forEach(block => {
		block.addEventListener('click', e => {
			const target = e.target;

			if (target.closest('.count__minus')) {
				const counter = target
					.closest('.count')
					.querySelector('.count__counter');
				let num =
					+counter.textContent > 1
						? +counter.textContent--
						: +counter.textContent;
			}
			if (target.closest('.count__plus')) {
				let num = +target.closest('.count').querySelector('.count__counter')
					.textContent++;
			}
		});
	});
}

if (document.querySelector('.menu__list')) {
	hideMenuItem();
	let timeout = null;
	window.addEventListener('resize', function () {
		clearTimeout(timeout);
		timeout = setTimeout(hideMenuItem, 100);
	});
}

function addMenuEl(menuList) {
	const li = `
		<li class="menu__item" data-menu-group>
			<span class="menu__link">Ещё</span>
			<div class="menu__svg">
				<svg class="svg-arrow-down">
					<use xlink:href="/local/templates/itoblaka/img/icons/icons.svg#menuArrow"></use>
				</svg>
			</div>
			<div class="menu__drop">
				<div class="menu__content">
					<button class="mobile-back" type="button">
						<svg class="svg-arrow-back">
							<use xlink:href="img/icons/icons.svg#arrow"></use>
						</svg>
						<span>Назад</span>
					</button>
					<div class="menu__title">
						<a href="#">О компании</a>
					</div>
					<ul class="menu__list">

					</ul>
				</div>
			</div>
		</li>`;

	menuList.insertAdjacentHTML('beforeend', li);
}

// Remove and Add menu item on resize
function hideMenuItem() {
	const menus = document.querySelectorAll('[data-menu]');

	for (let menu of menus) {
		const menuList = menu.querySelector('.menu__list');
		const menuListChildren = menuList.children; // List items
		const menuLastItem = menuList.querySelector('[data-menu-group]'); // Item Includes menu items
		const menuLastItemList = menuLastItem
			? menuLastItem.querySelector('.menu__list')
			: null; // list of item whose includes
		const menuLastItemListChildren =
			menuLastItemList !== null ? menuLastItemList.children : null;
		const styles = window.getComputedStyle(menuList, null);

		const gap = +styles.rowGap.slice(0, -2);

		let width = menuList.offsetWidth;
		let totalWidthItem = 0;
		for (let item of menuListChildren) {
			totalWidthItem += item.clientWidth;
		}

		totalWidthItem += gap * menuListChildren.length - 1;

		if (menuLastItem === null && totalWidthItem > width) {
			addMenuEl(menuList);
			hideMenuItem();
			const dropButton = document.querySelectorAll(
				'[data-menu-group] > .menu__svg'
			);
			dropMenu(dropButton, '.menu__item', 'touchstart');

			const menuGroup = document.querySelectorAll('[data-menu-group]');
			for (let menu of menuGroup) {
				const back = menu.querySelector('.mobile-back');
				back.addEventListener('click', () => {
					header.classList.remove('drop');
					menu.classList.remove('drop');
					bodyUnlock();
				});
			}
		}

		if (totalWidthItem > width && menuListChildren.length > 2 && menuLastItem) {
			menuRemoveChild(menuList, menuListChildren, menuLastItemList);
			hideMenuItem();
		}

		if (
			totalWidthItem + 110 < width &&
			menuListChildren.length < 8 &&
			menuLastItem
		) {
			menuBackItem(menuList, menuLastItemList, menuLastItemListChildren);
		}
	}
}
function menuRemoveChild(menuList, menuListChildren, menuLastItemList) {
	let element = menuList.removeChild(
		menuListChildren[menuListChildren.length - 2]
	);

	menuLastItemList.insertBefore(element, menuLastItemList.firstElementChild);
}
function menuBackItem(menuList, menuLastItemList, menuLastItemListChildren) {
	let element = menuLastItemList.removeChild(menuLastItemListChildren[0]);
	menuList.insertBefore(element, menuList.lastElementChild);
}

// page menu drop
function dropPageMenu(array, selector, event = 'click') {
	array.forEach(item => {
		item.addEventListener(`${event}`, e => {
			const target = e.currentTarget;
			const parentDrop = target.closest(selector);
			parentDrop.classList.toggle('drop');
		});
	});
}

if (document.querySelector('.page-menu')) {
	dropPageMenu(pageMenuButtons, '.page-menu__item');
}

// Accordion toggle
function eventAccord() {
	const accordingAll = document.querySelectorAll('.accordion');

	accordingAll.forEach(accordion => {
		const accordionChildren = accordion.children;
		for (const item of accordionChildren) {
			item.addEventListener('click', e => {
				const target = e.target;

				if (target.closest('.accordion__head')) {
					if (item.classList.contains('drop')) {
						item.classList.toggle('drop');
					} else {
						removeDropAccordion(target);
						item.classList.add('drop');
					}
				}
			});
		}
	});
}

function removeDropAccordion(target) {
	const accordions = target.closest('.accordion');

	for (const item of accordions.children) {
		item.classList.remove('drop');
	}
}

if (document.querySelector('.accordion')) {
	eventAccord();
}

function uploadFileInForm() {
	const popupUploadButtons = document.querySelectorAll('.upload__button');
	popupUploadButtons.forEach(button => {
		button.addEventListener('click', e => {
			e.preventDefault();

			const target = e.currentTarget;
			const inputTarget = target.parentElement.previousElementSibling;
			inputTarget.click();
			inputTarget.addEventListener('change', e => {
				let currentFileName = '';
				const spanText =
					e.currentTarget.nextElementSibling.querySelector('span');

				if (e.currentTarget.files.length > 0) {
					const fileName = e.currentTarget.files[0].name;
					currentFileName = fileName.split('.')[0];

					spanText.textContent = '';
					spanText.textContent = `${currentFileName.slice(0, 22)}...`;
				} else {
					spanText.textContent = '';
					currentFileName = 'Файл не выбран';
					spanText.textContent = `${currentFileName}`;
				}
			});
		});
	});
}

// Form file upload
if (document.querySelector('.upload__button')) {
	uploadFileInForm();
}

// Load content for page scroll
if (document.querySelector('.hidden')) {
	document.addEventListener('scroll', () => {
		const hidden = document.querySelectorAll('.hidden');
		if (hidden.length > 0) {
			removeHiddenClass(hidden);
		}
	});
}

function removeHiddenClass(hidden) {
	const parent = hidden[0].parentElement;
	const allItemsNotHidden = document.querySelectorAll(
		`${parent.tagName} > *:not(.hidden)`
	);

	const itemCoord =
		allItemsNotHidden[allItemsNotHidden.length - 1].getBoundingClientRect();
	const itemHeight = itemCoord.height;

	if (itemCoord.top <= itemHeight + itemHeight) {
		hidden[0].classList.remove('hidden');
	} else {
		return;
	}
}

if (header.hasAttribute('data-fixed')) {
	window.addEventListener('scroll', e => {
		fixedHeader();
	});
}

function fixedHeader() {
	const header = document.querySelector('.header');
	const headerHeight = header.getBoundingClientRect().height;
	const scrollY = window.scrollY;
	const main = document.querySelector('.header + *');

	if (scrollY >= headerHeight * 2) {
		header.classList.add('header_fixed');
		main.style.paddingTop = `${headerHeight + 20}px`;
	} else {
		header.classList.remove('header_fixed');
		main.style.paddingTop = ``;
	}
}

// Show block on timeout
function setTimeOutPopup(cb, selector, delay) {
	setTimeout(() => {
		cb(selector);
	}, delay);
}

if (document.querySelector('.cookie-plank')) {
	setTimeOutPopup(cookieActive, '.cookie-plank', 1500);

	const cookieBtn = document.querySelector('[data-cookieBtn]');
	cookieBtn.addEventListener('click', e => {
		e.preventDefault();
		const item = document.querySelector(`.cookie-plank`);
		item.classList.remove('active');
	});
}

function cookieActive(selector) {
	const item = document.querySelector(`${selector}`);
	item.classList.add('active');
}

function toggleActive(element) {
	element.classList.toggle('active');
}

if (document.querySelector('.card-controls')) {
	const cardControls = document.querySelectorAll('.card-controls');
	for (let card of cardControls) {
		card.addEventListener('click', e => {
			const target = e.target;
			if (target.closest('.card-controls__wrapper')) {
				toggleActive(target.closest('.card-controls__wrapper'));
			}
		});
	}
}

if (document.querySelector('.bar-right')) {
	const cardControls = document.querySelectorAll('.bar-right');
	for (let card of cardControls) {
		card.addEventListener('click', e => {
			const target = e.target;
			if (target.closest('.bar-right__item')) {
				toggleActive(target.closest('.bar-right__item'));
			}
		});
	}
}

// Set options in product card
if (document.querySelector('.options')) {
	setOptions();
}

function setOptions() {
	const lists = document.querySelectorAll('.options .options__list');

	lists.forEach(list => {
		list.addEventListener('click', e => {
			const target = e.target;
			const listChildren = list.children;
			for (let child of listChildren) {
				child.classList.remove('active');
			}
			if (target.matches('.options__item')) {
				target.classList.toggle('active');
			}
		});
	});
}

// set variables in card details
if (document.querySelector('.card-variable')) {
	setVariable();
}
function setVariable() {
	const parentVariablesItems = document.querySelectorAll('.card-variable');
	for (let parent of parentVariablesItems) {
		// card-variables__items
		const children = parent.children;
		for (let child of children) {
			const childTitle = child.querySelector('.card-variable__title');
			const childTitleValue = child.getAttribute('data-variable-title');
			const buttons = child.getElementsByTagName('button');
			childTitleValue
				? (childTitle.innerHTML = `${childTitleValue}: <span>Не выбрано</span>`)
				: false;
			for (let button of buttons) {
				setActiveVariable(buttons, button);
				if (button.hasAttribute('data-color-value')) {
					button.style.backgroundColor = `${button.dataset.colorValue}`;
				}
				if (button.hasAttribute('data-value')) {
					button.textContent = `${button.dataset.value}`;
				}
				setTitleTextActiveEl(button);
			}
		}
	}
}

if (document.querySelector('.options')) {
	setButtonProperty('.options__list');
}

function setButtonProperty(parentSelector) {
	const parents = document.querySelectorAll(parentSelector);
	for (let parent of parents) {
		const buttons = parent.children;
		for (let button of buttons) {
			if (button.hasAttribute('data-color-value')) {
				button.style.backgroundColor = `${button.dataset.colorValue}`;
			}
			if (button.hasAttribute('data-value')) {
				button.textContent = `${button.dataset.value}`;
			}
		}
	}
}
function setActiveVariable(parent, button) {
	button.addEventListener('click', e => {
		const target = e.target;
		for (let child of parent) {
			child.classList.remove('active');
		}

		target.classList.add('active');

		setTitleTextActiveEl(button);
	});
}
function setTitleTextActiveEl(button) {
	const parent = button.parentNode;
	const parentItem = button.closest('.card-variable__item');
	const span = parentItem.querySelector('.card-variable__title span');
	for (let child of parent.children) {
		if (child.classList.contains('active')) {
			span.textContent = `${child.dataset.title}`;
		}
	}
}

// Drop sort
if (document.querySelector('.sort')) {
	dropSort('.sort', '.sort__title');
	setActive('.sort__content', '.sort');
}

function dropSort(parent, head) {
	const sort = document.querySelector(`${parent}`);
	const title = sort.querySelector(`${head}`);
	title.addEventListener('click', e => {
		sort.classList.toggle('drop');
	});
}

function setActive(parent, parentBlock) {
	const parentItem = document.querySelector(`${parent}`);
	const childrenItem = parentItem.children;
	for (let child of childrenItem) {
		child.addEventListener('click', e => {
			e.preventDefault();
			removeSomeActive(childrenItem);
			child.classList.add('active');
			child.closest(`${parentBlock}`).classList.remove('drop');
		});
	}
}
function removeSomeActive(collection) {
	for (let child of collection) {
		child.classList.remove('active');
	}
}

// Filter menu
if (document.querySelector('.filter-menu')) {
	const filterMenuButton = document.querySelector('.filter__button');
	const filter = document.querySelector('.filter-menu');
	function filterMenuActive(button) {
		button.addEventListener('click', e => {
			filterActivated(filter);
		});
	}

	function filterActivated(parent) {
		parent.classList.toggle('active');
		overlayShow();
		bodyLock();
	}

	function removeActive(parent) {
		parent.classList.remove('active');
		overlayHide();
		bodyUnlock();
	}

	filterMenuActive(filterMenuButton);

	function closeFilterMenu(parent, selector) {
		const filterClose = parent.querySelector(selector);
		filterClose.addEventListener('click', e => {
			removeActive(filter);
		});
	}

	closeFilterMenu(filter, '.aside-menu__close');
	removeDropAside(filter, '.aside-menu__item');

	overlay.addEventListener('click', () => {
		removeActive(filter);
	});

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			removeActive(filter);
		}
	});
}

// noUSlider
if (document.getElementById('price-slider')) {
	const slider = document.getElementById('price-slider');
	const inputRangeMin = document.getElementById('minCost');
	const rangeMinValue = +inputRangeMin.getAttribute('min');
	const inputRangeMax = document.getElementById('maxCost');
	const rangeMaxValue = +inputRangeMax.getAttribute('max');
	const pageMaxValue = +inputRangeMax.getAttribute('data-max-value');
	const inputs = [inputRangeMin, inputRangeMax];

	noUiSlider.create(slider, {
		start: [rangeMinValue, rangeMaxValue],
		behaviour: 'tap',
		connect: true,
		tooltips: [true, wNumb({ decimals: 0 })],
		format: wNumb({
			decimals: 0,
		}),
		range: {
			min: 0,
			max: pageMaxValue,
		},
	});

	slider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = values[handle];
	});
	inputs.forEach(function (input, handle) {
		input.addEventListener('change', function () {
			slider.noUiSlider.setHandle(handle, this.value);
		});

		input.addEventListener('keydown', function (e) {
			let values = slider.noUiSlider.get();
			let value = Number(values[handle]);

			let steps = slider.noUiSlider.steps();

			// [down, up]
			let step = steps[handle];
			let position;
		});
	});
}

// Change color
function changeColor(variable, color) {
	document.documentElement.style.setProperty(`--${variable}`, `${color}`);
}

// Basket element control

if (document.querySelector('.basket-list')) {
	const list = document.querySelector('.basket-list__wrapper');
	const reset = document.querySelector('.basket-reset');
	const menu = document.querySelector('.basket-menu');
	if (list.children.length < 1) {
		reset.remove();
		menu.remove();
		list.innerHTML = `<div class="basket-empty">
			<div class="basket-empty__title">Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку «В корзину»</div>
				<a href='#' class='button'>В каталог</a>
			</div>`;
	} else {
		removeElement(
			'.basket-list__wrapper',
			'.basket-item__remove',
			'.basket-item',
			'.basket-reset'
		);
	}
}

function removeElement(el, trigger, parent, check) {
	const basketList = document.querySelector(`${el}`);
	const elements = basketList.children;

	for (let element of elements) {
		element.addEventListener('click', e => {
			const target = e.target;
			if (target.closest(`${trigger}`)) {
				const parentEl = target.closest(`${parent}`);
				parentEl.remove();
				checkElements(basketList, elements, check);
			}
		});
	}
}

function checkElements(parent, el, trigger) {
	const resetElements = document.querySelector(`${trigger}`);
	const menu = document.querySelector('.basket-menu');
	if (el.length < 1) {
		resetElements.remove();
		menu.remove();
		parent.innerHTML = `<div class="basket-empty">
			<div class="basket-empty__title">Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку «В корзину»</div>
			<a href='#' class='button'>В каталог</a>
		</div>`;
	}
}

if (document.querySelector('.basket-reset')) {
	const resetButton = document.querySelector('.basket-reset');
	resetButton.addEventListener('click', e => {
		resetButton.remove();
		const menu = document.querySelector('.basket-menu');
		menu.remove();
		const basketList = document.querySelector('.basket-list__wrapper');
		basketList.innerHTML = `<div class="basket-empty">
				<div class="basket-empty__title">Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку «В корзину»</div>
				<a href='#' class='button'>В каталог</a>
			</div>`;
	});
}
