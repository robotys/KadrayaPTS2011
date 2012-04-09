$(function(){

	//first time check kalau no hash send to board
	
	//console.log(pics.piku[0].key)
	//randomly put awan
	//decide how many awan (random)
	var awan_total = 0;
	var gunung_total = 0;
	var awan_width = 0;
	var awan_style = 0;
	var awan_layer = 0;
	var gunung_width = 0;
	var gunung_style = 0;
	var gunung_layer = 0;
	var awan_x = 0;
	var awan_xx = new Array();
	var awan_y = 0;
	var gunung_x = 0;
	var gunung_xx = new Array();
	var gunung_y = 0;
	var ratio = [0,50,70,100];
	
	var pos_x = 0;
	var pos_gunung_x = 0;
	
	awan_total = Math.round(Math.random()*4+1);
	gunung_total = Math.round(Math.random()*3+1);
	
	//place awan for the first time
	for(var i = 0; i<awan_total; i++){
		awan_style = Math.round(Math.random()*6+1);
		awan_layer = Math.round(Math.random()*2+1);
		awan_width = Math.round(Math.random()*100+50);
		awan_x = Math.round(Math.random()*window.innerWidth);
		awan_y = Math.round(Math.random()*(window.innerHeight/8));
		
		$('.background').append("<img src='assets/elements/awan"+awan_style+".png' class='awan awan"+i+"' style='position:absolute; left:"+awan_x+"px; top:"+awan_y+"px; width:"+awan_width+"px; z-index:"+awan_layer+"'/>");
	}
	
	//Place gunung background, random x
	var z_index = 1;
	var rand_x = Math.round(Math.random()*window.innerWidth);
	$('.background').append("<img src='assets/elements/gunung1.png' id='gunung1' style='z-index:"+z_index+"'/>");
	$('#gunung1').css({position: 'absolute', top: '190px', left: rand_x+'px'});
	
	rand_x = Math.round(Math.random()*window.innerWidth);
	$('.background').append("<img src='assets/elements/gunung2.png' id='gunung2' style='z-index:"+z_index+"'/>");
	$('#gunung2').css({position: 'absolute', top: '190px', left: rand_x+'px'});
	
	//Place sketch background, random x
	z_index = 3;
	rand_x = Math.round(Math.random()*window.innerWidth);
	$('.background').append("<img src='assets/elements/sketch1.png' id='gunung3' style='z-index:"+z_index+"'/>");
	$('#gunung3').css({position: 'absolute', top: '190px', left: rand_x+'px'});
	
	rand_x = Math.round(Math.random()*window.innerWidth);
	$('.background').append("<img src='assets/elements/sketch2.png' id='gunung4' style='z-index:"+z_index+"'/>");
	$('#gunung4').css({position: 'absolute', top: '190px', left: rand_x+'px'});
	
	rand_x = Math.round(Math.random()*window.innerWidth);
	$('.background').append("<img src='assets/elements/sketch3.png' id='gunung5' style='z-index:"+z_index+"'/>");
	$('#gunung5').css({position: 'absolute', top: '190px', left: rand_x+'px'});
	
	rand_x = Math.round(Math.random()*window.innerWidth);
	$('.background').append("<img src='assets/elements/sketch4.png' id='gunung6' style='z-index:"+z_index+"'/>");
	$('#gunung6').css({position: 'absolute', top: '190px', left: rand_x+'px'});
		
	/*
	//place gunung for the first time
	for(var iii = 0; iii<gunung_total; iii++){
		gunung_style = Math.round(Math.random()*1+1);
		//gunung_layer = Math.round(Math.random()*2+1);
		gunung_x = Math.round(Math.random()*window.innerWidth);
		gunung_y = Math.round(Math.random()*(window.innerHeight/8));
		
		
		
		if(gunung_style == 1 || gunung_style == 2){
			z_index = 1;
			$('.background').append("<img src='assets/elements/gunung"+gunung_style+".png' id='gunung"+iii+"' style='z-index:"+z_index+"'/>");
			$('#gunung'+iii).css({position: 'absolute', top: '190px', left: gunung_x+'px'});
		}
		else{
			z_index = 3;		
			$('.background').append("<img src='assets/elements/sketch"+gunung_style+".png' id='gunung"+iii+"' style='z-index:"+z_index+"'/>");
			$('#gunung'+iii).css({position: 'absolute', top: '190px', left: gunung_x+'px'});
		}
		*/
	//}
	
	 
	//$("#peoples img").hide();
	//$(window.location.hash).show();
		
	//MANAGE ARROW CLICK
	//set JSON of array of pictures
	var pics = {
					"board":{ "name": "Pengarah", "top": "-20", "width": "700", "left":"-80", "youtube":"5Bertw-RRzY"},
					"corporate":{ "name": "Eksekutif Pembangunan Bisnes", "top": "-10", "width": "220", "youtube":""},
					"akaun":{ "name": "Jabatan Akaun", "top": "-20", "width": "500", "youtube":"8b-BiG_q0iE"},
					"hr":{ "name": "Jabatan Sumber Manusia", "top": "10", "width": "500", "left":"140", "youtube":"0_WisCsdoQ0"},
					"production":{ "name": "Jabatan Produksi", "top": "-50", "width": "600", "left": "-100", "youtube":"Lv3VSGeI3Bg"},
					"sales":{ "name": "Jabatan Jualan", "top": "0", "width": "1100", "left":"-270", "youtube":"1cOekq-dZU0"},
					"marketing":{ "name": "Jabatan Pemasaran", "top": "20", "width": "1100", "left" : "-280", "youtube":"1ZRKvS319XY"},
					"grafik":{ "name": "PTS Grafik", "top": "0", "width": "700", "left": "-80", "youtube":"Es8m7jASemo"},
					"edar":{ "name": "PTS Edar", "top": "-20", "width": "320", "youtube":"CH5IRQPQUEo"},
					"bookcafe":{ "name": "PTS Bookcafe", "top": "-70", "width": "480", "youtube":"HBDK54d6Pl4"},
					"milenia":{ "name": "PTS Millenia", "top": "-30", "width": "460", "youtube":"lXrsrPbz_WM"},
					"pro":{ "name": "PTS Profesionals", "top": "-30", "width": "700", "left":"-100", "youtube":"MvemhojcVMs"},
					"one":{ "name": "PTS One", "top": "00", "width": "700", "left":"-80", "youtube":"XrcrgzeyCPc"},
					"pop":{ "name": "PTS POP", "top": "-30", "width": "450", "youtube":"z4iZK5lQB0E"},					
					"islamika":{ "name": "PTS Islamika", "top": "0", "width": "770", "left":"-90", "youtube":"io-QJmYOy5o"},
					"litera":{ "name": "PTS litera", "top": "-10", "width": "900", "left":"-200", "youtube":"bGp_KHtvPHU"},
					"netmedia":{ "name": "PTS Netmedia", "top": "100", "width": "300", "youtube":"lCqUvCIk-k0"},
					"furqan":{"name": "PTS Furqan", "top": "", "width": "400", "youtube":"mbIaRGqJG0A"},				
					"warehouse":{ "name": "Tim Gempur (Gudang)", "top": "100", "width": "1100", "left": "-280", "youtube":"6TPkVOlkJx4"}
				}
	
	//INSERT PICS into peoples by turutan di atas	
	$.each(pics, function(index, val){		
		$("#peoples").append("<img id='"+index+"' name='"+val.name+"' src='assets/pics/"+index+".png' style='margin-top:"+val.top+"px; width:"+val.width+"px; margin-left:0px; display: none;'/>");
	});
	
	
	$("#peoples").append("<div class='tanda'>Jabatan</div>");
	
	
	//First load	
	function loader(show, next, prev){
		$("#nxt span").html((pics[next].name));		
		$("#prev span").html((pics[prev].name));	
		$("#peoples img").hide();
		$("#"+show).fadeIn(500);
		
		$('.emb').html("<iframe width='300' height='215' src='http://www.youtube.com/embed/"+pics[show]['youtube']+"' frameborder='0' allowfullscreen></iframe>");
		//$('.FB').html("<div id='fb-root'></div><script src='http://connect.facebook.net/en_US/all.js#xfbml=1'></script><fb:comments href='pts.com.my/kadraya2011?k="+show+"' num_posts='0' width='500'></fb:comments>");
		$('.tanda').html(pics[show].name);
		//			
	}
	
	//Set first data
	var now = 'board';
	var next = $("#"+now).next().attr('id');
	var prev = $("#"+now).prev().attr('id');
	var first = $("#peoples img:first").attr('id');
	var last = $("#peoples img:last").attr('id');		
	if(next == "") next = first;
	if(prev == undefined) prev = last;
		
	loader(now, next,prev);
	
	
	
	$("#nxt").click(function(){
		var first = $("#peoples img:first").attr('id');
		var last = $("#peoples img:last").attr('id');	
		
		if(now!=last) now = $("#"+now).next().attr('id');
		else now = first;
		
		var next = $("#"+now).next().attr('id');
		var prev = $("#"+now).prev().attr('id');
			
		if(next == "") next = first;
		if(prev == undefined) prev = last;
		
		loader(now, next, prev);
	});
	
	$("#prev").click(function(){
		var first = $("#peoples img:first").attr('id');
		var last = $("#peoples img:last").attr('id');	
		
		if(now!=first) now = $("#"+now).prev().attr('id');
		else now = last;
		
		var next = $("#"+now).next().attr('id');
		var prev = $("#"+now).prev().attr('id');
			
		if(next == "") next = first;
		if(prev == undefined) prev = last;
		
		loader(now, next, prev);
	});
	
	
	/*
	
	$(window).hashchange( function(){		
		
		$("#nxt").attr('href', "#"+($(location.hash).next().attr('id')) );		
		$("#nxt span").html(($(location.hash).next().attr('name')) );		
		
		//if($(location.hash).prev().attr('id') == undefined) console.log("yeah")
		$("#prev").attr('href', "#"+($(location.hash).prev().attr('id')) );		
		$("#prev span").html(($(location.hash).prev().attr('name')) );		
	
		
		//if first child, set prev to last child		
		if(window.location.hash == "#"+$("#peoples img:first").attr('id')){
			$("#prev").attr('href', "#"+($("#peoples img:last").attr('id')) );		
			$("#prev span").html(($("#peoples img:last").attr('name')) );	
		}
		
		//if last child, set next to first
		if(window.location.hash == "#"+$("#peoples img:last").attr('id')){
		
			$("#nxt").attr('href', "#"+($("#peoples img:first").attr('id')) );		
			$("#nxt span").html(($("#peoples img:first").attr('name')) );	
		}
		
		$("#peoples img").hide();
		//$("#more .").hide();
		$(window.location.hash).fadeIn(500);
		//$('#more').load('http://localhost/pts.com.my/kadraya2011/ajax.php?yy='+location.hash.replace("#",""));
		$('.emb').html("<iframe width='300' height='215' src='http://www.youtube.com/embed/"+pics[location.hash.replace("#","")]['youtube']+"' frameborder='0' allowfullscreen></iframe>");
		//$('.FB').html("<div id='fb-root'></div><script src='http://connect.facebook.net/en_US/all.js#xfbml=1'></script><fb:comments href='pts.com.my/kadraya2011"+location.hash+"' num_posts='0' width='500'></fb:comments>");
		$('.tanda').html(pics[location.hash.replace("#","")].name);
	})
	*/
	
	//MOUSE EFFECT
	//get x asal semua awan;
	
	for(var ii=0;ii<awan_total;ii++){
		awan_xx[ii] = $('.awan'+ii).position().left;
		//gunung_xx[ii] = $('#gunung'+ii).position().left;
	}
	
	for(var ii=1;ii<7;ii++){
		//awan_xx[ii] = $('.awan'+ii).position().left;
		gunung_xx[ii] = $('#gunung'+ii).position().left;
	}
	
	var pos_xx_people = $("#peoples").position().left - ($("#peoples").width());
	
	console.log($("#peoples").position().left);
	
	$(document).mousemove(function(e){	
		
		for(var ii = 0; ii<awan_total; ii++){
			
			pos_x = awan_xx[ii]+Math.round((ratio[$('.awan'+ii).css('z-index')])*((e.pageX/window.innerWidth)-0.5));
			
			$('.awan'+ii).css('left', pos_x);
			
		}
		
		for( ii = 1; ii<7; ii++){
			
			pos_x = gunung_xx[ii]+Math.round((ratio[$('#gunung'+ii).css('z-index')])*((e.pageX/window.innerWidth)-0.5));
			
			$('#gunung'+ii).css('left', pos_x);
			
		}
		//$("#peoples").position().left 
		//var pos_x_people = pos_xx_people+Math.round(250*((e.pageX/window.innerWidth)-0.5));
		var pos_x_people = (e.pageX-$(window).width()/2)*0.3;
		
		$('#peoples').css('left', pos_x_people);
		
	}); 
	
	
});