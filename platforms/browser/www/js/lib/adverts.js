// get advertisements posted on the php server
$('#progress-bar').show();
$.ajax
({
   dataType:"json",
   url:url+"adverts.php",
   data:"data",
   cache:false,
   success:function(data){
   	$('#progress-bar').hide();
   	output="";
   	$.each(data,function(key,val){
   	output+="";	
   	})
   	output+="";
   	$('#events-update').html(output);
   }
});