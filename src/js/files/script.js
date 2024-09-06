// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');
	const dropButton = document.querySelectorAll('.menu__svg');
	const mobileBackButtons = document.querySelectorAll('.mobile-back');
	const contactsPhoneButton = document.querySelectorAll(
		'.contacts-phone__arrow'
	);

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
});
