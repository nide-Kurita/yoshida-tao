import $ from 'jquery';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

export default class PageSmoothAnchor {
  constructor() {
    const urlPath = location.pathname;
    window.addEventListener('load', ()=> {
      if (urlPath === '/') {
        const anchorLinks = document.querySelectorAll('a[href^="/#"]')
        const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

        anchorLinksArr.forEach(link => {
          link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.hash;
            const targetElement = document.querySelector(targetId);
            const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;

            window.scrollTo({
              top: targetOffsetTop,
              behavior: "smooth"
            });
          });
        });
      }
    })

    // window.addEventListener('DOMContentLoaded', () => {
    //
    // });


  }

}
