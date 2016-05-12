//get broadcasted news posted on the php server
var val = Cookies.getJSON("cred");
$('#progress-bar').show();
getAllNews();
function getAllNews(){
  $('#progress-bar').show();
$.ajax
({
   dataType:"json",
   url:url+"broadcastnews.php",
   data:"data",
   cache:false,
   success:function(data){
   	$('#progress-bar').hide();
   	output="<ul class='list-group animated fadeInUpBig'>";
   	$.each(data,function(key,val){
   		  output+="<li class='list-group-item news-list withripple'>";
          output+="<a href='inner.html?N_ID="+val.N_ID+"'><div class='item-wrapper'>";
          output+="<div class='row title-wrapper'><div class='col-xs-12'><h4 class='newTitle'>"+val.Title+"</h4></div>";
          output+="</div><hr class='list-divider'><div class='row info-title'><div class='col-xs-2'>";
          output+="<img src='img/in.png' alt='...' class='img-circle author-avatar'>";
          output+="</div><div class='col-xs-10'><p class='authorTitle'>"+val.Author+"</p><p class='timeTitle'>"+val.Date+"</p>";
          output+="</div></div></div></a></li>";
   	})
   	output+="<ul>";
   	$('#news-update').html(output);
   },
   error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#progress-bar').hide();
   }

});
}
function getFacultyNews(){
  $('#progress-bar').show();
  $.ajax
({
   dataType:"json",
   url:url+"facultyNews.php?F_ID="+val.F_ID,
   data:"data",
   cache:false,
   success:function(data){
    $('#progress-bar').hide();
    output="<ul class='list-group animated fadeInUpBig'>";
    $.each(data,function(key,val){
        output+="<li class='list-group-item news-list withripple'>";
          output+="<a href='inner.html?N_ID="+val.N_ID+"'><div class='item-wrapper'>";
          output+="<div class='row title-wrapper'><div class='col-xs-12'><h4 class='newTitle'>"+val.Title+"</h4></div>";
          output+="</div><hr class='list-divider'><div class='row info-title'><div class='col-xs-2'>";
          output+="<img src='img/in.png' alt='...' class='img-circle author-avatar'>";
          output+="</div><div class='col-xs-10'><p class='authorTitle'>"+val.Author+"</p><p class='timeTitle'>"+val.Date+"</p>";
          output+="</div></div></div></a></li>";
    })
    output+="<ul>";
    $('#news-update').html(output);
   },
   error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#progress-bar').hide();
   }
});
}
function getCourseNews(){
  $('#progress-bar').show();
  $.ajax
({
   dataType:"json",
   url:url+"courseNews.php?CO_ID="+val.CO_ID,
   data:"data",
   cache:false,
   success:function(data){
    $('#progress-bar').hide();
    output="<ul class='list-group animated fadeInUpBig'>";
    $.each(data,function(key,val){
        output+="<li class='list-group-item news-list withripple'>";
          output+="<a href='inner.html?N_ID="+val.N_ID+"'><div class='item-wrapper'>";
          output+="<div class='row title-wrapper'><div class='col-xs-12'><h4 class='newTitle'>"+val.Title+"</h4></div>";
          output+="</div><hr class='list-divider'><div class='row info-title'><div class='col-xs-2'>";
          output+="<img src='img/in.png' alt='...' class='img-circle author-avatar'>";
          output+="</div><div class='col-xs-10'><p class='authorTitle'>"+val.Author+"</p><p class='timeTitle'>"+val.Date+"</p>";
          output+="</div></div></div></a></li>";
    })
    output+="<ul>";
    $('#news-update').html(output);
   },
   error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#progress-bar').hide();
    console.log(errorThrown);
   }
});
}
function getClassNews(){
  $('#progress-bar').show();
  $.ajax
({
   dataType:"json",
   url:url+"classNews.php?CL_ID="+val.CL_ID,
   data:"data",
   cache:false,
   success:function(data){
    $('#progress-bar').hide();
    output="<ul class='list-group animated fadeInUpBig'>";
    $.each(data,function(key,val){
        output+="<li class='list-group-item news-list withripple'>";
          output+="<a href='inner.html?N_ID="+val.N_ID+"'><div class='item-wrapper'>";
          output+="<div class='row title-wrapper'><div class='col-xs-12'><h4 class='newTitle'>"+val.Title+"</h4></div>";
          output+="</div><hr class='list-divider'><div class='row info-title'><div class='col-xs-2'>";
          output+="<img src='img/in.png' alt='...' class='img-circle author-avatar'>";
          output+="</div><div class='col-xs-10'><p class='authorTitle'>"+val.Author+"</p><p class='timeTitle'>"+val.Date+"</p>";
          output+="</div></div></div></a></li>";
    })
    output+="<ul>";
    $('#news-update').html(output);
   },
   error:function(XMLHttpRequest, textStatus, errorThrown){
    $("#snackbarid").attr('data-content','Network error');
    $("#snackbarid").snackbar("show");
    $("#snackbarid").snackbar("toggle");
    $('#progress-bar').hide();
   }
});
}