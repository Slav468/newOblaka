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
	const asideDropButtons = document.querySelectorAll('.aside-menu__svg');
	const asideCloseButton = document.querySelector('.aside-menu__close');

	// Validate the form
	// const EMAIL_PATTERN = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/);
	// const PHONE_PATTERN = new RegExp(
	// 	/^\+375[\s|-]?[0-9]{2}[\s|-]?[0-9]{3}[\s|-]?[0-9]{2}[\s|-]?[0-9]{2}$/
	// );

	function closeAsideMenu() {
		asideCloseButton.addEventListener('click', () => {
			bodyUnlock();
			document.documentElement.classList.remove('menu-open');
		});
	}
	closeAsideMenu();

	function dropMenu(array, selector) {
		array.forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault();
				const target = e.currentTarget;
				const parentDrop = target.closest(selector);
				parentDrop.classList.add('drop');
				header.classList.add('drop');
			});
		});
	}
	dropMenu(dropButton, '.menu__item');
	dropMenu(asideDropButtons, '.aside-menu__item');
	dropMenu(contactsPhoneButton, '.contacts-phone');

	function removeDrop(array) {
		array.forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault();
				const target = e.currentTarget;
				const parentDrop = target.closest('.drop');
				if (parentDrop.matches('.menu__item .drop')) {
					parentDrop.classList.remove('drop');
				} else {
					header.classList.remove('drop');
					parentDrop.classList.remove('drop');
				}
			});
		});
	}
	removeDrop(mobileBackButtons);

	window.addEventListener('resize', () => {
		const subMenu = document.getElementById('dotted-menu');
		const menu = document.querySelector('.menu');
		const menuList = document.querySelector('.menu__list');
		const menuItems = menuList.children;
		const subMenuItems = subMenu.children;

		let width = menu.offsetWidth;
		let totalWidthItem = 0;

		for (let item of menuItems) {
			totalWidthItem += item.clientWidth + 983 * 0.035;
		}

		if (totalWidthItem >= width && menuItems.length > 2) {
			let element = menuList.removeChild(menuItems[menuItems.length - 2]);
			subMenu.append(element);
		} else {
			// let element = subMenu.removeChild(subMenuItems[subMenuItems.length - 2]);
			// menuList.append(element);
			return;
		}
	});

	// Enable button if form
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
});
