
//upスタイルが画面内にきたら、スタイルupstyleを適用する
$('.up').on('inview', function() {
	$(this).addClass('upstyle');
});

//downスタイルが画面内にきたら、スタイルdownstyleを適用する
$('.down').on('inview', function() {
	$(this).addClass('downstyle');
});

//transform1スタイルが画面内にきたら、スタイルtransform1styleを適用する
$('.transform1').on('inview', function() {
	$(this).addClass('transform1style');
});

//transform2スタイルが画面内にきたら、スタイルtransform2styleを適用する
$('.transform2').on('inview', function() {
	$(this).addClass('transform2style');
});

//transform3スタイルが画面内にきたら、スタイルtransform3styleを適用する
$('.transform3').on('inview', function() {
	$(this).addClass('transform3style');
});

//blurスタイルが画面内にきたら、スタイルblurstyleを適用する
$('.blur').on('inview', function() {
	$(this).addClass('blurstyle');
});

//ここから個人

document.querySelectorAll(".js-g01").forEach((item, i) => {
  gsap.from(item, {
    opacity: 0,
    scale: 0,
    yPercent: 150,
    ease: "back",
    duration: 0.5,
    delay: i * 0.05
  });
});//できない



