$(function() {
  $('#title').vegas({
      slides: [
          { src: '/portfolio2020/images/bg-title-1.jpg' },
          { src: '/portfolio2020/images/bg-title-2.jpg' },
          { src: '/portfolio2020/images/bg-title-4.jpg' },
      ],
      overlay: ['/portfolio2020/vegas-master/src/overlays/08.png'], //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
      transition: 'fade', //スライドを遷移させる際のアニメーション
      transitionDuration: 4000, //スライドの遷移アニメーションの時間
      delay: 6000, //スライド切り替え時の遅延時間
      animation: 'random', //スライド表示中のアニメーション
      animationDuration: 20000, //スライド表示中のアニメーションの時間
  });
});