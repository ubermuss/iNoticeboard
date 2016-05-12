// get advertisements posted on the php server
getEvents();
function getEvents(){
	$('#progress-bar').show();
	$.ajax
({
dataType:"json",
url:url+"events.php",
data:"data",
cache:false,
success:function(data){
$('#progress-bar').hide();
output="<ul class='list-group animated bounceInUp'>";
$.each(data,function(key,val){
output+="<li class='list-group-item event-list withripple'><a href='eventsPage.html?E_ID="+val.E_ID+"'>";
output+="<div class='event-item-wrapper "+val.Theme+"'>";
output+="<div class='row title-wrapper'>";
output+="<div class='col-xs-3'>";
output+="<img src='"+siteUrl+"Events/"+val.poster+"' alt='...'' class='img author-avatar'>";
output+="</div><div class8/='col-xs-9'><h4 class='newTitle'>"+val.Title+"</h4>"
output+="</div></div></div></a> </li>";
})
output+="</ul>";
$('#events-update').html(output);
},
error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#progress-bar').hide();
   }
});}