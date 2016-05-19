var url="http://inoticeboard.16mb.com/public/api/";
var siteUrl="http://inoticeboard.16mb.com/public/";
function getID (pos){
nparam = window.location.href.substr(window.location.href.lastIndexOf('?')+pos);
return nparam;
}
function log_out(){
	Cookies.remove("cred");
	window.location.href = "login.html";
}
var val = Cookies.getJSON("cred");
if(val !=""){
var fullname=val.First_name+" "+val.Last_name;
$("#Uname").text(fullname);
}
function redirect_to(location){
	window.location.href=location;
}