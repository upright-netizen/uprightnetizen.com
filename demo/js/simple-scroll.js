(function($, undefined){

  $(function () {

    var nav = $('#nav-bar');
    var body = $('html,body');
    var win = $(window);

    $('body').on('click', '.scroll-to', function (e) {
      var self = $(this);
      var target = self.attr('href');
      var targetScrollTop = $(target).position().top;
      var navItem = target.replace('#', 'nav-');

      e.preventDefault();

      nav.find('.here').removeClass('here');
      $('#' + navItem).addClass('here');

      body.animate({
        'scrollTop' : targetScrollTop
      }, 1000);
    });

    setTimeout(function () {
      if (win.scrollTop() > 0) {
        body.animate({
          'scrollTop' : 0
        }, 500);
        console.log('scroll up');
      }
    }, 500);

  });

}(this.jQuery));