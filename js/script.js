$(document).ready(function(){
	var eevee = "http://pokeapi.co/api/v2/pokemon/133";
	var growlithe = "http://pokeapi.co/api/v2/pokemon/58";
	var dratini = "http://pokeapi.co/api/v2/pokemon/147";
	var oddish = "http://pokeapi.co/api/v2/pokemon/43";
	var ponyta = "http://pokeapi.co/api/v2/pokemon/77";
	var jigglypuff = "http://pokeapi.co/api/v2/pokemon/39";
	var geodude = "http://pokeapi.co/api/v2/pokemon/74";
	var snorlax = "http://pokeapi.co/api/v2/pokemon/143";  
	var pokemonOptions = { format: "json" };
	var $lightbox = $('<div id="lightbox"></div>');
	var $caption = $('<div id="caption"></div>');
	var $close = $('<a id="close" href="#">X</a>');
	$lightbox.append($caption);
	$lightbox.append($close);
	$("body").append($lightbox);

	function getSelectedInfo (data) {
		var pokemonHTML = '<h1 id="#' + data.name + ' ">Name: ' + data.name;
		pokemonHTML += '<br />ID: ' + data.id;
		pokemonHTML += '<br />Weight: ' + data.weight;
		pokemonHTML += '<br />Type: ' + data.types[0].type.name;
		pokemonHTML += '<img src=" ' + data.sprites.front_default + ' " /></h1> ';
		$caption.html(pokemonHTML);
		$lightbox.show();
    }

	$("#close").click(function(){
		$lightbox.hide();
	});

	$.getJSON(eevee, pokemonOptions, function(data){
		var $thumbnail = $('<div class="thumbnail" id="eeveeImg"><img alt="eevee" src="img/eevee.png"</div>');
		$("#pokemon_gallery").append($thumbnail);
		$("#eeveeImg").click(function(){
			getSelectedInfo(data);
		});
	});

	$.getJSON(growlithe, pokemonOptions, function(data){
		var $thumbnail = $('<div class="thumbnail" id="growlitheImg"><img alt="growlithe" src="img/growlithe.png"</div>');
		$("#pokemon_gallery").append($thumbnail);
		$("#growlitheImg").click(function(){
			getSelectedInfo(data);
		});
	});

	$.getJSON(dratini, pokemonOptions, function(data){
		var $thumbnail = $('<div class="thumbnail" id="dratiniImg"><img alt="dratini" src="img/dratini.png"</div>');
		$("#pokemon_gallery").append($thumbnail);
		$("#dratiniImg").click(function(){
			getSelectedInfo(data);
		});
	});

	$.getJSON(oddish, pokemonOptions, function(data){
		var $thumbnail = $('<div class="thumbnail" id="oddishImg"><img alt="oddish" src="img/oddish.png"</div>');
		$("#pokemon_gallery").append($thumbnail);
		$("#oddishImg").click(function(){
			getSelectedInfo(data);
		});
	});

	$.getJSON(ponyta, pokemonOptions, function(data){
		var $thumbnail = $('<div class="thumbnail" id="ponytaImg"><img alt="ponyta" src="img/ponyta.png"</div>');
		$("#pokemon_gallery").append($thumbnail);
		$("#ponytaImg").click(function(){
			getSelectedInfo(data);
		});
	});

	$.getJSON(jigglypuff, pokemonOptions, function(data){
		var $thumbnail = $('<div class="thumbnail" id="jigglypuffImg"><img alt="jigglypuff" src="img/jigglypuff.png"</div>');
		$("#pokemon_gallery").append($thumbnail);
		$("#jigglypuffImg").click(function(){
			getSelectedInfo(data);
		});
	});

	$.getJSON(geodude, pokemonOptions, function(data){
		var $thumbnail = $('<div class="thumbnail" id="geodudeImg"><img alt="geodude" src="img/geodude.png"</div>');
		$("#pokemon_gallery").append($thumbnail);
		$("#geodudeImg").click(function(){
			getSelectedInfo(data);
		});
	});

	$.getJSON(snorlax, pokemonOptions, function(data){
		var $thumbnail = $('<div class="thumbnail" id="snorlaxImg"><img alt="snorlax" src="img/snorlax.png"</div>');
		$("#pokemon_gallery").append($thumbnail);
		$("#snorlaxImg").click(function(){
			getSelectedInfo(data);
		});
	});


});
