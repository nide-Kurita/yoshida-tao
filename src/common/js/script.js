import $ from 'jquery';
import LoadAnime from './_modules/loadAnime';
import Navigation from './_modules/navigation';
import FadeAnime from './_modules/fade_anime';
import PageSmoothAnchor from './_modules/pageSmoothAnchor';
import NewsApi from './_modules/newsApi';

$(() => {

  new LoadAnime();
  new Navigation();
  new FadeAnime();
  new PageSmoothAnchor();
  // new NewsApi();
  client
    .get({
      endpoint: 'blog',
    })
    .then((res) => console.log(res));


})
