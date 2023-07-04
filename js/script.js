const searchInput = document.querySelector('.menu__search input');
const menuSearch = document.querySelector('.menu__search-live_hide');
const liveItems = document.querySelectorAll('.menu__search-live_link');
const menuCatalogBtn = document.querySelector('.menu__main-catalog_btn');
const menuCatalog = document.querySelector('.menu__catalog');
const menuCatalogItem = document.querySelectorAll('.menu__catalog_item');
const menuCatalogOptionally = document.querySelector(
	'.menu__catalog-optionally_hide'
);

menuCatalogItem.forEach((item) => {
	item.addEventListener('click', () => {
		if (!item.classList.contains('active')) {
			menuCatalogItem.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem.classList.remove('active');
				}
			});
			item.classList.add('active');
			menuCatalogOptionally.classList.add('menu__catalog-optionally');
			menuCatalogOptionally.classList.remove(
				'menu__catalog-optionally_hide'
			);
		} else {
			item.classList.remove('active');
			menuCatalogOptionally.classList.remove('menu__catalog-optionally');
			menuCatalogOptionally.classList.add(
				'menu__catalog-optionally_hide'
			);
		}
	});
});

searchInput.addEventListener('focus', () => {
	menuSearch.classList.toggle('menu__search-live');
});

searchInput.addEventListener('blur', () => {
	menuSearch.classList.toggle('menu__search-live');
});

menuCatalogBtn.addEventListener('click', () => {
	menuCatalog.classList.toggle('menu__catalog-hide');
});

searchInput.addEventListener('input', () => {
	const liveValue = searchInput.value.trim().toLowerCase();

	liveItems.forEach((item) => {
		const itemText = item.textContent.toLowerCase();
		const itemIsVisible = item.classList.contains('hide-list') === false;

		if (itemText.includes(liveValue) && !itemIsVisible) {
			item.classList.remove('hide-list');
		} else if (!itemText.includes(liveValue) && itemIsVisible) {
			item.classList.add('hide-list');
		}
	});
});
