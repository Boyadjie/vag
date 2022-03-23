// JavaScript Document

 // Toggle Icone hamburger
    $(document).ready(function(){
        $('.barres').click(function(){
            $('.barres').toggleClass('active');
			document.getElementById(".barres");
        })
    })

	var $hamburger = $('.barres');

	var hamburgerMotion = new TimelineMax()
	.to(".menu", 1.2, {top: '0%',ease: Expo.easeInOut,})
	.staggerFrom(".menu ul li", 0.5, {y: -100, opacity: 0}, 0.1)
	.reverse()

	$hamburger.on('click', function(e) {
  		hamburgerMotion.reversed(!hamburgerMotion.reversed());
	});