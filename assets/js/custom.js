/**	

	Custom JS
	
	1. FEATURED SLIDE ( TYPED SLIDER )
	2. FIXED MENU
	3. MENU SMOOTH SCROLLING
	4. MOBILE MENU CLOSE  
	5. PORTFOLIO GALLERY
	6. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
	7. BUTTON SMOOTH SCROLL ( VIEW MY WORK )

	
**/



(function( $ ){

		
	/* ----------------------------------------------------------- */
	/*  1. FEATURED SLIDE (TYPED SLIDER)
	/* ----------------------------------------------------------- */

		var typed = new Typed('#typed', {
		    stringsElement: '#typed-strings',
		    typeSpeed: 20,
		    backSpeed: 20,
		    startDelay: 1000,
		    loop: true,
		    loopCount: Infinity
		});



	/* ----------------------------------------------------------- */
	/*  2. FIXED MENU
	/* ----------------------------------------------------------- */


		jQuery(window).bind('scroll', function () {

    		if ($(window).scrollTop() > 100) {

        	$('#iy-header').addClass('iy-fixed-nav');
        
	    	} else {
	        	$('#iy-header').removeClass('iy-fixed-nav');
	    	}
		});

	/* ----------------------------------------------------------- */
	/*  3. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

		//MENU SCROLLING WITH ACTIVE ITEM SELECTED

		// Cache selectors
		var lastId,
		topMenu = $(".iy-menu"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find('a[href^=\\#]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+22;
		  jQuery('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		// Bind to scroll
		jQuery(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
		   }           
		});


	/* ----------------------------------------------------------- */
	/*  4. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 

	jQuery('.iy-menu').on('click', 'li a', function() {
		  $('.in').collapse('hide');
		});


	/* ----------------------------------------------------------- */
	/*  5. PORTFOLIO GALLERY
	/* ----------------------------------------------------------- */ 
		$('.filtr-container').filterizr();


		//Simple filter controls

	    $('.iy-simplefilter li').click(function() {
	        $('.iy-simplefilter li').removeClass('active');
	        $(this).addClass('active');
		});
		

	/* ----------------------------------------------------------- */
	/*  6. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
	/* ----------------------------------------------------------- */ 

	$('.iy-filter-imglink').magnificPopup({
	  type: 'image',
	  mainClass: 'mfp-fade',
	  gallery:{
	    enabled:true
	  }
	});



	/* ----------------------------------------------------------- */
	/*  7. BUTTON SMOOTH SCROLL ( VIEW MY WORK )
	/* ----------------------------------------------------------- */

	$('.view-my-work-btn').on('click',function (e) {
		    e.preventDefault();
		    var target = this.hash,
		    $target = $(target);
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 1000, 'swing', function () {
		        window.location.hash = target;
			});
	});
	
})(jQuery);
