var sports =["football", "basketball", "baseball", "soccer", "tennis"];

function displaySports() {
	var sport = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=monkey&limit=5&api_key=dc6zaTOxFJmzC ";
	$.ajax({
		queryURL: queryURL,
		meghod: "GET"
	}).done(function(response) {
		console.log(response);
	});
}

displaySports();

function addButtons {
	$("#buttons-view").empty();
	for (var i = 0; i<movies.length; i++) {
		var a =$("button");
		a.addClass("sport");
		a.attr("data-name", sports[i]);
		a.text(sports[i]);
		$("#buttons-view").append(a);
	}
}

$("#add-sport").on("click", function(event) {
	event.preventDefault();
	var sport = $("#button-input").val().trim();

	sports.push(sport);
	console.log(sports);

	addButtons();
});

