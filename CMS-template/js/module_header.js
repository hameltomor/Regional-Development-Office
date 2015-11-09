/**
 * Анимация кружков в хедере
 */

var paperHeader = Snap(".circle_anim");

function GoToLink(link)
{
    window.location = link;
}

function AnimationHoverLine(text, circle)
{
    var speed_animate = 20;
    var new_radius = 11;

    text.hover(function(){
        circle.animate({r: new_radius, fill: "#3684A9"}, speed_animate, function(){
            text.addClass("textHover");
        });
    }, function(){
        circle.animate({r: 10, fill: "#9B9B9C"}, speed_animate, function(){
            text.removeClass("textHover");
        });
    });

    circle.hover(function(){
        circle.animate({r: new_radius, fill: "#3684A9"}, speed_animate, function(){
            text.addClass("textHover");
        });
    }, function(){
        circle.animate({r: 10, fill: "#9B9B9C"}, speed_animate, function(){
            text.removeClass("textHover");
        });
    });
}

function PrintTextSubcribes(content, link, nameClass, postion_x, position_y)
{
    var printText = paperHeader.text(postion_x, position_y, content).addClass(nameClass);
    var circle = paperHeader.circle();

    printText.attr({
        color: "white",
        fill: "white",
        x: postion_x+"%"
    });

    circle.attr({
        r: 10,
        fill: "#9B9B9C",
        cx: (postion_x - 1.3) + "%",
        cy: position_y  - 7,
        width: 60
    });

    AnimationHoverLine(printText, circle);
    printText.click(function(){GoToLink(link);});
    circle.click(function(){GoToLink(link);});
}

PrintTextSubcribes("ПРИСОЕДИНИТСЯ К НАМ", "#", "text", 70, 123);
PrintTextSubcribes("ПОДДЕРЖАТЬ НАС", "#", "text", 70, 170);