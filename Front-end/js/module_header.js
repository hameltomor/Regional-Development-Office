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

function PrintTextSubcribes(content, link, nameClass, postion_x, position_y, btn_id)
{
    var printText = paperHeader.text(postion_x, position_y, content).addClass(nameClass);
    var circle = paperHeader.circle();

    printText.attr({
        color: "white",
        fill: "white",
        x: postion_x+"%",
        id: btn_id
    });

    circle.attr({
        r: 10,
        fill: "#9B9B9C",
        cx: (postion_x - 1.3) + "%",
        cy: position_y  - 7,
        width: 60
    });

    AnimationHoverLine(printText, circle);
    if(link != "none") {
        printText.click(function () {
            GoToLink(link);
        });
        circle.click(function () {
            GoToLink(link);
        });
    }
}

PrintTextSubcribes("ПРИСОЕДИНИТСЯ К НАМ", "none", "text", 62, 123, "popup__toggle");
PrintTextSubcribes("ПОДДЕРЖАТЬ НАС", "#", "text", 62, 170, "none__toggle");