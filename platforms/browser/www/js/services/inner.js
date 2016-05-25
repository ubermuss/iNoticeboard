var id = getID(6);
$('#progress-bar').show();
$.ajax
({
   dataType:"json",
   url:url+"newsbyid.php?N_ID="+id,
   data:"data",
   cache:false,
   success:function(data){
   	$('#progress-bar').hide();
   	$.each(data,function(key,val){
   	output="<div class='row'>";
    output+="<div class='col-xs-12 innerpage-header'>";
    output+="<h3>"+val.Title+"</h3>"
    output+="<p>"+val.Author+"</p>";
    output+="<p><img src='img/set-alarm.png' alt='' class='menu-icon menu-icon alarm-icon'>"+val.Date+"</p>";
   	output+="<hr></div></div><div class='row'>";
    output+="<div class='col-xs-12 innerpage-contents'>";
    output+="<p>"+val.Content+"</p>";
    output+="</div></div>";
   	});
   	$('#inner-news-update').html(output);
   	},
    error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#progress-bar').hide();
   }
});