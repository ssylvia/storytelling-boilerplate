define(["lib/jquery/jquery-1.10.2.min"], 
	function(Jquery){
	/**
	* Social Sharing
	* @class Social Sharing
	* 
	* Collection of methods to share app with social media sites
	*/

	$("#social .social-share").click(function(){
		if ($(this).hasClass("icon-facebook")) {
			var options = '&p[title]=TestTitle&p[summary]=TestSummary&p[url]=' + encodeURIComponent(document.location.href);

			window.open(
				'http://www.facebook.com/sharer.php?s=100' + options, 
				'Facebook sharing', 
				'toolbar=0,status=0,width=626,height=436'
			);
		}
		else if($(this).hasClass("icon-twitter")) {
			alert("Twitter");
		}
		else{
			alert("Bitly");
		}
	});


});