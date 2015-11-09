/**
 * Модуль с подпиской.
 */

var paperSubscribes = Snap("#menuLineProject");
//var menuLine = paperSubscribes.path("M -1000, 85 L 1000, 100").attr({ stroke: "#c9c9c9", fill: "transparent", strokeWidth: 9});
paperSubscribes.append(Snap("#Mcircle_1"));
paperSubscribes.append(Snap("#Mcircle_2"));
paperSubscribes.append(Snap("#Mcircle_3"));
var counterNameText = 1;

function AnimationCircles(name_circle, link)
{
    var circle = Snap(name_circle);
    var width = parseInt(paperSubscribes.attr("width"));
    var circleR = parseInt(circle.attr("r"));
    var stroke_w = parseInt(circle.attr("stroke-width"));
    var coficient_r = 2;
    var c_stroke = circle.attr("stroke");
    var speed_animate = 200;
    circle.click(function () { window.location = link;});

    circle.hover(function(){
        if(paperSubscribes == "#svg3") document.getElementById("hidden_next").style["display"] = "block";
        circle.animate({stroke: "#4499a1", strokeWidth: stroke_w + coficient_r, r: circleR + coficient_r}, speed_animate);
    }, function(){
        circle.animate({stroke: c_stroke, strokeWidth: stroke_w, r: circleR}, speed_animate);
    });
}

function AnimationHoverSocialCircles(button_t)
{
    var button_obj = Snap(button_t);
    var button_fill = button_obj.attr("fill");
    var speed_animate = 150;

    button_obj.hover(function(){
        button_obj.animate({fill: "#f9b704"}, speed_animate);
    }, function(){
        button_obj.animate({fill: button_fill}, speed_animate);
    });
}

function AnimationHoverFlyCircles(hover, object, xx, yy, link)
{
    var obj = Snap(object);
    var text = Snap("#text_2");
    var hover_obj = Snap(hover);
    var Bbox = hover_obj.getBBox();
    var temp_x = Bbox.x;
    var temp_y = Bbox.y;
    var speed_animate = 300;
    obj.click(function () { window.location = link;});

    hover_obj.hover(function(){
        obj.animate({x: xx, y: yy , "fill-opacity": 1}, speed_animate);
    }, function(){
        setTimeout(function() {obj.animate({x: temp_x-12, y: temp_y-50 , "fill-opacity": 0}, speed_animate);}, 3300);
    });

    text.hover(function(){
        obj.animate({x: xx, y: yy , "fill-opacity": 1}, speed_animate);
    }, function(){
        setTimeout(function() {obj.animate({x: temp_x-12, y: temp_y-50 , "fill-opacity": 0}, speed_animate);}, 3300);
    });
}

function PrintTextUnderSircles(textss, name_circle, link, k)
{
    //иницилизация
    var circle = Snap(name_circle);
    var Bbox = circle.getBBox();
    var temp_x = Bbox.cx;
    var temp_y = Bbox.cy;
    var width = parseInt(paperSubscribes.attr("width"));
    var circleR = parseInt(circle.attr("r"));
    var stroke_w = parseInt(circle.attr("stroke-width"));
    var coficient_r = 2;
    var c_stroke = circle.attr("stroke");
    var speed_animate = 200;

    //анимация текста
    var text_block1 = paperSubscribes.text(temp_x-50 - k, temp_y+34, textss).attr({fill : '#5e5e5f', id: "text_" + counterNameText}).addClass("textLink");
    text_block1.click(function () { window.location = link;});
    text_block1.hover(function(){
        if(paperSubscribes == "#svg3") document.getElementById("hidden_next").style["display"] = "block";
        circle.animate({stroke: "#4499a1", strokeWidth: stroke_w + coficient_r, r: circleR + coficient_r}, speed_animate);
        text_block1.attr({fill : '#459aa2'});
    }, function(){
        text_block1.attr({fill : '#5e5e5f'});
        circle.animate({stroke: c_stroke, strokeWidth: stroke_w, r: circleR}, speed_animate);
    });

    //анимация кружков
    circle.click(function () { window.location = link;});

    circle.hover(function(){
        if(paperSubscribes == "#svg3") document.getElementById("hidden_next").style["display"] = "block";
        circle.animate({stroke: "#4499a1", strokeWidth: stroke_w + coficient_r, r: circleR + coficient_r}, speed_animate);
        text_block1.attr({fill : '#459aa2'});
    }, function(){
        circle.animate({stroke: c_stroke, strokeWidth: stroke_w, r: circleR}, speed_animate);
        text_block1.attr({fill : '#5e5e5f'});
    });
    counterNameText++;
}

//AnimationCircles("#Mcircle_1", "#");
//AnimationCircles("#Mcircle_2", "#");
//AnimationCircles("#Mcircle_3", "#");

AnimationHoverSocialCircles("#tw_fill");
AnimationHoverSocialCircles("#fb_fill");
AnimationHoverSocialCircles("#ytube_fill");

PrintTextUnderSircles("Поддержать нас", "#Mcircle_1", "#", 4);
PrintTextUnderSircles("Подписаться", "#Mcircle_2", "#", -3);
PrintTextUnderSircles("Присоединиться", "#Mcircle_3", "#", 8);

AnimationHoverFlyCircles("#Mcircle_2", "#tw_fill", -20, 0, "#");
AnimationHoverFlyCircles("#Mcircle_2", "#fb_fill", 37, -25, "#");
AnimationHoverFlyCircles("#Mcircle_2", "#ytube_fill", 92, -2, "#");