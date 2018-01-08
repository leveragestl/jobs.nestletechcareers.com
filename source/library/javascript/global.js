/****************************** WEB STANDARD POP UPS ******************************/
  function strictNewWindow() {
    if (!document.getElementsByTagName("a")) {
      return false;
    }
    $("a.newwindow").click(function() {
      window.open($(this).attr("href"));
      return false;
    });
  }

/****************************** HAMBURGER ******************************/
  function navHmaburger() {
    $('.hamburger').on('click tap', function(){
      $('.hamburger').toggleClass('open');
      $('.main-nav').toggleClass('active');
      $('body').toggleClass('no-scroll');
      $('html').toggleClass('no-scroll');
    });
  }

/****************************** STICKY NAV ******************************/
  function stickyHeader() {
    var rafTimer;
    var header = $(".main-header");

    function toggleStickyHeader() {
      // does cause layout/reflow: https://git.io/vQCMn
      if (window.scrollY > 100) {
        header.addClass('sticky');
      } else {
        header.removeClass('sticky');
      }
    }

    window.onscroll = function () {
      cancelAnimationFrame(rafTimer);
      rafTimer = requestAnimationFrame(toggleStickyHeader);
    };
  }

/****************************** BRAND SLIDER ******************************/
  var elem = document.querySelector(".slider-brands");
  var flkty = new Flickity(elem, { 
    // options
    cellAlign: 'left',
    wrapAround: true,
    pageDots: false,
    imagesLoaded: true,
    autoPlay: 5000,
    arrowShape: { 
      x0: 10,
      x1: 50, y1: 50,
      x2: 50, y2: 10,
      x3: 50
    }
  });

/****************************** MOBILE FOOTER LINKS ******************************/
  if (window.innerWidth < 960) {
    $('.link-list').hide();
    $('.col--title').addClass('inactive');
    $('.col--title').on('click tap', function() {
      $(this).toggleClass('inactive');
      $(this).parent().toggleClass('open');
      $(this).parent().find('.link-list').slideToggle();
    });
  }

//************************************************************************************************************************//
//************************************************** LOAD ALL FUNCTIONS **************************************************//
//************************************************************************************************************************//
$(document).ready(function() {
  strictNewWindow();
  navHmaburger();
  stickyHeader();
});
