(function($, undefined){

  $(function () {

    $('#main').on('click', '.scroll-to', function (e) {
      var self = $(this);
      var target = self.attr('href');
      var targetScrollTop = $(target).position().top;

      e.preventDefault();


      $("html,body").animate({
        'scrollTop' : targetScrollTop
      }, 1000);
    });

  });

}(this.jQuery));