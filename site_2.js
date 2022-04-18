const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Клик по кнопке для скрытия / показа фильтра и изменения исконки
sidebarToggleBtn.onclick =  () => {
	menuIcon.classList.toggle('menu-icon-active');
	sidebar.classList.toggle('sidebar--mobile-active');
};

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', () => {
    hiddenCards.forEach((card) => {
        card.classList.remove(' ');
    })
});

/* Показать/скрыть контент внутри виджетов */
const widgets = document.querySelectorAll('.widget');

// Находим все виджеты на странице
widgets.forEach( (widget)  => {

    // Слушаем клик внутри виджета
    widget.addEventListener('click',  (e) => {
        // Если клик по заголовку - тогда скрываем/показывае тело виджета
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    });
});


/* Location - кнопка Любая */
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');


// Выбор кнопки Любая и отключение других чекбоксов
checkBoxAny.addEventListener('change',  () => {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach( (item) => {
			item.checked = false;
		});
    }
});

// Отключаем кнопку "Любая", при выборе других параметров
topLocationCheckboxes.forEach( (item) => {
    item.addEventListener('change',  () => {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })
});


/* Показать еще 3 доп опции с чекбоксами в фильтре */
const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (event) {

    // Если блоки были скрыты - значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
		hiddenCheckBoxes.forEach( (item) => {
			item.style.display = 'block';
		});
		showMoreOptions.innerText = 'Скрыть дополнительные опции';
		showMoreOptions.dataset.options = 'visible';
	}
	// Если блоки были видны - значит скрываем
	else if (showMoreOptions.dataset.options == 'visible') {
		hiddenCheckBoxes.forEach( (item) => {
			item.style.display = 'none';
		});
		showMoreOptions.innerText = 'Показать ещё';
		showMoreOptions.dataset.options = 'hidden';
	}
        event.preventDefault();
};