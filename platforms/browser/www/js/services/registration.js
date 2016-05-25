$('#reg').on('keydown', 'input', function (event) {
    if (event.which == 13) {
        event.preventDefault();
        var $this = $(event.target);
        var index = parseFloat($this.attr('data-index'));
        $('[data-index="' + (index + 1).toString() + '"]').focus();
    }
});
//var a = $("#snackbarid").attr('data-content','Passwords dont match')
var request;
$("#reg").submit(function(e){
	//perform validation
	if($('#Fname').val()==""){
		// $("#snackbarid").data('content','first-name missing');
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		return false;
	}else if($('#Lname').val()==""){
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		return false;
	}else if($('#RegNo').val()==""){
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		return false;
	}else if($('#Email').val()==""){
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		return false;
	}else if($('#Password').val()==""){
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		return false;
	} else if($('#Password').val()!=$('#CPassword').val()){
		$("#snackbarid").attr('data-content','Passwords dont match');
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		$("#snackbarid").attr('data-content','Fill in the fields');
		return false;
	}
	else{
		//capture form data
		var formData = $(this).serialize();
		//caching all the fields 
		var $inputs = $(this).find("input, select, button, textarea");
		 // disables the inputs for the duration of the Ajax request.
		$inputs.prop("disabled",true);
		console.log(formData);
		//abort any pending request
		if(request){
			request.abort();
		}
		// fire the ajax request
		request = $.ajax({
			url:url+"registerUser.php",
			type:"post",
			data:formData
		})
	// on sucess return the response
	request.done(function(response,textStatus,jqXHR){
		// console.log(response+" "+textStatus+" "+jqXHR );
	if(response.status==1){
		window.location="verify.html";
	} else {
		$("#snackbarid").attr('data-content','Registration was incompete');
		$("#snackbarid").snackbar("show");
		$("#snackbarid").snackbar("toggle");
		$("#snackbarid").attr('data-content','Fill in the fields');
		return false;
	}
	});
	// on error return the errors occured
	request.error(function(response,textStatus,jqXHR){
		console.log("Error occur: "+textStatus+" "+jqXHR );
	})
	//if the request failed or succeed
	request.always(function(response,textStatus,jqXHR){
		$inputs.prop("disabled", false);
	});
		//prevent form from refrehsing
		e.preventDefault();}
});