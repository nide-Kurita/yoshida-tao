import $ from 'jquery';

export default class Navigation {
  constructor() {
    this.navOpen();
    this.navScroll();
  }

  navOpen() {
    const btn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const link = document.querySelectorAll('.header a');
    const container = document.querySelector('.container');
    const body = document.querySelector('body');

    // function scrollPrevent() {
    //   if (window.matchMedia( "(max-width: 414px)" ).matches) {
    //     if(btn.classList.contains('is-open')) {
    //       body.style.overflow = 'hidden';
    //     } else {
    //       body.style.overflow = 'auto';
    //     }
    //   }
    // }

    btn.addEventListener('click', ()=> {
      btn.classList.toggle('is-open');
      menu.classList.toggle('is-open');
      body.classList.toggle('is-open');
      // scrollPrevent();
    })

    link.forEach((item) => {
      item.addEventListener('click', ()=> {
        btn.classList.remove('is-open');
        menu.classList.remove('is-open');
        body.classList.remove('is-open');
      })
    })

    container.addEventListener('click', ()=> {
      btn.classList.remove('is-open');
      menu.classList.remove('is-open');
      body.classList.remove('is-open');
    })

  }

  navScroll() {
    const header = document.querySelector('.header-container');
    const array = ['scroll', 'load'];

    array.forEach((item, i) => {
      window.addEventListener(item, ()=> {
        const y = window.scrollY;
        if (54 < y) {
          header.classList.add('is-scroll');
        } else {
          header.classList.remove('is-scroll');
        }
      })
    });
  }
}
