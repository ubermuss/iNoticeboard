// get advertisements posted on the php server
var count;
var val = JSON.parse(localStorage.getItem('cred'));
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
 var count = data.length; 
$('#progress-bar').hide();
output="<div class='animated bounceInUp'>";
$.each(data,function(key,val){
     output+="<div class='list-group-item'>";
     output+="<div class='row-action-primary'><i class='glyphicon glyphicon-envelope'></i>";
      output+="</div><div class='row-content'>";
      output+="<div class='least-content' id='msg-content'>"+val.Date+"</div>";
      output+="<h4 class='list-group-item-heading'><a href='innerP.html?P_ID="+val.P_ID+"'>"+val.Title+"</a></h4>";
      output+="<p class='list-group-item-text'>from "+val.Author+".</p>";
    output+="</div>";
  output+="</div>";
  output+="<div class='list-group-separator'> </div>";
})
output+="</div>";
console.log(count);
$('#mail-list').html(output);
if(count == 0){
var output2 = "<p class='animated bounceInUp' style='text-align:center'>You dont have any messages</p>";
$('#mail-list').html(output2);
}
},
error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#progress-bar').hide();
   }
});}