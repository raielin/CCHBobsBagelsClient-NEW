// ******************************************************************************************
// Configuration Start
// ******************************************************************************************

//*********************Google MAP *********************/

		var color = "#9E2811" // google map background colour
		var saturation = 100 //
		var mapLatitude=42.350744
		var mapLongitude=-71.043509//(Fist Value Latitude, Second Value ), get YOUR coordenates here!: http://itouchmap.com/latlong.html
		var mapZoom_value=15 // Map zoom level parameter only numeric


// Google map marker example 2 locations
		//map-marker #1
		var marker1_Latitude=42.349331
		var marker1_Longitude=-71.050008
		var marker1_content="<h2>Bob's Bagels</h2>" // marker or  on click content (Info Window)
		var marker1_pointerUrl = 'img/map-marker.png' // set your color pointer here!
//********************* Google MAP END *********************/


//*****************  Scroll speed and page animation  *********************/

		// Scrollto.js parameter
		var horizontal_scroll_speed=1500 // speed Horizontal Scrollto parameter.

		//animation sliding speed configure
		var menu_header_speed=300 // on sub page topbar sliding down animation default #350
		var menu_main_header_speed=600   // home page middle bar sliding down animation default #800

//*********************Scroll speed and page animation *********************/


//content scrollbar (niceScroll) colour
		var niceScrollcursorcolor = "#f32a2a"// Set your content niceScroll color here!
		var niceScrollcursorborder = "0"// Set your content niceScroll border color here!

//Configuration END


/******************************************************************************
		  	Navigation on click/ on load / on hasch chage scroll to
******************************************************************************/

jQuery(document).ready(function($){
"use strict";

$("#header").click(function (e) { e.preventDefault(); });
$("#mainheader").click(function (e) { e.preventDefault(); });

//on page load show from hash index.html#about
/*********************************************************************************/
var url = window.location.href;
var type = url.split('#');
var hash = '';
if(type.length > 1)
{
hash = type[1];
}
debugger
if (hash!=""){
var hash_fullname= "#" + hash;
$( "a[href='"+hash_fullname+"']" ).addClass('selected');
	if(hash_fullname=="#home"){
	// hiding subpage header
	$('#header').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 1000);
	Animation("#header","fadeOutUp","200");
	}
	else {
	// hiding Home page header
	$('#mainheader').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 600);
	Animation("#mainheader","fadinUp","200");
	}

		$('#wrapper').scrollTo(hash_fullname, 2000, {easing:'easeInOutExpo', axis:'x', onAfter:function(){ // scrollto callback  function
			if(hash_fullname=="#home")
			{ // for home page animation
		//	Homepage_Animation();
			}
			else
			{ // sub page animation
				if ( $('#header').is(':hidden')){ // if header is hidden then do animation
					Subpage_animation();
				}
			}

				} // scrollto callback function close

		});//	scrollto close

}// hash!="" close


// on click navigation
/*********************************************************************************/
$('.main-nav a.nav-link,.brand a.nav-link,a.nav-link').click(function () {

var name = $(this).attr('href');
if(name!="#")  { // if navigation not equalt to "#"

if(name=="#home"){
$('.selected').removeClass('selected');
$( "a[href='"+name+"']" ).addClass('selected');

$('#header').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 1000);
Animation("#header","fadeOutUp","200");
}
else {
if(name!=""){
$('.selected').removeClass('selected');
$( "a[href='"+name+"']" ).addClass('selected');
$('#mainheader').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 600);
Animation("#mainheader","fadinUp","200");
}}

//	scrollto start
$('#wrapper').scrollTo($(this).attr('href'), horizontal_scroll_speed, {easing:'easeInOutExpo', axis:'x', onAfter:function(){ // scrollto callback  function

if(name=="#home"){ // for home page animation
Homepage_Animation();
$( "a[href='#home']" ).addClass('selected');
}
else { // sub page animation
if ( $('#header').is(':hidden')){
Subpage_animation();
}
} // else close

} // scrollto callback function close

} );//	scrollto close

} // if navigation not equalt to "#" end
}); // navigation click end


}); // end document.ready


// hash change and browser histry
/*********************************************************************************/

$(window).bind("hashchange", function(e) {

//on hash change getting the ID
var url = window.location.href;
var type = url.split('#');
var hash = '';
if(type.length > 1)
{
hash = type[1];
}

if (hash!=""){
var hash_fullname= "#" + hash;

	if(hash_fullname=="#home"){
	// hiding subpage header
	$('#header').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 1000);
	Animation("#header","fadeOutUp","200");
	}
	else {
	// hiding Home page header
	$('#mainheader').hide('fade', { direction: 'left', easing: 'easeInQuad' }, 600);
	Animation("#mainheader","fadinUp","200");
	}

		$('#wrapper').scrollTo(hash_fullname, 2000, {easing:'easeInOutExpo', axis:'x', onAfter:function(){ // scrollto callback  function
			if(hash_fullname=="#home")
			{ // for home page animation
			Homepage_Animation();
			}
			else
			{ // sub page animation
				if ( $('#header').is(':hidden')){ // if header is hidden then do animation
					Subpage_animation();
				}
			}

				} // scrollto callback function close

		});//	scrollto close

}// hash!="" close

});


/***************************************************
		  	//custom animation functions
***************************************************/
function modalshow(modalid)
{
	$(modalid).modal('show');
}

function Animation(element,effect,timedelay)
{
    $(element).delay(timedelay).removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
     $(this).removeClass();
    });
};

function Animation(element,effect,timedelay)
{
    $(element).delay(timedelay).removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
     $(this).removeClass();
    });
};

function Homepage_Animation()
{
$('#mainheader').show('fade', { easing: 'easeInQuad' }, menu_main_header_speed); //on homepage topbar sliding up animation
Animation("#mainheader","fadeInUp","200");
Animation("#spmenu1","fadeInRight","300");
Animation("#spmenu2","fadeInRight","800");
Animation("#spmenu3","fadeInRight","5000");
Animation("#1","fadeInLeft","800");
Animation("#2","fadeInUp","1800");
Animation("#3","fadeInDown","800");
Animation("#4","fadeInLeft","1800");
Animation("#5","fadeInRight","800");
}

function Subpage_animation ()
{
Animation("#header","fadeInDown","200");
$('#header').show('fade', { direction: 'top', easing: 'easeInQuad' }, menu_header_speed); //on sub page topbar sliding down animation
}



/***************************************************
		  		Home page Social icon animation
***************************************************/

jQuery(function($){
	//region Socials jumps
	$('.accura-jump a,' +
		'.accura-jump-bg a').each(function () {
			var $el = $(this);
			$el.append($el.find('i').clone());
		});

$('.accura-social-icons-big a i').wrap('<span></span>');
	//end region
});


/***************************************************
		  		General functions // resizing BG
***************************************************/
jQuery(document).ready(function($){
"use strict";
$(window).resize(function () {
		resizePanel();
	});
 });



function resizePanel() {

	width = $(window).width();
	height = $(window).height();

	mask_width = width * $('.item').length;

	$('#debug').html(width  + ' ' + height + ' ' + mask_width);

	$('#wrapper, .item').css({width: width, height: height});
	$('#mask').css({width: mask_width, height: height});
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}

$(window).load(function() {

	var theWindow        = $(window),
	    $bg              = $(".bg"),
	    aspectRatio      = $bg.width() / $bg.height();

	function resizeBg() {

		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}

	}

	theWindow.resize(function() {
		resizeBg();
	}).trigger("resize");



});

// ******************************************************************************************
// Contact Form Start
// ******************************************************************************************
jQuery(document).ready(function($){
"use strict";
  $('#contact_form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
		phone: {
    required: false,
    },
    email: {
    required: true,
    email: true
    },
    subject: {
    minlength: 2,
    required: true
    },
    message: {
    minlength: 2,
    required: true
    }
    },
    highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    },
		submitHandler: function(form) {
					// do other stuff for a valid form
					$.post('contact_form.php', $("#contact_form").serialize(), function(data) { // action file is here
						$('#contact_form').html(data);
					});
				}
    });
    }); // end document.ready


//Contact Form END






//****************************************************************************
		  		// Google map
//****************************************************************************
jQuery(document).ready(function($){
		 "use strict";
			//dragable mobile
			var drag;
			if($(window).width()<796){drag=false;}else{drag=true;}

		/* googleMaps */

				function map_canvas_loaded() {
				var latlng = new google.maps.LatLng(mapLatitude,mapLongitude);

				// setting styles here
				var styles = [
					{
						"featureType": "landscape",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 40},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.highway",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": 20},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.arterial",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": -10},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.local",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": 20},
							{"gamma": 1}
						]
					},
					{
						"featureType": "water",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 15},
							{"gamma": 1}
						]
					},
					{
						"featureType": "poi",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 25},
							{"gamma": 1}
						]
					}
				];
				var options = {
				 center : latlng,
				 mapTypeId: google.maps.MapTypeId.ROADMAP,
				 zoom : mapZoom_value,
				 styles: styles
				};
				var map_canvas = new google.maps.Map(document.getElementById('map_canvas'), options);




				//****************************************************************************
		  		// marker 1 content
				//****************************************************************************
				var pointer1 = new google.maps.LatLng(marker1_Latitude,marker1_Longitude);

				var marker1= new google.maps.Marker({
				 position : pointer1,
				 map : map_canvas,
				 icon: marker1_pointerUrl //Custom Pointer URL
				 });

				google.maps.event.addListener(marker1,'click',
				 function() {
				 var infowindow = new google.maps.InfoWindow(
				 {content:marker1_content });
				 infowindow.open(map_canvas,marker1);
				 });
				// marker 1 END
			}

				window.onload = function() {
				 map_canvas_loaded();
				};
			/* End */

		});

//Google map end



// toogle options

$(document).ready(function() {
"use strict";
   	$('.toggle-content').hide();  //hides the toggled content

	$('.toggle-link').click(function () {
		if ($(this).is('.toggle-close')) {
			$(this).removeClass('toggle-close').addClass('toggle-open').parent().next('.toggle-content').slideToggle(300);
  $('#scrolldynamic').getNiceScroll().resize();
			return false;
		}

		else {
			$(this).removeClass('toggle-open').addClass('toggle-close').parent().next('.toggle-content').slideToggle(300);
			$(".menuscroll").getNiceScroll().resize();
			  $('#scrolldynamic').getNiceScroll().resize();
			return false;
		}
	});
});

//toogle options end



// niceScroll Bar options
  $(document).ready(function() {
	"use strict";
	$(".contentscroll").niceScroll({
	cursorcolor:niceScrollcursorcolor,
	touchbehavior:true,
	scrollspeed:160,
	mousescrollstep:90,
	smoothscroll:true,
	cursorwidth:"6px",
	cursorborder:"0",
	cursordragontouch: true
});

	$("#menutop").niceScroll({
	cursorcolor:niceScrollcursorcolor,
	touchbehavior:true,
	scrollspeed:140,
	mousescrollstep:90,
	smoothscroll:true,
	cursorwidth:"6px",
	cursorborder:"0",
	cursordragontouch: true
});

$(".contentscroll").mouseover(function() {
$(".contentscroll").getNiceScroll().resize();
});

});
// niceScroll Bar options end


//Preloader
jQuery(document).ready(function($){
"use strict";

$("body").jpreLoader(
	  {
		splashID:"#jSplash",
		showPercentage:!0,
		autoClose:!0,
		showSplash: true,
		splashFunction:function(){
		$("#circle").delay(1250).animate({opacity:1},700,"linear");
 	  }
	 })

});

