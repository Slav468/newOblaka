import { formValidate } from './forms/forms.js';
import { bodyLock, bodyUnlock, menuClose, overlayHide } from './functions.js';

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');
	const asideMenu = document.querySelector('.aside-menu');
	const dropButton = document.querySelectorAll('.menu__svg');
	const mobileBackButtons = document.querySelectorAll('.mobile-back');
	const contactsPhoneButton = document.querySelectorAll(
		'.contacts-phone__arrow'
	);
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
		overlayHide();
		removeSomeDrop('.aside-phone');
		removeSomeDrop('.aside-menu__item');
	});

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			menuClose();
			overlayHide();
			removeSomeDrop('.aside-phone');
			removeSomeDrop('.contacts-phone');
			removeSomeDrop('.options');
		}
	});

	// Enable button in form
	function setBtnState() {
		const forms = document.querySelectorAll('[data-form]');
		forms.forEach(form => {
			const formCheckBox = form.querySelector('[data-formCheckbox] input');
			const formBtn = form.querySelector('[data-formBtn] button');

			formCheckBox.addEventListener('change', () => {
				let isChecked = formCheckBox.checked;
				let error = formValidate.getErrors(form);

				formValidate.toggleBtnAttr(isChecked, error, formBtn);
			});
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
					<use xlink:href="img/icons/icons.svg#menuArrow"></use>
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

			if (
				totalWidthItem > width &&
				menuListChildren.length > 2 &&
				menuLastItem
			) {
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
			const accordionItems = accordion.children;
			for (let item of accordionItems) {
				item.addEventListener('click', e => {
					const targetChild = e.currentTarget;

					if (targetChild.matches('.drop')) {
						targetChild.classList.toggle('drop');
					} else {
						for (let item of accordionItems) {
							item.classList.remove('drop');
						}
						targetChild.classList.toggle('drop');
					}
				});
			}
		});
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

	// Set options in product card
	if (document.querySelector('.options')) {
		setOptions();
	}

	function setOptions() {
		const lists = document.querySelectorAll('.options .options__list');

		lists.forEach(list => {
			list.addEventListener('click', e => {
				const target = e.target;
				if (target.matches('.options__item')) {
					target.classList.toggle('active');
				}
			});
		});
	}

	// Change color
	function changeColor(variable, color) {
		document.documentElement.style.setProperty(`--${variable}`, `${color}`);
	}
});
