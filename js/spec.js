$(document).ready(function() {
    function loadstyle() {
        if ($.cookie('fontSize'))
            parent.$("body *").css("fontSize", $.cookie('fontSize'));
        if ($.cookie('background'))
            parent.$("body *").css("background", $.cookie('background'))
        else
            parent.$("body *").css("background", "#fff");
        if ($.cookie('color'))
            parent.$("body *").css("color", $.cookie('color'))
        else
            parent.$("body *").css("color", "#000");
        if ($.cookie('letter-spacing'))
            parent.$("body *").css("letter-spacing", $.cookie('letter-spacing'));
        if ($.cookie('img-color'))
            parent.$("img").css("-webkit-filter", $.cookie('img-color'))
        else
            parent.$("img").css("-webkit-filter", "grayscale(100%)");
        if ($.cookie('font-family'))
            parent.$("body *").css("font-family", $.cookie('font-family'));
        parent.$('.glyphicon').css("font-family", 'Glyphicons Halflings');
        parent.$('.fa').css("font-family", 'FontAwesome');
    }
    loadstyle();
    if ($.cookie('img') == '2') {
        parent.$("body img").hide();
    } else {
        parent.$("body img").show();
    }
    if ($.cookie('inter') == '2') {
        parent.$("body *").css("line-height", "2");
    } else {
        parent.$("body *").css("line-height", "1");
    }
    $("#font1").click(function() {
        parent.$('body *').css("font-family", 'Times new roman');
        $.cookie('font-family', 'Times new roman');
        parent.$('.glyphicon').css("font-family", 'Glyphicons Halflings');
    })
    $("#font2").click(function() {
        parent.$('body *').css("font-family", 'Arial');
        $.cookie('font-family', 'Arial');
        parent.$('.glyphicon').css("font-family", 'Glyphicons Halflings');
    })
    $("#a1").click(function() {
        parent.$('body *').css("fontSize", "+=2");
        $.cookie('fontSize', parent.$("body *").css("fontSize"));
    })
    $("#a2").click(function() {
        parent.$('body *').css("fontSize", "-=2");
        $.cookie('fontSize', parent.$("body *").css("fontSize"));
    })
    $("#c1").click(function() {
        parent.$("body *").css("background", "#fff");
        parent.$("body *").css("color", "#000");
        parent.$("img").css("-webkit-filter", "grayscale(100%)");
        $.cookie('background', "#fff");
        $.cookie('color', "#000");
        $.cookie('img-color', "grayscale(100%)");
    })
    $("#c2").click(function() {
        parent.$("body *").css("background", "#000");
        parent.$("body *").css("color", "#fff");
        parent.$("img").css("-webkit-filter", "grayscale(1)");
        $.cookie('background', "#000");
        $.cookie('color', "#fff");
        $.cookie('img-color', "grayscale(1)");
    })
    $("#c3").click(function() {
        parent.$("body *").css("background", "#6699FF");
        parent.$("body *").css("color", "#fff");
        parent.$("img").css("-webkit-filter", "grayscale(100%)");
        $.cookie('background', "#6699FF");
        $.cookie('color', "#fff");
        $.cookie('img-color', "grayscale(100%)");
    })
    $("#c4").click(function() {
        parent.$("body *").css("background", "#f7f3d6");
        parent.$("body *").css("color", "#4d4b43");
        parent.$("img").css("-webkit-filter", "sepia(100%)");
        $.cookie('background', "#f7f3d6");
        $.cookie('color', "#4d4b43");
        $.cookie('img-color', "sepia(100%)");
    })
    $("#c5").click(function() {
        parent.$("body *").css("background", "#3b2716");
        parent.$("body *").css("color", "#a9e44d");
        parent.$("img").css("-webkit-filter", "hue-rotate(240deg)");
        $.cookie('background', "#3b2716");
        $.cookie('color', "#a9e44d");
        $.cookie('img-color', "hue-rotate(240deg)");
    })
    $("input:radio[name=imgvis]").change(function() {
        if ($(this).val() == 1) {
            parent.$("body img").show();
            $.cookie('img', '1');
        } else {
            parent.$("body img").hide();
            $.cookie('img', '2');
        }
    })
    $("#i1").click(function() {
        parent.$("body *").css("letter-spacing", "+=0.1em");
        $.cookie('letter-spacing', parent.$("body *").css("letter-spacing"));
    })
    $("#i2").click(function() {
        parent.$("body *").css("letter-spacing", "-=0.1em");
        $.cookie('letter-spacing', parent.$("body *").css("letter-spacing"));
    })
    $("input:radio[name=inter]").change(function() {
        if ($(this).val() == 1) {
            parent.$("body *").css("line-height", "1");
            $.cookie('inter', '1');
        } else {
            parent.$("body *").css("line-height", "2");
            $.cookie('inter', '2');
        }
    })
    $("#reset").click(function() {
        $.cookie('inter', '');
        $.cookie('fontSize', '');
        $.cookie('letter-spacing', ''); -
        $.cookie('font-family', '');
        $.cookie('img', '');
        $.cookie('img-color', '');
        $.cookie('color', '');
        $.cookie('background', '');
        $.cookie('font-family', '');
        parent.location.reload();
    })

})
