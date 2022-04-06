import $ from "jquery"
// $( document ).ready(function() {
	// if ($(window).width() <= 768){	
	// 	$('.footer-links-wrapper').addClass("sam");
	// 	console.log("screen size less than 768")
	// }else{
	// 	$('.footer-links-wrapper').removeClass("sam");
	// 	console.log("screen size greater than 768")

	// }
	// $(window).on('resize', function(event){
	// 	if ($(window).width() <= 768){	
	// 		$('.footer-links-wrapper').addClass("sam");
	// console.log("screen size less than 768 on resize")

	// 	}else{
	// 		$('.footer-links-wrapper').removeClass("sam");
	// 		$('.footer-links-wrapper ul').show();
	// console.log("screen size greater than 768 on resize")

	// 	}	
	// });
	// // Footer collapse functionality 
	// $(document).on("click", ".sam h3 ", function(){
	// 	console.log($(this))
	// 	$(this).next('ul').slideToggle();
	// 	$(this).toggleClass("expanded");
	// });

	
	$(document).on("click", ".footer-links-wrapper h3 ", function(){
        if ($(window).width() <= 768){
        console.log($(this))
        $(this).next('ul').slideToggle();
        $(this).toggleClass("expanded");
        }
    });

    $(window).on("resize",function(){
        window.location.reload()
    })
























// Search bar 
// 	$('.search-link').click(function(event){
// 		event.preventDefault();
// 		$(".navbar-collapse.collapse").removeClass("show");
// 		$(".searchbox").slideToggle();
// 	});

//  });




// var navbar = document.getElementsByClassName('navbar-collapse')
// var navbarlinks = document.getElementsByClassName('navbar-nav')

// navbar.addEventListener('click' , () =>{
// 	navbarlinks.classList.toggle('active')
// })

