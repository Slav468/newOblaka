import {
	bodyLock,
	bodyUnlock,
	menuClose,
	overlayHide,
	overlayShow,
} from './functions.js';

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
	const pageMenuButtons = document.querySelectorAll('.page-menu__svg');
	const overlay = document.querySelector('.overlay');

	// Close aside menu
	function closeAsideMenu() {
		asideCloseButton.addEventListener('click', () => {
			menuClose();
			overlayHide();
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

	// Close Element on click an press Esc
	overlay.addEventListener('click', () => {
		menuClose();
		overlayHide();
		removeSomeDrop('.aside-phone');
		removeSomeDrop('.aside-menu__item');
	});
	document.addEventListener('click', (e, selector) => {
		if (e.target.closest(`${selector}`)) {
			removeSomeDrop(`${selector}`);
		}
	});
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			menuClose();
			overlayHide();
			removeSomeDrop('.aside-phone');
			removeSomeDrop('.contacts-phone');
		}
	});

	// Enable button in form
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

	if (
		document.querySelector('.menu__list') &&
		document.querySelector('[data-menu-group]')
	) {
		hideMenuItem();
		let timeout = null;
		window.addEventListener('resize', function () {
			clearTimeout(timeout);
			timeout = setTimeout(hideMenuItem, 100);
		});
	}

	// TODO активировать при количестве элементов  > 5
	// Remove and Add menu item on resize
	function hideMenuItem() {
		const menus = document.querySelectorAll('[data-menu]');

		for (let menu of menus) {
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
				totalWidthItem + 110 < width &&
				menuListChildren.length < 9 &&
				menuLastItemListChildren.length > 1
			) {
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

	//  TODO
	// Translate menu drop on hover
	//! page menu drop
	function dropPageMenu(array, selector, event = 'click') {
		array.forEach(item => {
			item.addEventListener(`${event}`, e => {
				e.preventDefault();
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
});
