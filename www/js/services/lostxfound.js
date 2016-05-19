// get advertisements posted on the php server
getLF();
function getLF(){$('#progress-bar').show();
$.ajax
({
dataType:"json",
url:url+"lostxfound.php",
data:"data",
cache:false,
success:function(data){
$('#progress-bar').hide();
output="<ul class='list-group animated fadeInUpBig'>";
$.each(data,function(key,val){
output+="<li class='list-group-item ad-list withripple'>";
output+="<div class='advert-item-wrapper'><div class='row'><div class='col-xs-12 advert-image-wrapper'>";
output+="<img src='"+siteUrl+"lostxfound/"+val.photo+"' alt=''></div>";
output+="</div><div class='row ad-title-wrapper'><div class8/='col-xs-12'>";
output+="<h4 class='newTitle'>"+val.Title+"</h4>"
output+="<p class='ad-caption'>"+val.Description+"</p>";
output+="<p class='ad-caption'><a href='tel:"+val.Contacts+"'>"+val.Contacts+"</a></p>";
output+="</div></div></div></li>";
})
output+="</ul>";
$('#lostxfound-update').html(output);
},
error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#progress-bar').hide();
   }
});}