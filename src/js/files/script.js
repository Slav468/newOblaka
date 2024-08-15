// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');
	const dropButton = document.querySelectorAll('.menu__svg');
	const subDropButton = document.querySelectorAll('.submenu__svg');
	const mobileBackButtons = document.querySelectorAll('.mobile-back');
	const contactsPhoneButton = document.querySelectorAll(
		'.contacts-phone__arrow'
	);

	function dropMenu(array, selector) {
		array.forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault();
				const parentDrop = item.closest(selector);
				parentDrop.classList.add('drop');
				header.classList.add('drop');
			});
		});
	}

	dropMenu(dropButton, '.menu__item');
	dropMenu(subDropButton, '.submenu__item');
	dropMenu(contactsPhoneButton, '.contacts-phone');

	function removeDrop(array) {
		array.forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault();
				const parentDrop = item.closest('.drop');
				if (parentDrop.matches('.submenu__item')) {
					parentDrop.classList.remove('drop');
				} else {
					header.classList.remove('drop');
					parentDrop.classList.remove('drop');
				}
			});
		});
	}
	removeDrop(mobileBackButtons);
});
