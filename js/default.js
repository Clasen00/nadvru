$(window).scroll(function(e) {
    var height = $(this).scrollTop();
    $('#nav-fixed')[height >= 1 ? 'addClass' : 'removeClass']('active')
});

$(function (){

    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

$(function (){

    $('.autoplay-three').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      fade: true,
      cssEase: 'linear',
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        fade: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

$(function (){

    $('.autoplay-four').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

$(function (){

    $('.autoplay-two').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

$(function (){

    $('.autoplay-two-02').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

$(function (){

    $('.autoplay-two-03').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

$(function (){

    $('.autoplay-two-04').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});


$(function (){
    $('.your-class').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      fade: true,
      adaptiveHeight: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

$(document).ready(function(){


$( ".searchicon-close" ).hide();
$( ".srchform" ).hide();
$( ".searchicon" ).click(function() {
        $( ".srchform" ).slideToggle( "fast", function() {
        $( ".searchicon" ).hide();
        $( ".searchicon-close" ).show();
        $('#seacrh_container input').focus();
    });
});

$( ".searchicon-close" ).click(function() {
$( ".srchform" ).slideToggle( "fast", function() {
$( ".searchicon-close" ).hide();
$( ".searchicon" ).show();
});
});

$( ".searchicon-close-m" ).hide();
$( ".mobileform" ).hide();
$( ".hmb-icon" ).click(function() {
$( ".searchicon-close-m" ).show();
$( ".mobileform" ).slideToggle( "fast", function() {
});
});

$( ".searchicon-close-m" ).click(function() {
$( ".mobileform" ).slideToggle( "fast", function() {
$( ".searchicon-close-m" ).hide();
$( ".hmb-icon" ).show();
});
});



$( ".sericon-close" ).hide();
$( ".serform" ).hide();
$( ".sericon" ).click(function() {
        $( ".serform" ).slideToggle( "fast", function() {
        $( ".sericon" ).hide();
        $( ".sericon-close" ).show();
        $('#service_container input').focus();
    });
});

$( ".sericon-close" ).click(function() {
$( ".serform" ).slideToggle( "fast", function() {
$( ".sericon-close" ).hide();
$( ".sericon" ).show();
});
});



$( ".hamb-close" ).hide();
$( ".hambform" ).hide();
$( ".hamb" ).click(function() {
$( ".hambform" ).slideToggle( "fast", function() {
$( ".hamb" ).hide();
$( ".hamb-close" ).show();
});
});

$( ".hamb-close" ).click(function() {
$( ".hambform" ).slideToggle( "fast", function() {
$( ".hamb-close" ).hide();
$( ".hamb" ).show();
});
});

$( ".hamb-close-m" ).hide();
$( ".hambmobileform" ).hide();
$( ".hamb-icon" ).click(function() {
$( ".hamb-close-m" ).show();
$( ".hambmobileform" ).slideToggle( "fast", function() {
});
});

$( ".hamb-close-m" ).click(function() {
$( ".hambmobileform" ).slideToggle( "fast", function() {
$( ".hamb-close-m" ).hide();
$( ".hamb-icon" ).show();
});
});



$( ".hash-close" ).hide();
$( ".hashform" ).hide();
$( ".hash" ).click(function() {
$( ".hashform" ).slideToggle( "fast", function() {
$( ".hash" ).hide();
$( ".hash-close" ).show();
});
});

$( ".hash-close" ).click(function() {
$( ".hashform" ).slideToggle( "fast", function() {
$( ".hash-close" ).hide();
$( ".hash" ).show();
});
});



  jQuery(document).on('click', '.mega-dropdown', function(e) {
    e.stopPropagation()
  })

  $( ".boks-size" ).on("click", function() {
    var d=$( "#amount" ).val(), 
        p=$(this).val();
     	
    var disc = 0, zz;
        var pay_var = $('input.pay-var:checked');

        pay_var.each(function(index, el){
			zz = el.value;
		});
        if(zz == "edin"){
            if((2 < d) && (d < 6)) {
                disc = 0.1;
            }
            if(d >= 6) {
                disc = 0.2;
            }
        } else {disc = 0;}
    $( ".price-val" ).text( abc2((d*p) - (d*p*disc)) );
  });
  
$( ".pay-var" ).on("click", function() {
    var d = $( "#amount" ).val(), p = $(this).val();
    var disc = 0, arr = "", rr = 0;
    var arr = $('input.boks-size:checked');

        arr.each(function(index, el){
			rr = el.value;
		});
        if(p == "edin"){
            if((2 < d) && (d < 6)) {
                disc = 0.1;
            }
            if(d >= 6) {
                disc = 0.2;
            }
        } else {disc = 0;}
    $( ".price-val" ).text( abc2((d*rr) - (d*rr*disc)) );
});


  	
  	/* Подготавливаем иконку меню */
	$('.top-menu-mobile').prepend('<div class="mobile-menu-icon">Разделы сайта</div>');
	
	/* Включаем навигацию */
	$(".mobile-menu-icon").on("click", function(){
		$(".top-menu-mobile ul").slideToggle();
		$(this).toggleClass("active");
	});

       
$('.form-2').submit(function(){
		var data = $(this).serialize();
		$.get("admin/sendajaxformwriteme", data, function(data,status,xhr) {
			if(status == 'success') {
alert('Ваше сообщение отправлено!');
				$('#writeMeModal').modal('hide');
				$('#success-message-resp').modal('show');
			}
		});
		return false;
	});
});

function abc2(n) {
    n += "";
    n = new Array(4 - n.length % 3).join("U") + n;
    return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
}