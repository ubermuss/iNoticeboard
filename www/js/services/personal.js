// get advertisements posted on the php server
var val = Cookies.getJSON("cred");
getPersonal();
function getPersonal(){
	$('#progress-bar').show();
	$.ajax
({
dataType:"json",
url:url+"Personal.php?U_ID="+val.U_ID,
data:"data",
cache:false,
success:function(data){
$('#progress-bar').hide();
output="<div class='animated bounceInUp'>";
$.each(data,function(key,val){
     output+="<div class='list-group-item'>";
     output+="<div class='row-action-primary'><i class='material-icons'>mail</i>";
      output+="</div><div class='row-content'>";
      output+="<div class='least-content'>"+val.Date+"</div>";
      output+="<h4 class='list-group-item-heading'><a href='innerPersonal.html'>"+val.Title+"</a></h4>";
      output+="<p class='list-group-item-text'>"+val.content+".</p>";
    output+="</div>";
  output+="</div>";
  output+="<div class='list-group-separator'> </div>";
})
output+="</div>";
$('#mail-list').html(output);
},
error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#progress-bar').hide();
   }
});}