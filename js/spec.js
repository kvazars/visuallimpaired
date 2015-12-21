$(document).ready(function(){ 

function xed(){
parent.$("body *").css("fontSize", $.cookie('fontSize'));
parent.$("body *").css("background", $.cookie('background-color'));
parent.$("body *" ).css("color", $.cookie('color'));
parent.$("body *").css("letter-spacing", $.cookie('letter-spacing'));
parent.$("body *").css("fontSize", $.cookie('fontSize'));

}
xed();




if ($.cookie('img')=='2')
{

parent.$("body img").hide();

}
else
{
 parent.$("body img").show();
}


if ($.cookie('inter')=='2')
{
  parent.$("body *").css("line-height", "2");
}
else
{
parent.$("body *").css("line-height", "1");
}






$("#a1").click(function()
{
parent.$('body *').css("fontSize", "+=2");

$.cookie('fontSize',parent.$("body *").css("fontSize"));
})
$("#a2").click(function()
{
parent.$('body *').css("fontSize", "-=2");
$.cookie('fontSize',parent.$("body *").css("fontSize"));
})


$("#c1").click(function()
{
parent.$("body *").css("background", "#fff");
parent.$("body *").css("color", "#000");

$.cookie('background-color',"#fff");
$.cookie('color',"#000");

})
$("#c2").click(function()
{
parent.$("body *").css("background", "#000");
parent.$("body *").css("color", "#fff");
$.cookie('background-color',"#000");
$.cookie('color',"#fff");
})
$("#c3").click(function()
{
parent.$("body *").css("background", "#6699FF");
parent.$("body *").css("color", "#000");
$.cookie('background-color',"#6699FF");
$.cookie('color',"#000");
})
$("#c4").click(function()
{
parent.$("body *").css("background", "#f7f3d6");
parent.$("body *").css("color", "#4d4b43");
$.cookie('background-color',"#f7f3d6");
$.cookie('color',"#4d4b43");
})
$("#c5").click(function()
{
parent.$("body *").css("background", "#3b2716");
parent.$("body *").css("color", "#a9e44d");
$.cookie('background-color',"#3b2716");
$.cookie('color',"#a9e44d");
})


$("input:radio[name=imgvis]").change(function()
{
if ($(this).val()==1)
{
  parent.$("body img").show();
  $.cookie('img','1');
}
else
{
  parent.$("body img").hide();
  $.cookie('img','2'); 
}

})


$("#i1").click(function()
{
parent.$("body *").css("letter-spacing", "+=1");
$.cookie('letter-spacing',parent.$("body *").css("letter-spacing"));
})
$("#i2").click(function()
{
parent.$("body *").css("letter-spacing", "-=1");
$.cookie('letter-spacing',parent.$("body *").css("letter-spacing"));
})


$("input:radio[name=inter]").change(function()
{
if ($(this).val()==1)
{
  parent.$("body *").css("line-height", "1");
  $.cookie('inter','1');
}
else
{
parent.$("body *").css("line-height", "2");
$.cookie('inter','2');
}

})


$('.reload').click(function (e) {
  $.cookie('inter','');
  $.cookie('letter-spacing','');
  $.cookie('img','');
  $.cookie('color','');
  $.cookie('background-color','');
  $.cookie('fontSize','');
parent.$.cookie('openspec','');


xed();
parent.location.reload();

});

})
