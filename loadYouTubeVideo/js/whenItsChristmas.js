/* Author: Nathan Stilwell

*/

(function(global, doc, $, undefined){

  var onYouTubePlayerReady,
      onPlayerStateChange,
      youtubePlayer;

  //
  // Some Player functions
  //

  onYouTubePlayerReady = function onYouTubePlayerReady(playerId) {
    var player;

    // Hide the video
    // prevent flash by writing CSS

    // $('#felizNavidad').css({
    //   position : 'absolute',
    //   top : '-1000px',
    //   left : '-1000px'
    // });

    player = doc.getElementById("felizNavidad");
    player.addEventListener("onStateChange", "onytplayerStateChange");
    player.playVideo();

    youtubePlayer = player;
  };

  onPlayerStateChange = function playerStateChange (newState) {
    // Function will be called when player state changes.

   /*

    This event is fired whenever the player's state changes.

    Possible values are
      + unstarted (-1)
      + ended (0)
      + playing (1)
      + paused (2)
      + buffering (3)
      + video cued (5)

    When the SWF is first loaded it will broadcast an unstarted (-1) event.  When the
    video is cued and ready to play it will broadcast a video cued event (5).

    */
  };


  //
  // Document Ready
  //

  $(function merryChristmas () {
    var joseFeliciano = 'wGuCvFdrWPg',
        params = { allowScriptAccess: "always" },
        atts = { id: "felizNavidad" };

    swfobject.embedSWF("http://www.youtube.com/v/" + joseFeliciano + "?enablejsapi=1&playerapiid=ytplayer&version=3",
                          "ytapiplayer", "400", "400", "8", null, null, params, atts );
  });

  //
  //  Public Stuff
  //

  $.extend(global, {
    onYouTubePlayerReady : onYouTubePlayerReady,
    onPlayerStateChange : onPlayerStateChange,
    youtubePlayer : youtubePlayer
  });

})(this, this.document, this.jQuery);






















