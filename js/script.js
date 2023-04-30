let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

$('.popupActive').click(function () {
  $(".popup").addClass("active");
  $(".popupBack").addClass("active");
  $('.header').css('position', 'static');
  $('.header').css('z-index', '1');
  $('body').css('padding-top', '0px');

})
$(".popup__closeBtn").click(function () {
  $(".popup.active").removeClass("active");
  $(".popupBack").removeClass("active");
  $('.header').css('position', 'fixed');
  $('.header').css('z-index', '100');
  $('body').css('padding-top', '50px');
});
$(".popupBack").click(function () {
  $(".popup.active").removeClass("active");
  $('.popupBack.active').removeClass("active");
  $('.header').css('position', 'fixed');
  $('.header').css('z-index', '100');
  $('body').css('padding-top', '50px');
});
$(".header__burger").click(function () {
  $(".header__burger").toggleClass("active");
  $(".header__content").toggleClass("active");
  $('body').toggleClass("block");
});

$(document).ready(function () {
  var tempScrollTop, currentScrollTop = $(window).scrollTop();
  $(window).scroll(function () {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop > $('header').height()) {
      $('body').addClass('fixed-header');
      if (tempScrollTop > currentScrollTop) {
        $('header').addClass('show')
      } else {
        $('header').removeClass('show');
      }
    } else {
      $('body').removeClass('fixed-header');
      $('header').removeClass('show');
    }
    tempScrollTop = currentScrollTop;
  });
});
