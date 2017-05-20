




var sports =["football", "basketball", "baseball", "soccer", "tennis"];

function displaySports() {
	var sport = $(this).attr("data-sport");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=dc6zaTOxFJmzC&limit=10";
	
	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(response) {
		console.log(queryURL);
		console.log(response);
		var results = response.data; 
		for (var j=0; j<=10; j++) {
			
			$("<button>");
			var sportDiv = $("<div>");
			var p = $("<p>").text("Rating: " + results[j].rating);
            var sportImage = $("<img>");
            sportImage.attr("data-state", "still");            
            sportImage.attr("src", results[j].images.fixed_height.url);
            sportImage.attr("data-still", results[j].images.fixed_height_still.url);
            sportImage.attr("data-animate", results[j].images.fixed_height_downsampled.url);
            sportDiv.append(p);
            sportDiv.append(sportImage);
            $("#gifs").prepend(sportDiv);

		}
	});
}

function addButtons() {
	$("#buttons-view").empty();
	for (var i = 0; i<sports.length; i++) {
		var a = $("<button>");
		a.addClass("sport");
		a.attr("data-sport", sports[i]);
		a.text(sports[i]);
		$("#buttons-view").append(a);
	}
}

$("#add-sport").on("click", function(event) {
	event.preventDefault();
	var sportInput = $("#button-input").val().trim();

	sports.push(sportInput);

	addButtons();
});

$(document).on("click", ".sport", displaySports);
      addButtons();

