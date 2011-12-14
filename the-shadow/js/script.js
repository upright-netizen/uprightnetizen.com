/* Author: those jerks

*/


(function(global, doc, $, undefined){

  var URN;
  if (!URN) {
    URN = {};
  }
    
  URN.theShadowing = (function(options) {
    
  /* define */
  
        // properties
    var depth,
        color,
        direction = {
          "northwest" : { x : -1, y : -1 },
          "northeast" : { x : 1, y : -1 },
          "southeast" : { x : 1, y : 1 },
          "southwest" : { x : -1, y : 1 }
        },
        x,
        y,
        textShadow,
        fontFamily,
        fontSize,
        sampleText,
        eventSwitch = $(doc),
        
        // elements
        depth_elem = $('#depth'),
        color_elem = $('#color'),
        direction_elem = $('#direction'),
        fontFamily_elem = $('#font-family'),
        fontSize_elem = $('#font-size'),
        sampleText_elem = $('#font-text'),

        // functions
        init,
        renderProperty,
        updatePreview,
        updateCode,
        debug;

  /* methods */

    init = function init () {
      // Get initial values
      depth = depth_elem.val();
      color = color_elem.val();
      // x = direction[ direction_elem.filter(':checked').val() ].x;
      // y = direction[ direction_elem.filter(':checked').val() ].y;
      x = direction[ direction_elem.val() ].x;
      y = direction[ direction_elem.val() ].y;
      fontFamily = fontFamily_elem.val();

      /* events */
      depth_elem.bind("change", function (e) {
         depth = depth_elem.val();
         renderProperty();
      });

      color_elem.bind("blur", function (e) {
        color = color_elem.val();
        renderProperty();
      });

      // direction_elem.bind("click", function (e) {
      //   var corner = direction[$(this).val()];
      //   x = corner.x;
      //   y = corner.y;
      //   renderProperty();
      // });

      direction_elem.bind("change", function (e) {
        var corner = direction[$(this).val()];
        x = corner.x;
        y = corner.y;
        renderProperty();
      });

      fontFamily_elem.bind("change", function (e) {
        fontFamily = fontFamily_elem.val();
        eventSwitch.trigger("updatePreview.text-shadow");
      });

      fontSize_elem.bind("change", function (e) {
        fontSize = fontSize_elem.val();
        eventSwitch.trigger("updatePreview.text-shadow");
      });

      sampleText_elem.bind("blur", function (e) {
        sampleText = sampleText_elem.val();
        eventSwitch.trigger("updatePreview.text-shadow");
      });

      /* dumb pub/sub */
      // update both
      eventSwitch.bind("update.text-shadow", updatePreview);
      eventSwitch.bind("update.text-shadow", updateCode);
      // update one
      eventSwitch.bind("updatePreview.text-shadow", updatePreview);
      eventSwitch.bind("updateCode.text-shadow", updateCode);

      // gonna have to figure this out later.
      x = -1;
      y = 1;
    };
      
    renderProperty = function renderProperty () {
      // reset text shadow
      textShadow = "";

      for(var i = 1; i <= depth; i += 1) {
        textShadow += (x * i) + "px " + (y * i) + "px " + color;
        // need to coerce depth to be a number not a string, hence the ~~
        if ( i !== ~~ depth ) textShadow += ", ";
      }

      // fire update event
      eventSwitch.trigger("update.text-shadow");
    };

    updatePreview = function updatePreview () {
      $("#preview").css({
        "textShadow" : textShadow,
        "fontFamily" : fontFamily,
        "fontSize" : fontSize + "px"
      });

      $("#preview").text(sampleText);
    };

    updateCode = function updateCode () {
      $("#output").text(textShadow);
    };

    debug = function debug () {
      console.debug({
         "depth" : depth,
         "color" : color,
         "text-shadow" : textShadow,
         "font-family" : fontFamily,
         "font-size" : fontSize,
         "sample text" : sampleText
      });
    };

    /* public */
    return {
      init : init,
      debug : debug
    };
  })({});

  /* DOM Ready */
  $(function onReady () {
    URN.theShadowing.init();
  });

  // make it globally accessible
  global.URN = URN;

})(this, this.document, this.jQuery);

