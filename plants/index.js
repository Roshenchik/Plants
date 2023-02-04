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
        arrow[i].classList.remove('rotated')
        container[i].classList.remove('opened')
      }
    }) 

    opened[index].classList.toggle('on')
    arrow[index].classList.toggle('rotated')
    container[index].classList.toggle('opened')
  })
})




/*                            spoiler with contacts                                 */

const contactsSelect = document.querySelector('.contacts__select');
const contactsSelectBtn = document.querySelector('.contacts__select-btn');
const contactsItems = document.querySelector('.contacts__select-items');
const contactsItem = document.querySelectorAll('.contacts__item');
const contactsAdress = document.querySelector('.contacts__adress');
const contactsTitle = document.querySelector('.contacts__select-title');
const city = document.querySelectorAll('.city-location');
const phoneNumber = document.querySelectorAll('.phone-number');
const officeArdess = document.querySelectorAll('.office-adress');
const contactsArrow = document.querySelector('.contacts__select-arrow');
const contactsPic = document.querySelector('.contacts__pic');
const callUsBtn = document.querySelector('.adress__btn');
let itemClick = 'not clicked'


contactsSelectBtn.addEventListener('click', () => {
  contactsItems.classList.toggle('active');
  contactsArrow.classList.toggle('active')

  if (itemClick == 'not clicked') {
    contactsSelectBtn.classList.toggle('active');
  }
})

contactsItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    itemClick = 'clicked'
    contactsItems.classList.remove('active');
    contactsArrow.classList.remove('active')

    addDisplayNone(city);
    addDisplayNone(phoneNumber);
    addDisplayNone(officeArdess);

    city[index].style.display = 'block';
    phoneNumber[index].style.display = 'block';
    officeArdess[index].style.display = 'block';

    contactsAdress.classList.add('active');
    contactsTitle.innerHTML = item.innerHTML;
    contactsTitle.style.fontSize = '16px';

    callUsBtn.setAttribute('href', ('tel:' + phoneNumber[index].innerHTML))

    contactsPic.classList.add('remove');

    function addDisplayNone(elements) {
      elements.forEach(el => {
        el.style.display = 'none'
      })
    }
  })
})

