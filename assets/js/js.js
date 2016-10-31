
var lists = ["Cats" , "Dogs", "Crocodile"];



lists.forEach( function(element, index) {
	var item = $('<a href="#" class="btn btn-success list" data-set ='+ element + '>' +element+ '</a>' );
	$("#ls").append(item);

});


$(".list").on("click", getPictures);


function getPictures (argument) {

	var  q = $(this).data("set");
	console.log(q);
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+q+"&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(response);

}


function response (res) {
	console.log(res);
	$(".pic").empty();
	for (var i = 0 ; i < res.data.length ; i++ ){
		
		var url_still = res.data[i].images.fixed_height_still.url;
		var url = res.data[i].images.fixed_height.url;

var div = $("<div></div>");
div.addClass("giphy");

var p = $("<p>");
p.text(res.data[i].rating);
p.css("text-align", "center");


		var ima = $("<img></img>");
		ima.attr("src" , url_still);
		ima.attr("animate", url);
		ima.addClass("images");	
		


		div.append(ima);
	
div.append(p);

$(".pic").append(div);


}

}


$(".add").on("click", add);

function add () {
	
	var add = $("#text").val();
	//console.log(add);
	var item = $('<a href="#" class="btn btn-success list" data-set ='+ add.replace(" ", "_") + '>' +add+ '</a>' );
	$("#ls").append(item);
	$(".list").on("click", getPictures);
}

function play (argument) {
	
	
	var tem ;

	tem = $(this).attr("animate");

	$(this).attr("animate", $(this).attr('src'));

	$(this).attr('src', tem);

}

$(document).on("click", ".images", play);