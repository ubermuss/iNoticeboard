// var url="http://inoticeboard.16mb.com/public/api/";
// var siteUrl="http://inoticeboard.16mb.com/public/";
//used for testing on local pc
var url="http://localhost:8012/inoticeboard/public/api/";
var siteUrl="http://localhost:8012/inoticeboard/public/";
function getID (pos){
nparam = window.location.href.substr(window.location.href.lastIndexOf('?')+pos);
return nparam;
}
function log_out(){
localStorage.clear();
window.location.href = "login.html";
}
var val = JSON.parse(localStorage.getItem('cred'));
if(val !=""){
var fullname=val.First_name+" "+val.Last_name;
$("#Uname").text(fullname);
}
function redirect_to(location){
	window.location.href=location;
}