$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

$.fn.spin = function(opts) {
  this.each(function() {
    var $this = $(this),
        data = $this.data();

    if (data.spinner) {
      data.spinner.stop();
      delete data.spinner;
    }
    if (opts !== false) {
      data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
    }
  });
  return this;
};

var spinnerOpts = {
  lines: 30,
  length: 8,
  width: 5,
  radius: 47,
  color: '#dedddd',
  speed: 1,
  trail: 60,
  shadow: false
};

function cats(beginAt, gif, video) {
	this.beginAt = beginAt;
	this.gif = gif;
	this.video = video;
}

function onYouTubePlayerReady(playerId) {
	$("#myytplayer").attr("style", "z-index: 1;");
  ytplayer = document.getElementById("myytplayer");
  ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
	ytplayer.seekTo(theCats[rand].beginAt);
	ytplayer.playVideo();
}

function onytplayerStateChange(newState) {
	if (newState == 1 && typeof $("#kitty").attr("data-started") == "undefined") {
		$("#kitty").attr("data-started","true").fadeIn(300, function(){
			setTimeout(function(){
				$("#permalink").css({left: 0, top: $("#permalink").height() * -1});
				$("#footer").css({opacity: 0});
				$("#footer ul").css({display: "block"});
				$("#footer").css({top: $(window).height() + $("#footer").height(), left: $(window).width() - $("#footer").width() - 6});
				$("#permalink").animate({top: 7, opacity: 1});
				$("#socialmedia").fadeIn();
				$("#footer").animate({top: $(window).height() - $("#footer").height() - 30, opacity: 1});
			},700);
		});
	}
	if (newState == 0) window.location.href = "/";
}

function getYouTubeInfo(video) {
	$.ajax({
		url: "http://gdata.youtube.com/feeds/api/videos/" + video + "?v=2&alt=json",
		dataType: "jsonp",
		success: function (data) {parseresults(data, video)}
	});
}

function parseresults(data, video) {
	var title = data.entry.title.$t;
	var description = data.entry.media$group.media$description.$t;
	var viewcount = data.entry.yt$statistics.viewCount;
	var author = data.entry.author[0].name.$t;
	$("#info").html('<br /><span><a class=\"youtube\" title=\"Link to audio source\">&nbsp;</a>' + title + " <a href=\"http://www.youtube.com/watch?v=" + video + "\" target=\"_blank\"><em>view on YouTube</em></a></span>").show();
}

var rand = '';
var theCats = [];
theCats.push(new cats('0','http://8.19.33.130/images/running.gif', '6Vx4J_NtNPk'));
theCats.push(new cats('0','http://8.19.33.130/images/e9906e9a-3bd0-4b92-ae96-4fc7c524f98a.gif', 'ClrGrxQD8QA'));
theCats.push(new cats('0','http://8.19.33.130/images/dancingcat.gif', 'Txq736EVa80'));
theCats.push(new cats('0','http://8.19.33.130/images/qkDqh_The_fuck_was_that-s285x214-29996-580.gif', 'Ji7nNsBz8no'));
theCats.push(new cats('0','http://8.19.33.130/images/t4bwezAizi5vheyfzqgZo1Bjo1_400.gif', 'KyK9YDYyhLY'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lv4limplnH1qz787to1_400.gif', '8vrpa4nGRkE'));
theCats.push(new cats('0','http://8.19.33.130/images/53.gif', 'nfwD05XA2YQ'));
theCats.push(new cats('0','http://8.19.33.130/images/40.gif', 'bY-oMCmrvPM'));
theCats.push(new cats('0','http://8.19.33.130/images/35.gif', 'iPUmE-tne5U'));
theCats.push(new cats('0','http://8.19.33.130/images/27.gif', 'EdBZeCtaaLY'));
theCats.push(new cats('0','http://8.19.33.130/images/2.gif', 'UC86yQAzaxg'));
theCats.push(new cats('0','http://8.19.33.130/images/4d7cddd4544445ad1e9483d0d6b7dd86.gif', '0NSFOgw1PqQ'));
theCats.push(new cats('0','http://8.19.33.130/images/cat-tongue.gif', 'yunSRfnsVck'));
theCats.push(new cats('0','http://8.19.33.130/images/catgifpage84.gif', 'Z0a8YCL9Kek'));
theCats.push(new cats('0','http://8.19.33.130/images/11.gif', '0m4xDxRtH6k'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lk875maJ881qc72lz.gif', 'QH2-TGUlwu4'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lpl4rzh5Yl1qijm74o1_500.gif', 'rYBUDRSeeeE'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lsxjzwG4Hy1qgzaeko1_500.gif', 'OKbLI8EufNo'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lsdu4xjKIH1r45mcto1_500.gif', 'vJcAnEk_hgE'));
theCats.push(new cats('0','http://8.19.33.130/images/UlLkh.gif', 'fOHrY0jV6Hg'));
theCats.push(new cats('0','http://8.19.33.130/images/thunder.gif', '46ODcj51Tmk'));
theCats.push(new cats('0','http://8.19.33.130/images/catgifpage82.gif', 'psOfz7Wr77I'));
theCats.push(new cats('0','http://8.19.33.130/images/b6d459acf3c306c90f836bb312852f78.gif', 'LKM_8dXD65U'));
theCats.push(new cats('0','http://8.19.33.130/images/36.gif', 'AeTgx_pj6m8'));
theCats.push(new cats('0','http://8.19.33.130/images/47.gif', 'xAquRuqyQQc'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lugw9wsjHU1qzi1qgo1_250.gif', 'jhUkGIsKvn0'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lk0oxyafUr1qbhtrto1_400.gif', 'NIzyoKsWTA4'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_luj0a13Dfy1qcw1zto1_400.gif', 'U5TqIdff_DQ'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_ls592twkOg1qcapd0o1_500.gif', 'irp8CNj9qBI'));
theCats.push(new cats('11','http://8.19.33.130/images/tumblr_lq3u6w1ZUi1qbt59oo1_500.gif', 'WNpGCmwXVFA'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lv8ohpMtMO1qdrnl5o1_500.gif', 'gZdHqEFK0ew'));
theCats.push(new cats('61','http://8.19.33.130/images/tumblr_lv57uojPhv1qfjjglo3_250.gif', 'ZUatnbaNfEo'));
theCats.push(new cats('0','http://8.19.33.130/images/catgifpage72.gif', 'O3erBcUTj0U'));
theCats.push(new cats('69','http://8.19.33.130/images/tumblr_ls5m19PYlN1qcapd0o1_500.gif', 'qORYO0atB6g'));
theCats.push(new cats('10','http://8.19.33.130/images/4cd2624c4fc742cdfb5a47b4523d7543809b545a_m.gif', 'j5C6X9vOEkU'));
theCats.push(new cats('17','http://8.19.33.130/images/tumblr_lqh7oaCrhA1qbt59oo1_400.gif', 'LfmrHTdXgK4'));
theCats.push(new cats('20','http://8.19.33.130/images/catgifpage30-1.gif', 'lC6vZOgYduk'));
theCats.push(new cats('12','http://8.19.33.130/images/7375125409.gif', '2hClJ4WRhbg'));
theCats.push(new cats('2','http://8.19.33.130/images/catsareeverywhere.tumblr.gif', 'W7J92Vv5w58'));
theCats.push(new cats('5','http://8.19.33.130/images/catgifpage100.gif', 'GD3VsesSBsw'));
theCats.push(new cats('0','http://8.19.33.130/images/verycherrypeel.tumblr.gif', '7IiLZ0dvDWU'));
theCats.push(new cats('2','http://8.19.33.130/images/tumblr_lkkfw2IWzp1qadw96o1_500.gif', '4eGQ5VFt7P4'));
theCats.push(new cats('7','http://8.19.33.130/images/983625.gif', 'YfhTKx43ezU'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_ljejnhbREk1qcn249o1_500.gif', 'z5rRZdiu1UE'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lizhjnJIp91qdqgwf.gif', 'tr-yOUwnuGY'));
theCats.push(new cats('14','http://8.19.33.130/images/tumblr_limn9aFJV71qcn249o1_400.gif', 'tPB84Plv8tc'));
theCats.push(new cats('100','http://8.19.33.130/images/tumblr_lrgvtpf8N01r037lwo1_500.gif', '1qsgBF7ZIsk'));
theCats.push(new cats('24','http://8.19.33.130/images/tumblr_lfr7r8bcYe1qcn249o1_500.gif', '6lE6Htee0sA'));
theCats.push(new cats('260','http://8.19.33.130/images/tumblr_lgpu9cl3gm1qcn249o1_400.gif', '7YD8pfnqeP4'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lemtqvDq0Z1qcn249o1_500.gif', 'fc2ACoBmKK8'));
theCats.push(new cats('15','http://8.19.33.130/images/tumblr_lel3qdTJoY1qcn249o1_400.gif', 'VBdSqk78nHw'));
theCats.push(new cats('56','http://8.19.33.130/images/tumblr_lee9z4mejl1qcn249o1_400.gif', '1mdgLn5BFRQ'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_l59iq9m61J1qcn249o1_250-1.gif', 'i1rvLst5bts'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_l4zvowhoEZ1qcn249o1_250.gif', 'CJKyTNQSbWo'));
theCats.push(new cats('16','http://8.19.33.130/images/tumblr_l5d3911dhG1qcn249o1_500.gif', 'otCpCn0l4Wo'));
theCats.push(new cats('43','http://8.19.33.130/images/plastikman.gif', '0wJHvOaJdi0'));
theCats.push(new cats('18','http://8.19.33.130/images/roxbury.gif', 'Gsj7pMbMpSQ'));
theCats.push(new cats('6','http://8.19.33.130/images/bij.gif', 'c98qdFQF7sw'));
theCats.push(new cats('1','http://8.19.33.130/images/what.gif', 'DbaOFkC8tQE'));
theCats.push(new cats('1','http://8.19.33.130/images/tumblr_lsylnpmlTC1r4y6xto1_500.gif', 'J83jBZ4dK0Y'));
theCats.push(new cats('28','http://8.19.33.130/images/tumblr_lu9o1eOBVr1qhed4wo1_250.gif', 'ZvCI-gNK_y4'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lrd09pcM1f1qdt23mo5_250-1.gif', '9DkrSwIROxI'));
theCats.push(new cats('91','http://8.19.33.130/images/catgifpage43.gif', 'OgcY6qlzdf8'));
theCats.push(new cats('191','http://8.19.33.130/images/anigif_enhanced-buzz-3054-1323296437-22.gif', 'NjTLKKgcVxM'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lugq7ebwNz1qg3fqqo1_400.gif', 'SjJwqDa1QVI'));
theCats.push(new cats('15.4','http://8.19.33.130/images/funny-pictures-gifs-rolling-cat.gif', 'GrFzB3CvU9M'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lj8yprbouu1qc7554.gif', 'lX-EW53XVkM'));
theCats.push(new cats('0','http://8.19.33.130/images/10847.gif', 'VgSMxY6asoE'));
theCats.push(new cats('31','http://8.19.33.130/images/tumblr_lg3i47epIK1qght7mo1_500-2.gif', 'OeYN_hyR9YI'));
theCats.push(new cats('69','http://8.19.33.130/images/lazorcat.gif', '3_rPs5W2k_M'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_luy6omZT381qaf67i.gif', 'wGuCvFdrWPg'));
theCats.push(new cats('35','http://8.19.33.130/images/tumblr_lt2e1kUOTt1qzt824o2_250.gif', 'SLVHEPYEBLU'));
theCats.push(new cats('0','http://8.19.33.130/images/zNDfB.gif', '0S43IwBF0uM'));
theCats.push(new cats('0','http://8.19.33.130/images/tumblr_lkx04suye01qe1ucbo1_400.gif', 'p4oya9nYv7Q'));
theCats.push(new cats('0','http://8.19.33.130/images/ijaefiae_92dwid.gif', 'uPU4DJG4phg'));
theCats.push(new cats('15.5','http://8.19.33.130/images/tumblr_l8r9hlbd6p1qcjwayo1_400.gif', 'sSiyA1cLTWQ'));
theCats.push(new cats('114','http://8.19.33.130/images/tumblr_lpjaopydHb1qigppno1_250.gif', 'XflfiylNNXY'));
theCats.push(new cats('120','http://8.19.33.130/images/684ac231jw1do71rb7alug.gif', 'wlq0lYB3iSM'));

$(document).ready(function() {	

	$(window).resize(function() {
		if ($("#kitty").length > 0) {
			$("#kitty").css({height: $(window).height(), width: $(window).width()});
			$("#footer").css({top: $(window).height() - $("#footer").height() - 30, left: $(window).width() - $("#footer").width() - 6});
		}
	});
	
	var qsKitty = $.getUrlVar('cat');

	if (typeof qsKitty != "undefined" && typeof theCats[qsKitty] != "undefined") rand = qsKitty;
	if (rand == '') rand = Math.round(Math.random()*(theCats.length - 1));

	getYouTubeInfo(theCats[rand].video)

	$("#permalink").html('<span><a class="permalink" title="Permalink to this procatinator" href="http://procatinator.com/?cat='+rand + '">http://procatinator.com/?cat=' + rand + "</a></span><div id=\"info\"></div><br /><span class=\"other\"><a href=\"/\">Show me another cat &rarr;</a></span>");
	$("#blank").css({width: $(window).width(), height: $(window).height(), "padding-top": ($(window).height() / 2) - 100}).fadeIn(100);
	$("#blank strong:first").css({"text-decoration":"underline"});
	$('<img id="kitty" height="' + $(window).height() + '" width="' + $(window).width() + '" src="' + theCats[rand].gif + '" alt="" style="z-index: 900; position: absolute; top: 0; left: 0;" />').appendTo("body");
	$("#kitty").load(function(){
		$//("#loading").spin(spinnerOpts);
		//$('div[aria-role="progressbar"]').css({"position":"relative", "top": "50px", "left": "50px"});
		$("#blank strong:last").css({"text-decoration":"underline"});
		setTimeout(function(){
			$("#blank .almost").fadeIn(300);
		},600);
		var params = { allowScriptAccess: "always" };
		var atts = { id: "myytplayer" };
		swfobject.embedSWF("http://www.youtube.com/v/" + theCats[rand].video + "?enablejsapi=1&playerapiid=ytplayer&version=3",
		                      "ytapiplayer", "400", "400", "8", null, null, params, atts);
	});
});