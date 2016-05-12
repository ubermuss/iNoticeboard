//var a = $("#snackbarid").attr('data-content','Passwords dont match')
var request;
$("#login").submit(function(e){
	//perform validation
	if($('#RegNo').val()==""){
		// $("#snackbarid").data('content','first-name missing');
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		return false;
	}else if($('#Password').val()==""){
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		return false;
	}
	else{
		//capture form data
		var formData = $(this).serialize();
		//caching all the fields 
		var $inputs = $(this).find("input, select, button, textarea");
		 // disables the inputs for the duration of the Ajax request.
		$inputs.prop("disabled",true);
	
		//abort any pending request
		if(request){
			request.abort();
		}
		// fire the ajax request
		request = $.ajax({
			url:url+"authenticateUser.php",
			type:"post",
			data:formData
		})
	// on sucess return the response
	request.done(function(response,textStatus,jqXHR){
		// console.log(response+" "+textStatus+" "+jqXHR );
	if(response.status==0){
		console.log(formData);
		$("#snackbarid").attr('data-content','Incorrect password or email');
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		$("#snackbarid").attr('data-content','Fill in the fields');
		return false;
	} else {
		// Capture the user cookies
		console.log(response.U_ID);
		Cookies.set(response);
		var values;
		values = Cookies.set("cred",response);
		var info = Cookies.getJSON("cred");
		console.log(info);
		window.location.href="index.html";
		//redirect to the index page
		// window.location="index.html";
	}
	});
	// on error return the errors occured
	request.error(function(response,textStatus,jqXHR){
		$("#snackbarid").attr('data-content','Something went wrong :(');
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		$("#snackbarid").attr('data-content','Fill in the fields');
		console.log("Error occur: "+textStatus+" "+jqXHR );
	})
	//if the request failed or succeed
	request.always(function(response,textStatus,jqXHR){
		$inputs.prop("disabled", false);
	});
		//prevent form from refrehsing
		e.preventDefault();}
});