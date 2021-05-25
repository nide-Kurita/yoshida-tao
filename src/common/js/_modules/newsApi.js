import $ from 'jquery';

export default class NewsApi {
  constructor() {
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=e6vSA6eqlXjCO_9xv71uhu_eaz5HO-5SSKKB-Ub0QRjGzjAF2QlfvY8fGMSqUtp2uQKgKRlxpa5ffUyrfArvmRlOoAHsjOcom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPCtL0CUkuL5InTdn9JWZeQ9p51-14R97it0p3CKBIkOO_vmTaJOdgnjhhPest2TTzOmbnRGq-tk&lib=MkGWNR-rQP_9520UTj8yGU29v2Zxi0IEI';

    fetch(url).then(function(response) {
      return response.json();

    }).then(function(json) {
      const insertDate = document.querySelectorAll('.news-list__item .date');
      const insertTitle = document.querySelectorAll('.news-list__item .text');
      const array = ['insertDate', 'insertTitle'];
      // let jsonTitle = json[i].title.replace(/\n/g, '<br>');

      insertDate.forEach((item, i) => {
        item.insertAdjacentHTML('afterbegin',json[i].date);
      });
      insertTitle.forEach((item, i) => {
        let jsonTitle = json[i].title.replace(/\n/g, '<br>');

        item.insertAdjacentHTML('afterbegin',jsonTitle);
      });

    });


  }
}
