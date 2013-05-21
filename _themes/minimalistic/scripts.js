//Przyklejenie stopki do dolu
$(function(){
    positionFooter(); 
    function positionFooter(){
        if($("#wrapper").height() < $(window).height()){
				var wheight = $(window).height();
				$("#wrapper").css({"min-height":wheight-121});
        }   
    }

    $(window).resize(positionFooter);

});

//Wysrodkowanie malych obrazkow
$(document).ready(function() {
	
	$(".object img").load(function() {
		var imgheight = $(this).height();
		var oheight = $(this).parent().parent().height();
		if(imgheight < oheight) {
			$(this).css({"margin-top":((oheight-imgheight)/2)+"px"});
		}
	});
});

//Zakladki
$(function(){
	$('#tabs div').hide();
	$('#tabs div:first').show();
	$('#tabs ul li:first').addClass('active');
 
	$('#tabs ul li a').click(function(){
		$('#tabs ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#tabs div').hide();
		$(currentTab).show();
		return false;
	});

});

//Rozwijane bloki w profilu (profile.php & user.php)
$(function() {
	$(".block.roll:not(:first)").css({"margin-bottom":25});
	$(".block.roll:not(:first)").children("div.tresc").hide();
	$(".block.roll").children("h1").click(function() {
		var div = $(this).next("div.tresc");
					
		if(div.is(":hidden")) {
			div.show("normal");
						
			$(".block.roll div.tresc").not(div).hide("normal");
			$(div).parent().animate({"margin-bottom":0},"normal");
			$(".block.roll:not(:last)").not($(div).parent()).animate({"margin-bottom":25},"normal");
		}
	});			 
});

//Div z formularzem wgrywania avatara
$(function() {
	$('div[class="select_avatar"]').hide();
	$('.avatar').click( function() { $('div[class="select_avatar"]').toggle(); }); 
});