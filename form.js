//Password and Username accepted features in JS.

var form = document.getElementById("form");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	var input = document.getElementById("name");
	var username = document.getElementById("name").value;
		var password = document.getElementById("password").value;
	var numbers = /[0-9]+/;
		if(password === "12345678" && username.match(numbers)) {
			alert("Information Accepted!");
			input.innerHtml = "Stay on Page";
	} else  {
		alert("Invalid Password or Username or Both");
	}
});
