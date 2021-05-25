import $ from 'jquery';
import Swiper from 'swiper';

export default class MvSwiper {
  constructor() {

    var mv = new Swiper('.mv-swiper .swiper-container', {
      loop: true,
      speed: 500,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // },
      // centeredSlides : false,
      // slidesPerView: 2,
      // spaceBetween: 10,
      // pagination: {
      //   el: '.shop-pagination',
      //   type: 'fraction',
    	// },
      // navigation: {
      //   nextEl:` .shop-nav__btn--prev-${item}`,
      //   prevEl: `.shop-nav__btn--next-${item}`,
    	// },

      // breakpoints:
      //   {
      //     768: {
      //       slidesPerView: 5,
      //       centeredSlides : true,
      //       spaceBetween: 10,
      //       slidesOffsetBefore: 0,
      //     },
      //   },
    });

  }

}
