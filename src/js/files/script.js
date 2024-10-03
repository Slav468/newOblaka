// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLock, bodyUnlock } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');
	const dropButton = document.querySelectorAll('.menu__svg');
	const mobileBackButtons = document.querySelectorAll('.mobile-back');
	const contactsPhoneButton = document.querySelectorAll(
		'.contacts-phone__arrow'
	);
	const asidePhonesArrow = document.querySelectorAll('.aside-phone__arrow');
	const asideDropButtons = document.querySelectorAll('.aside-menu__svg');
	const asideCloseButton = document.querySelector('.aside-menu__close');
	const asideMenuOverlay = document.querySelector('.aside-menu__overlay');

	// Close aside menu
	function closeMenu() {
		bodyUnlock();
		document.documentElement.classList.remove('menu-open');
	}
	function closeAsideMenu() {
		asideCloseButton.addEventListener('click', () => {
			closeMenu();
		});
	}
	closeAsideMenu();

	function dropMenu(array, selector, event = 'click') {
		array.forEach(item => {
			item.addEventListener(`${event}`, e => {
				e.preventDefault();
				const target = e.currentTarget;
				const parentDrop = target.closest(selector);
				parentDrop.classList.add('drop');
				header.classList.add('drop');
			});
		});
	}

	dropMenu(dropButton, '.menu__item', 'touchstart');
	dropMenu(asideDropButtons, '.aside-menu__item');
	dropMenu(contactsPhoneButton, '.contacts-phone');
	dropMenu(asidePhonesArrow, '.aside-phone');

	function removeDrop(array, selector) {
		array.forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault();
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

	removeDrop(mobileBackButtons, '.menu__item');

	function removeSomeDrop(selector) {
		const allDrop = document.querySelectorAll(selector);
		allDrop.forEach(item => {
			item.classList.remove('drop');
		});
	}

	asideMenuOverlay.addEventListener('click', () => {
		closeMenu();
		removeSomeDrop('.aside-phone');
		removeSomeDrop('.aside-menu__item');
	});

	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			closeMenu();
			removeSomeDrop('.aside-phone');
			removeSomeDrop('.aside-menu__item');
		}
	});

	//! Enable button if form
	function toggleBtnForm() {
		const checkBoxes = document.querySelectorAll('[data-formCheckbox]');
		checkBoxes.forEach(item => {
			item.addEventListener('change', e => {
				const currTarget = e.currentTarget;
				const parentElement = currTarget.closest('[data-form]');
				const currBtn = parentElement.querySelector('[data-formBtn] button');
				const currCheck = item.querySelector('input');
				const isChecked = currCheck.checked;
				toggleBtnAttr(isChecked, currBtn);
			});
		});
	}

	function setBtnState() {
		const forms = document.querySelectorAll('[data-form]');
		forms.forEach(form => {
			const formCheckBox = form.querySelector('[data-formCheckbox] input');
			const formBtn = form.querySelector('[data-formBtn] button');
			const isChecked = formCheckBox.checked;
			toggleBtnAttr(isChecked, formBtn);
		});
	}

	function toggleBtnAttr(state, btn) {
		if (state) {
			btn.removeAttribute('disabled');
		} else {
			btn.setAttribute('disabled', '');
		}
	}

	if (document.querySelector('[data-formCheckbox]')) {
		setBtnState();
		toggleBtnForm();
	}

	// !Counter in card
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
		window.addEventListener('resize', () => {
			hideMenuItem();
		});
	}

	// Remove and Add menu item on resize

	function hideMenuItem() {
		const menus = document.querySelectorAll('[data-menu]');

		for (let menu of menus) {
			const menuBody = menu.querySelector('.menu__body');
			const menuList = menu.querySelector('.menu__list');
			const menuListChildren = menuList.children; // List items
			const menuLastItem = menuList.querySelector('[data-menu-group]'); // Item Includes menu items
			const menuLastItemList = menuLastItem.querySelector('.menu__list'); // list of item whose includes
			const menuLastItemListChildren = menuLastItemList.children;
			const styles = window.getComputedStyle(menuList, null);
			const gap = +styles.rowGap.slice(0, -2);

			let width = menuList.offsetWidth;
			let totalWidthItem = 0;
			for (let item of menuListChildren) {
				totalWidthItem += item.clientWidth;
			}

			totalWidthItem += gap * menuListChildren.length - 1;

			if (totalWidthItem > width && menuListChildren.length > 2) {
				menuRemoveChild(menuList, menuListChildren, menuLastItemList);
				hideMenuItem();
			}
			if (
				totalWidthItem + 120 < width &&
				menuListChildren.length < 8 &&
				menuLastItemListChildren.length > 1
			) {
				console.log(' if 2');
				menuBackItem(menuList, menuLastItemList, menuLastItemListChildren);
			}
		}
	}

	function menuRemoveChild(menuList, menuListChildren, menuLastItemList) {
		let element = menuList.removeChild(
			menuListChildren[menuListChildren.length - 2]
		);
		menuLastItemList.appendChild(element);
	}
	function menuBackItem(menuList, menuLastItemList, menuLastItemListChildren) {
		let element = menuLastItemList.removeChild(
			menuLastItemListChildren[menuLastItemListChildren.length - 1]
		);

		menuList.insertBefore(element, menuList.lastElementChild);
	}
});


