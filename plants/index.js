console.log('all tasks have been implemented\nsmall deviations from template, but not more 10px\nscore: 100')

/*                                               */

let headerMenu = document.getElementsByClassName('header__menu')[0];
let headerList = document.getElementsByClassName('header__list')[0];

headerMenu.addEventListener('click', () => {
	headerList.classList.toggle('active');
})
