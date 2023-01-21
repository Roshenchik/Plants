console.log('Plants 1: all tasks have been implemented\nsmall deviations from template, but not more 10px\nscore: 100')
console.log('Plants 1: all tasks have been implemented\nsmall deviations from template, but not more 10px\nscore: 75')

/*                                               */

const headerMenu = document.querySelector('.header__menu');
const headerList = document.querySelector('.header__list');
const headerLink = document.querySelectorAll('.header__link');
const headerNav = document.querySelectorAll('.header__nav');

headerMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  document.body.classList.toggle('lock')
	headerList.classList.toggle('active');
	headerMenu.classList.toggle('active');
})


document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(headerList);
    if ( ! withinBoundaries ) {
      remove();
    }
})

headerLink.forEach(headerLink => {
  headerLink.addEventListener('click', remove);
})

function remove(){
  if (headerMenu.classList.contains('active')) {
		document.body.classList.remove('lock')
    headerList.classList.remove('active');
		headerMenu.classList.remove('active');
  }
}




