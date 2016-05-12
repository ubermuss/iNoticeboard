getInnerEvents();
function getInnerEvents(){var id = getID(6);
$('#event-spinner').show();
$.ajax
({
   dataType:"json",
   url:url+"eventsbyid.php?E_ID="+id,
   data:"data",
   cache:false,
   success:function(data){
    $('#event-spinner').hide();
    $.each(data,function(key,val){
                    output="<div class='row animated fadeInUpBig'>";
                    output+="<div class='col-xs-12'><div class='row event-image-wrapper'>"
                    output+="<img src='"+siteUrl+"Events/"+val.poster+"'alt='' class='event-image'>"
                    output+="</div></div></div><div class='row animated fadeInUpBig event-title-wrapper'>"
                    output+="<div class='col-xs-12'>"
                    output+="<h4>"+val.Title+"</h4>"
                    output+="</div></div><div class='row animated fadeInUpBig'> <div class='col-xs-12 event-details-wrapper'>"
                    output+="<p class='desc-header'>Details</p><ul class='list-group description-wrapper'>"
  output+="<li class='list-group-item'><i class='material-icons icon-margin'>place</i><span class='desc-info'>"+val.Location+"</span></li>"
  output+="<li class='list-group-item'><i class='material-icons icon-margin'>attach_money</i><span class='desc-info'>Tsh."+val.Price+"*</span></li>"
  output+="<li class='list-group-item'><i class='material-icons icon-margin'>event</i><span class='desc-info'>"+val.Date+"</span></li>"
  output+="<li class='list-group-item'><i class='material-icons icon-margin'>people</i><span class='desc-info'>"+val.Contacts+"</span></li>"
  output+="</ul></div></div><div class='row animated fadeInUpBig'><div class='col-xs-12 full-description-wrapper'>"
                    output+="<p class='desc-header'>Description</p>"
                    output+="<div class='list-group description-wrapper'>"
                    output+="<p class='desc-text'>"+val.Description+"</p>"
                    output+="</div></div></div>"
  
    });
    $('#event-content').html(output);
    },
    error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#event-spinner').hide();
   }
});}