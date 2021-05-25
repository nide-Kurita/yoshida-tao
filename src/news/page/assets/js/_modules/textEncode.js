import $ from 'jquery';

export default class TextEncode {
  constructor() {
    const targetText = document.querySelectorAll('.news-text');
    // console.log(targetText);
    targetText.forEach((item, i) => {
      let str = item.innerHTML.replace(/\r?\n/g, '<br/>');
      item.innerHTML = str;
    });
  }
}
