console.log('Plants 1: all tasks have been implemented\nsmall deviations from template, but not more 10px\nscore: 100')
console.log('Plants 1: all tasks have been implemented\nsmall deviations from template, but not more 10px\nscore: 75')

/*                     menu                          */

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


/*                     service buttons                          */

const frames = document.querySelectorAll('.service__item')
const buttons = document.querySelectorAll('.service__btn')
const gardens = document.querySelector('.gardens')
const lawn = document.querySelector('.lawn')
const planting = document.querySelector('.planting')
const frameArr = Array.from(frames)

buttons.forEach((button, index) => {
  button.addEventListener('click', () =>{

    if (index == 0){
      blurElse(gardens)
    }
    if (index == 1){
      blurElse(lawn)
    }
    if (index == 2){
      blurElse(planting)
    }

    button.classList.toggle('active')

    if (buttons[0].classList.contains('active') && buttons[1].classList.contains('active') && buttons[2].classList.contains('active')) {
      button.classList.toggle('active')
      if (index == 0){
        blurElse(gardens)
      }
      if (index == 1){
        blurElse(lawn)
      }
      if (index == 2){
        blurElse(planting)
      }
    }

    if (!buttons[0].classList.contains('active') && !buttons[1].classList.contains('active') && !buttons[2].classList.contains('active')) {
      unblurAll()
    }
  })
})

function unblurAll() {
  frames.forEach(frame => {
    frame.classList.remove('blur')
  })
}

function blurAll() {
  frames.forEach(frame => {
    frame.classList.add('blur')
  })
}

function blurElse (category) {
  const catName = category.classList[1]
  frames.forEach(frame => {
    if (buttons[0].classList.contains('active') || buttons[1].classList.contains('active') || buttons[2].classList.contains('active')) {
      if ((frame.matches('.' + catName))) {
        frame.classList.toggle('blur')
      }
    }
    else if ((!frame.matches('.' + catName))) {
      frame.classList.add('blur')
    }
  })
}






/*                         Prices accordion                          */

const container = document.querySelectorAll('.prices__accordion-container');
const opened = document.querySelectorAll('.prices__opened');
const closed = document.querySelectorAll('.prices__closed');
const arrow = document.querySelectorAll('.prices__accordion-arrow');

closed.forEach((cls, index) => {
  cls.addEventListener('click', () => {
    
    Array.from(opened).some((el, i) => {
      if (el.classList.contains('on') && el !== opened[index]){
        el.classList.remove('on');
      }
    }) 

    /*                                  refactor maybe                           */

    Array.from(arrow).some((arr, i) => {
      if (arr.classList.contains('rotated') && arr !== arrow[index]){
        arr.classList.remove('rotated')
      }
    }) 

    opened[index].classList.toggle('on')
    arrow[index].classList.toggle('rotated')
    console.log(Array.from(opened).some((el) => el.classList.contains('on')))
  })

  if (opened[index].classList.contains('on')) {
    arrow[index].classList.toggle('rotated')
  }
})


