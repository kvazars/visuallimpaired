$(document).ready(function(){
$('.spec').click(function (e) {
$.cookie('openspec','1');
$( "body" ).before( "<iframe width='100%' height='110'  style='border: none' src='specver/spec.html'></iframe>" );
});

if ($.cookie('openspec')=='1')
{
    $( "body" ).before( "<iframe width='100%' height='110'  style='border: none' src='specver/spec.html'></iframe>" );
}



});
