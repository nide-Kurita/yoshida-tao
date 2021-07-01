import $ from 'jquery';
import Vivus from 'vivus';

export default class LoadAnime {
  constructor(){
    const cover = document.getElementById('cover');
    const coverLogo = document.getElementById('coverLogo');
    const coverLoader = document.getElementById('coverLoader');
    const urlPath = location.pathname;
    const urlHash = location.hash;
    cover.classList.remove('is-break');
    coverLogo.style.visibility = 'hidden';
    

    if (urlPath ==='/' && urlHash === '') {
      coverLoader.style.display = 'block';
      coverLogo.style.visibility = 'visible';
      window.addEventListener('load', ()=> {
        coverLoader.style.opacity = '0';
        var stroke = new Vivus('mask',
          {//アニメーションをするIDの指定
            start:'manual',//自動再生をせずスタートをマニュアルに
            type: 'scenario-sync',// アニメーションのタイプを設定
            duration: 120,//アニメーションの時間設定。数字が小さくなるほど速い
            forceRender: false,//パスが更新された場合に再レンダリングさせない
            animTimingFunction:Vivus.EASE,//動きの加速減速設定
          }
        );
        coverLogo.style.opacity = '1';
        stroke.play();//SVGアニメーションの実行
        setTimeout(()=>{
          cover.style.opacity = '0';
          coverLogo.style.opacity = '0';
        },3000);
      })
    }else {
      cover.classList.add('is-break');
      setTimeout(()=>{
        cover.style.opacity = '0';
      },500);
    }
  }
}
