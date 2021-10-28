$(document).ready(function(){
  changePricePosition();
  changeTablePosition();
  changeTermsPosition();
  changeOwnerPosition();

    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
})
$(window).resize(function () {
    changePricePosition();
    changeTablePosition();
    changeTermsPosition();
    changeOwnerPosition();
});

// sidebar menu show/hide
  document.addEventListener('click', function (e) {
    if ($(event.target).hasClass('btn-show-sidebar')) {
        e.preventDefault();
        $('#sidebar').toggleClass('sidebar-hidden');
    } else if($('#sidebar').has(event.target).length === 0) {
        $('#sidebar').addClass('sidebar-hidden');
    }
  });

// tegs menu show/hide
  $('.tegs-toggler').on('click', function (e) {
      e.preventDefault();
      $('.blog-navbar').slideToggle();
  }); 

// Slow services table 
  $('.services-table-btn').on('click', function () {
      $('.services-table-wrap').toggleClass('table-right');
  }); 

// Search Button
  $('.search-btn').on('click', function (e) {
    if (window.matchMedia('(min-width: 768px)').matches) {
      e.preventDefault();
      var search = $('.search');
      if (search.hasClass('js-open')) {
          search.removeClass('js-open');
      } else {
          search.addClass('js-open');
      }
    }
  }); 

    function changePricePosition() {
        if ($('.price-block').length > 0) {
            if (window.matchMedia('(max-width: 767px)').matches) {
                $('.price-block').appendTo($('.price-block-wrap-xs'));
            } else {
                $('.price-block').appendTo($('.price-block-wrap-md'));
            }
        }
    }
    function changeTablePosition() {
        if ($('.table-car-info').length > 0) {
            if (window.matchMedia('(max-width: 767px)').matches) {
                $('.table-car-info').appendTo($('.table-car-info-wrap-xs'));
            } else {
                $('.table-car-info').appendTo($('.table-car-info-wrap-md'));
            }
        }
    }
    function changeTermsPosition() {
        if ($('.terms').length > 0) {
            if (window.matchMedia('(max-width: 767px)').matches) {
                $('.terms').appendTo($('.terms-wrap-xs'));
            } else {
                $('.terms').appendTo($('.terms-wrap-md'));
            }
        }
    }
    function changeOwnerPosition() {
        if ($('.owner-block').length > 0) {
            if (window.matchMedia('(max-width: 767px)').matches) {
                $('.owner-block').appendTo($('.owner-wrap-xs'));
            } else {
                $('.owner-block').appendTo($('.owner-wrap-md'));
            }
        }
    }

// open/hide filter
$('.filter-toggler ').on('click', function (e) {
  e.preventDefault();
  $('.filters').slideToggle();  
}); 

// tooltips(popover)
$(function () {
    $('[data-toggle="popover"]').popover()
});

$(function () {
  // smooth scroll family partner card to an anchor #
	$('.partner-card').bind('click.smoothscroll', function(e) {
		var target = this.hash;
    var $target = $(target);
    var topDiff = $target.offset().top;

		e.preventDefault();

    if ( $(document).width() >= 992 ) {
      topDiff = topDiff - 150;
    } else {
      topDiff = topDiff - 54;
    }

    $('html, body').stop().animate({
      'scrollTop': topDiff
        }, 800, 'swing', function() {
    });
	});
});