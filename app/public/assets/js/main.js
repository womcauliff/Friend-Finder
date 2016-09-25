$("#submit").on('click', function () {

	var formData = {
		name: $("#name").val(),
		image: $("#image").val(),
		scores: [
			$('input[name=q1]:checked').val(),
			$('input[name=q2]:checked').val(),
			$('input[name=q3]:checked').val(),
			$('input[name=q4]:checked').val(),
			$('input[name=q5]:checked').val(),
			$('input[name=q6]:checked').val(),
			$('input[name=q7]:checked').val(),
			$('input[name=q8]:checked').val(),
			$('input[name=q9]:checked').val(),
			$('input[name=q10]:checked').val()
		]
	};

	if (formData.name == undefined) {
		alert("Please provide a name");
	}
	else if(formData.image == undefined) {
		alert("Please provide a url to a photo.");
	}
	else if(!allAnswered(formData.scores)) {
		alert("Please provide a rating for each film.");
	}
	else {
		console.log(formData);

	    $.post(
			window.location.origin + "/api/friends",
			formData,
			function(response) {
				console.log(response);
			}
	    );
	}

	return false;
});

function allAnswered(formScores) {
	for(var i = 0; i < formScores.length; i++) {
		if (formScores[i] == undefined) {
			return false;
		}
	}
	return true;
}