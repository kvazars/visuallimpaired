$(document).ready(function(){

function loadform(){
  $( "<button style='float:right'  onclick='$.removeCookie(\"openspec\", { path: \"/\" });location.reload();'>Закрыть версию для слабовидящих</button>" ).insertBefore( "body" );
$( "body" ).before( "<iframe width='100%' height='110'  style='border: none' src='specver/spec.html'></iframe>" );  
}    

$('.spec').click(function (e) {

if (!$.cookie('openspec'))
{
$.cookie('openspec',1, { path: '/' });
$("body *").css("background", "#fff");
$("body *").css("color", "#000");
$("img").css("-webkit-filter", "grayscale(100%)");
loadform();
}});

if ($.cookie('openspec')==1)
loadform();



});
