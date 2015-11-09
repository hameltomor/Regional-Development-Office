/**
 * Модуль "Слайдер проектов(линия, кружки)
 */
var lastClick = 2;

var mas_likns = [
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"],
                    ["Test test1", "test22", "#"]
                ];
var linkCursor = 0;
var clobalCursorCreatedCircle = 0;

var paperLineProject = Snap("#lineProject");
var backgroundColor = "#E3E3E3";
var pointer = 1, cursor_x = 0, cursor_y1 = 0, cursor_y2 = 0;


var nameCircle = "circle_"; //Приставка id круга
var circle_radius = 10; // Радиус круга
var circle_width = 80; // Общий рзмер круга х и н
var circle_strokeWidth = 6; // Обводка вокруг круга
var circle_strokeColor = "#b1b1b2"; // Цвет обводки
var coord_cx = [-100, -5, 100, 210]; // Координаты создания элементов по вертикали
var coord_cy = [[30, 60, 43, 63], [63, 43, 60, 30]];  // Координаты создания элементов по горизонтале

var nameText1 = "text1_";
var nameText2 = "text2_";
var line_strokeColor = "#c9c9c9";
var line_fill = "transparent";
var line_strokeWidth = 4;

var countClickNext = 0;

var line = paperLineProject.path("").attr({
    stroke: line_strokeColor,
    fill: line_fill,
    strokeWidth: line_strokeWidth
});

function CreateCircle()
{
    var circle = paperLineProject.circle();
    circle.attr({
        id: nameCircle + pointer,
        cx: coord_cx[cursor_x],
        cy: coord_cy[cursor_y1][cursor_y2],
        width: circle_width,
        fill: backgroundColor,
        r: circle_radius,
        "stroke-width": circle_strokeWidth,
        stroke: circle_strokeColor
    });

    if((cursor_y1 == 0) && (cursor_y2 == 3))
    {
        cursor_y1++;
        cursor_y2 = 0;
    }
    else if((cursor_y1 == 1) && (cursor_y2 == 3))
    {
        cursor_y1 = 0;
        cursor_y2 = 0;
    }
    else
    {
        cursor_y2++;
    }

    if(coord_cx[cursor_x+1])
    {
        cursor_x++;
        pointer++;
    }
    else
    {
        cursor_x = 0;
        pointer = 1;
    }
}

function DwrawLine(circle_name)
{
    var circle = Snap("#"+circle_name);
    var bbox = circle.getBBox();
    var coord_x = parseInt(bbox.cx);
    var coord_y = parseInt(bbox.cy);
    var temp_d = line.attr("d");

    if(temp_d) line.attr({d: temp_d + "L " + coord_x + "," + coord_y}).addClass("PathProjectLine");
    else line.attr({d: "M " + coord_x + "," + coord_y}).addClass("PathProjectLine");

    line.attr({
        stroke: line_strokeColor,
        fill: line_fill,
        strokeWidth: line_strokeWidth
    });
}

function СreateFistPathLine(circleName)
{
    var circle = Snap("#"+circleName);
    var bbox = circle.getBBox();
    var coord_cx = parseInt(bbox.cx);
    var coord_cy = parseInt(bbox.cy);
    var reuslt_x = -130;
    var reuslt_y = coord_cy;

    var line = paperLineProject.path("").attr({
        stroke: line_strokeColor,
        fill: line_fill,
        strokeWidth: line_strokeWidth,
        d: "M "+reuslt_x+","+reuslt_y+" L "+coord_cx+","+coord_cy
    }).addClass("PathProjectLine");

    paperLineProject.append(circle);
}

function СreateLastPathLine(circleName)
{
    var circle = Snap("#"+circleName);
    var bbox = circle.getBBox();
    var coord_cx = parseInt(bbox.cx);
    var coord_cy = parseInt(bbox.cy);
    var reuslt_x = 250;

    var line = paperLineProject.path("").attr({
        stroke: line_strokeColor,
        fill: line_fill,
        strokeWidth: line_strokeWidth,
        d: "M "+reuslt_x+","+coord_cy+" L "+coord_cx+","+coord_cy
    }).addClass("PathProjectLine");

    paperLineProject.append(circle);
}

function GoToLink(link)
{
    window.location = link;
}

function CircleHover_StartAnimate(circle, speed_animate)
{
    circle.animate({
        stroke: "#f9b704",
        strokeWidth: circle_strokeWidth + 0.5,
        r: circle_radius + 0.5}, speed_animate);
}

function CircleHover_EndAnimate(circle, speed_animate)
{
    circle.animate({
        stroke: circle_strokeColor,
        strokeWidth: circle_strokeWidth,
        r: circle_radius}, speed_animate);
}

function TextCircle(content1, content2, circleName, link)
{
    var circle = Snap("#"+circleName);
    var bbox = circle.getBBox();
    var text1_cx = parseInt(bbox.cx) - 17;
    var text1_cy = parseInt(bbox.cy) + 20;
    var text2_cx = text1_cx + 2;
    var text2_cy = text1_cy + 6;
    var speed_animate = 150;

    var text1 = paperLineProject.text(text1_cx, text1_cy, content1).addClass("textCircle").attr({id: nameText1 + circleName});
    var text2 = paperLineProject.text(text2_cx, text2_cy, content2).addClass("textCircle2").attr({id: nameText2 + circleName});

    circle.click(function(){GoToLink(link);});
    text1.click(function(){GoToLink(link);});
    text2.click(function(){GoToLink(link);});

    circle.hover(
        function(){CircleHover_StartAnimate(circle, speed_animate);},
        function(){CircleHover_EndAnimate(circle, speed_animate);}
    );

    text1.hover(
        function(){CircleHover_StartAnimate(circle, speed_animate);},
        function(){CircleHover_EndAnimate(circle, speed_animate);}
    );

    text2.hover(
        function(){CircleHover_StartAnimate(circle, speed_animate);},
        function(){CircleHover_EndAnimate(circle, speed_animate);}
    );

    DwrawLine(circleName);
}

function DrawFirstAndLastPath()
{
    СreateFistPathLine(nameCircle+1);
    СreateLastPathLine(nameCircle+4);
}

function CircleDeleteAnimation(TnameCircle, TnameText1, TnameText2, direction)
{
    var route = 0;
    if(direction == "left")
        route = -300;
    else if(direction == "right")
        route = 300;

    var circle = Snap("#"+TnameCircle);
    var text1 = Snap("#"+TnameText1);
    var text2 = Snap("#"+TnameText2);
    var speed_animate = 200;
    var line = paperLineProject.selectAll(".PathProjectLine");

    line.animate({"stroke": backgroundColor}, speed_animate, function(){line.attr({d: ""});});
    circle.animate({"stroke": backgroundColor, "cx": route}, speed_animate, function(){circle.remove();});
    text1.animate({"fill-opacity": 0}, speed_animate, function(){text1.remove();});
    text2.animate({"fill-opacity": 0}, speed_animate, function(){text2.remove();});
}


function RearrangedCircle(circle, text1, text2, direction, arr_project)
{
    var counter_t = 0;
    var route_cx = 0;
    var route_x1 = 0;
    var route_x2 = 0;
    var tempName_ID1 = "";
    var tempName_ID2 = "";
    var tempName_ID3 = "";

    if(direction == "left") {
        counter_t = true;
        route_cx = coord_cx[0];
        route_x1 = route_cx-17;
        route_x2 = route_cx-15;
        pointer = 2;
        cursor_x = 1;
        tempName_ID1 = nameCircle+1;
        tempName_ID2 = nameText1+tempName_ID1;
        tempName_ID3 = nameText2+tempName_ID1
    }
    else if(direction == "right") {
        counter_t = false;
        route_cx = coord_cx[3];
        route_x1 = route_cx-17;
        route_x2 = route_cx-15;
        pointer = 1;
        cursor_x = 0;
        tempName_ID1 = nameCircle+4;
        tempName_ID2 = nameText1+tempName_ID1;
        tempName_ID3 = nameText2+tempName_ID1
    }

    var circle = Snap("#"+circle);
    var text1 = Snap("#"+text1);
    var text2 = Snap("#"+text2);
    var speed_animate = 200;

    circle.animate({"cx": route_cx}, speed_animate).attr({"id": tempName_ID1});
    text1.animate({"x": route_x1}, speed_animate+10).attr({"id": tempName_ID2});
    text2.animate({"x": route_x2}, speed_animate+10, function(){
        DwrawLine(tempName_ID1);
        var counterCreate = 0;
        if(counter_t)
        {
        	if(lastClick == 3)
	        {
	        	//console.log(lastClick+" last click");
	        	lastClick = 2;
	        	linkCursor += 3;
	        }

        	var plus = 1;
	        if((arr_project[linkCursor+plus]) && (arr_project[linkCursor+2]) && (arr_project[linkCursor+3]))
	        {
	        	counterCreate = 3;
	        }
	        else if((arr_project[linkCursor+plus]) && (arr_project[linkCursor+2]))
	        {
	        	counterCreate = 2;
	        }
	        else if(arr_project[linkCursor+plus])
	        {
	        	counterCreate = 1;
	        }

	        var temp_name = "";

	  
	        for (var counter = 0; counter < counterCreate; counter++)
			{
				//console.log("created");
			    CreateCircle();
			    var temp = counter + 2;
			    TextCircle(arr_project[linkCursor+plus][0], arr_project[linkCursor+plus][1], nameCircle+temp, arr_project[linkCursor+plus][2]);

		    	linkCursor++;
		    	//console.log(linkCursor);	    

			    clobalCursorCreatedCircle = temp;
			    temp_name = nameCircle+temp;
			}

			if(arr_project[linkCursor+1])
	    	{
	    		//
	    	}
	    	else
	    	{
	    		var temp_strelka = Snap("#strelkaNext");
		        temp_strelka.attr({fill: backgroundColor});
		        temp_strelka.addClass("disabled");

		        temp_strelka.hover(function(){
		        	temp_strelka.attr({fill: backgroundColor});
		        }, function(){
			        temp_strelka.attr({fill: backgroundColor});
			    });
	    	}

			СreateFistPathLine(nameCircle+1)
			СreateLastPathLine(temp_name);
        }
        else
        {
        	if(lastClick == 2)
	        {
	        	//console.log(lastClick+" last click");
	        	lastClick = 3;
	        	linkCursor -= clobalCursorCreatedCircle - 1;
	        }

            var minus = 1;
        	if(arr_project[linkCursor-minus] && arr_project[linkCursor-2] && arr_project[linkCursor-3])
	        {
	        	counterCreate = 3;
	        }
	        else if(arr_project[linkCursor-minus] && arr_project[linkCursor-2])
	        {
	        	counterCreate = 2;
	        }
	        else if(arr_project[linkCursor-minus])
	        {
	        	counterCreate = 1;
	        }
	        var temp_name = "";

	        for (var temp5 = counterCreate; temp5 > 0; temp5--)
            {
            	CreateCircle();
            }

            for (var temp5 = counterCreate; counterCreate > 0; counterCreate--)
            {
   			    TextCircle(arr_project[linkCursor-minus][0], arr_project[linkCursor-minus][1], nameCircle+counterCreate, arr_project[linkCursor-minus][2]);
			    linkCursor--;
			    temp_name = nameCircle+counterCreate;
			    //console.log(linkCursor);
            }
            clobalCursorCreatedCircle = 4;
            СreateLastPathLine(nameCircle+4);
			СreateFistPathLine(temp_name);
        }

        line = paperLineProject.path("").attr({
            stroke: line_strokeColor,
            fill: line_fill,
            strokeWidth: line_strokeWidth
        });

    }).attr({"id": tempName_ID3});
}

function ArrowPrevious(nameArrow, arr_project)
{

    var direction = "right";
    var strelka = Snap("#"+nameArrow);
    var fillStrelka = strelka.attr("fill");
    strelka.attr({fill: backgroundColor});
    strelka.addClass("disabled");

    strelka.hover(function(){
        if(countClickNext > 0) {
            strelka.removeClass("disabled");
            strelka.attr({fill: '#f9b704'});
        }
        else {
            strelka.addClass("disabled");
            strelka.attr({fill: backgroundColor});
        }
    }, function(){
        if(countClickNext > 0) {
            strelka.removeClass("disabled");
            strelka.attr({fill: fillStrelka});
        }
        else {
            strelka.addClass("disabled");
            strelka.attr({fill: backgroundColor});
        }
    });

    strelka.click(function () {
        if(countClickNext > 0) {
        	if(true)
			{
				var temp_strelka = Snap("#strelkaNext");
		        temp_strelka.attr({fill: fillStrelka});
		        temp_strelka.removeClass("disabled");

		        temp_strelka.hover(function(){
		        	temp_strelka.attr({fill: '#f9b704'});
		        }, function(){
			        temp_strelka.attr({fill: fillStrelka});
				});
			}


        	var temp_strelka = Snap("#strelkaNext");
	        temp_strelka.attr({fill: fillStrelka});
	        temp_strelka.removeClass("disabled");

            countClickNext--;
            if(countClickNext == 0) {
                strelka.addClass("disabled");
                strelka.attr({fill: backgroundColor});
            }

            for (var counter = 2; counter <= clobalCursorCreatedCircle; counter++)
			{
				CircleDeleteAnimation(nameCircle+counter, nameText1+nameCircle+counter, nameText2+nameCircle+counter, direction);
			}
            RearrangedCircle(nameCircle + 1, nameText1 + nameCircle + 1, nameText2 + nameCircle + 1, direction, arr_project);
        }
    });
}

function ArrowNext(nameArrow, arr_project)
{
    var direction = "left";
    var strelka = Snap("#"+nameArrow);
    var fillStrelka = strelka.attr("fill");

    strelka.hover(function(){
        strelka.attr({fill : '#f9b704'});
    }, function(){
        strelka.attr({fill : fillStrelka});
    });

    strelka.click(function () {
        countClickNext++;
        var temp_strelka = Snap("#strelkaPrevious");
        temp_strelka.attr({fill: fillStrelka});
        temp_strelka.removeClass("disabled");

        for (var counter = 1; counter < 4; counter++)
		{
			CircleDeleteAnimation(nameCircle+counter, nameText1+nameCircle+counter, nameText2+nameCircle+counter, direction);
		}

        RearrangedCircle(nameCircle+4, nameText1+nameCircle+4, nameText2+nameCircle+4, direction, arr_project);

    });
}

function CheckArr(arr_project)
{
	if(arr_project.length > 4)
	{
		ArrowNext("strelkaNext", arr_project);
		ArrowPrevious("strelkaPrevious", arr_project);
	}
	else
	{
		var ArrowNextss = Snap("#strelkaNext");
		var ArrowPrevioustt = Snap("#strelkaPrevious");
        ArrowNextss.attr({fill: backgroundColor});
        ArrowNextss.addClass("disabled");
        ArrowPrevioustt.attr({fill: backgroundColor});
        ArrowPrevioustt.addClass("disabled");
	}
}

function DrawAll(arr_project)
{
	var counterCreate = 0;

	if(arr_project[linkCursor] && arr_project[linkCursor+1] && arr_project[linkCursor+2] && arr_project[linkCursor+3])
	{
		if((arr_project[linkCursor].length > 1) && (arr_project[linkCursor+1].length > 1) && (arr_project[linkCursor+2].length > 1) && (arr_project[linkCursor+3].length > 1))
			counterCreate = 4;
	}
	else if(arr_project[linkCursor] && arr_project[linkCursor+1] && (arr_project[linkCursor+2]))
	{
		if((arr_project[linkCursor].length > 1) && (arr_project[linkCursor+1].length > 1) && (arr_project[linkCursor+2].length > 1))
			counterCreate = 3;
	}
	else if(arr_project[linkCursor] && arr_project[linkCursor+1])
	{
		if((arr_project[linkCursor].length > 1) && (arr_project[linkCursor+1].length > 1))
			counterCreate = 2;
	}
	else if((arr_project[linkCursor]) && (arr_project[linkCursor].length > 1))
	{
		counterCreate = 1;
	}

	for (var counter = 0; counter < counterCreate; counter++)
	{
	    CreateCircle();
	    var temp = counter + 1;
	    TextCircle(arr_project[linkCursor][0], arr_project[linkCursor][1], nameCircle+temp, arr_project[linkCursor][2]);
	    if(counter == 0)
	    {
	    	СreateFistPathLine(nameCircle+temp);
	    }

	    if(counter != counterCreate-1)
	    {
	    	linkCursor++;
	    }
	    else
	    {
	    	СreateLastPathLine(nameCircle+temp);
	    }
	}
	CheckArr(arr_project);
}

DrawAll(mas_likns);