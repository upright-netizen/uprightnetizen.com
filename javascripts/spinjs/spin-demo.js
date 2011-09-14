/*
    
    Goals : 

    1. Needs to be a jquery plugin
    1. Need to be able to be passed around (ajax calls)

*/



(function(global, doc, $, undefined) {
  $(function() {
    
    var 
      fake_jax = function fake_jax (callback, time) {
        setTimeout(callback, time || 10000)
      },

    opts = {
      lines: 12, // The number of lines to draw
      length: 30, // The length of each line
      width: 10, // The line thickness
      radius: 20, // The radius of the inner circle
      color: '#000', // #rbg or #rrggbb
      speed: 5, // Rounds per second
      trail: 100, // Afterglow percentage
      shadow: true // Whether to render a shadow
    };

    $('#clickit').click(function(e) {
      var $button = $(this);

      $button.text('wait').addClass('disabled');

      global.spinner = new Spinner(opts).spin(doc.getElementById('clickit'));

      fake_jax(function() {
        global.spinner.stop();
        // remove the spinner
        $button.text("Go! and Do!").removeClass('disabled');
      }, 8000);
    })

  })
})(this, this.document, this.jQuery)