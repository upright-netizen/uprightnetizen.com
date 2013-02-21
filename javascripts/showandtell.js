(function(global, $, undefined){

  var
  // data
    defaults = {
      scrollSpeed : 700,
      hotkeys : true,
      bigSpace : true,
      rememberSlide : true
    },
    opts,
    presentation,
    win,
    slides,
    winHeight,
    firstSlideHieght,
    topPadding,
    activeSlide,
    storedSlide,
    slideKey,

  // keys
    up = 38,
    down = 40,
    left = 37,
    right = 39,
    j = 74,
    k = 75,

  // furnctions
    next,
    prev,
    scrollTo,
    scrollToSlide,
    setLocalStorage;

  scrollTo = function (scrollPosition) {
    $('html, body').stop().animate({
      scrollTop : scrollPosition
    }, opts.scrollSpeed, "swing");
  };

  scrollToSlide = function (slide) {
    var slideHeight = slide.height();

    if (slideHeight < winHeight) {
      // vert center next slide
      scrollTo(slide.offset().top - ((winHeight - slideHeight) / 2));
    } else {
      // scroll until next slide top
      scrollTo(slide.offset().top);
    }
  };

  setLocalStorage = function (slide) {
    var index = $.inArray(slide[0], slides);
    localStorage[slideKey] = index;
  };

  next = function () {
    var nextSlide = activeSlide.next('.slide');

    if (nextSlide[0]) {
      scrollToSlide(nextSlide);
      activeSlide = nextSlide;
      opts.rememberSlide && setLocalStorage(activeSlide);
    }
  };

  prev = function () {
    var prevSlide = activeSlide.prev('.slide');

    if (prevSlide[0]) {
      scrollToSlide(prevSlide);
      activeSlide = prevSlide;
      opts.rememberSlide && setLocalStorage(activeSlide);
    }
  };

  init = function (options) {
    // setup
    opts = $.extend({}, defaults, options);

    presentation = $('#presentation');
    win = $(window);
    slides = presentation.find('.slide');
    winHeight = win.height();
    firstSlideHieght = slides.first().outerHeight();
    topPadding = ((winHeight - firstSlideHieght) / 2) + "px";

    if (opts.rememberSlide && Modernizr.localstorage) {
      // set slide key
      slideKey = window.location.pathname;

      // if nothing saved, start with first
      if (localStorage[slideKey] === undefined) {
        localStorage[slideKey] = 0;
      }

      // set activeslide
      activeSlide = $(slides.get(localStorage[slideKey]));
    } else {
      setTimeout(function () {
        scrollToSlide(slides.first());
      }, 500);
    }

    if (opts.bigSpace) {
      slides.css('margin-bottom', "3000px");
    }

    // to make sure out first slide is vertically centered
    presentation.css('padding-top', topPadding);

    // add some hotkeys
    if (opts.hotkeys) {
      document.onkeydown = function(e) {
        var key = (e||window.event).keyCode;

        if (key === down || key === right || key === j) {
          console.log('next');
          next();
        }
        if (key === up || key === left || key === k) {
          console.log('prev');
          prev();
        }
      };
    }

    // listen for window resize
    win.on('resize', function (e) {
      winHeight = win.height();
    });
  };

  window.showandtell = {
    init : init,
    next : next,
    prev : prev
  };

}(this, this.jQuery));