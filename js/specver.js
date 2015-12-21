$(document).ready(function(){
$('.spec').click(function (e) {
if ($.cookie('openspec')=='0')
{
    
$("body *").css("background", "#fff");
$("body *").css("color", "#000");
$("img").css("-webkit-filter", "grayscale(100%)");
$.cookie('openspec','1');
$( "body" ).before( "<iframe width='100%' height='110'  style='border: none' src='specver/spec.html'></iframe>" );
}});

if ($.cookie('openspec')=='1')
{
    $( "body" ).before( "<iframe width='100%' height='110'  style='border: none' src='specver/spec.html'></iframe>" );
}
else
{
$.cookie('openspec','0');
}



});
