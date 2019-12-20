function mobileNav() {
  var hamburger = document.querySelector('.hamburger');
  var body = document.querySelector('body');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    if (body.classList.contains('navOpen')) {
      body.classList.remove('navOpen');
    } else {
      body.classList.add('navOpen');
    }
  });
}

function stickyNav() {
  // var windowHeight = window.innerHeight;
  // alert(windowHeight);
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  });
}

function footerToggles() {
  if (window.innerWidth < 960) {
    $('.linkLists__list').hide();
  }

  $('.linkLists__colTitle').on('click tap', function () {
    $(this).parent().toggleClass('active');
    $(this).parent().find('.linkLists__list').slideToggle();
  });
}




// Load 'em
document.addEventListener('DOMContentLoaded', function () {
  mobileNav();
  stickyNav();
  footerToggles();
});
