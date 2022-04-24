,m.$(document).ready(function(){
	$('.header').height($(window).height());
})

$(function () { 
    $(window).scroll(function () {

		var scrolled = document.getElementsByClassName('scrolled');

        if ($(this).scrollTop() > window.innerHeight) { 
            $('.navbar .navbar-brand img').attr('src','images/logo_dark.png');
			for(var i = 0; i < scrolled.length; i++)
			{
				scrolled[i].style.color = "#1e1e1e";
				scrolled[i].style.backgroundColor = "white";
			}
        }
        else { 
            $('.navbar .navbar-brand img').attr('src','images/logo_light.png');
			for(var i = 0; i < scrolled.length; i++)
			{
				scrolled[i].style.color = "#ffffff";
				scrolled[i].style.backgroundColor = "transparent";
			}
		}
    })
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
 console.log("document is ready");
   
   
     $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
     $('.offcanvas-collapse').toggleClass('open')
   })

   $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  })
   
   
 // document ready  
 });
 
 
 window.onload = function() {
  // executes when complete page is fully loaded, including all frames, objects and images
 console.log("window is loaded");
   
   
 // window load  
 };

 $('.collapse').collapse('hide')