$(document).ready(function() {
	$("#register").click(function() {
		var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var name = $("#name").val();
		var age = $("#age").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var cpassword = $("#cpassword").val();
		
		if(name == '' || age == '' || email == '' || password == '' || cpassword == '') {
			alert("This field cannot be empty. Please fill it!");
		}
		else if((password.length) < 10) {
			alert("The password should at least 10 character long!");
		}
		else if(!(password).match(cpassword)) {
			alert("Your password does not match.");
		}
		else if(!(email.value.match(mailformat))) {
			alert("invalid email Address!");
		}
		else {
			$.post("register.php", {
				name1: name,
				age1: age,
				email1: email,
				password1: password
			}, function(data) {
				if(data == 'You have registered to the program. Thank you.') {
					$("form")[0].reset();
				}
				alert(data);
			});
		}
	});
});
