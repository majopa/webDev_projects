/*
	Author: Matthew J. Palomar
*/

$(document).ready(function() {
	$(".nameFrame").fadeIn(800);
    $(".contactInfo").fadeIn(800);
    $(".proObjTitle").effect("slide", 900);
    $(".techSkTitle").effect("slide", 910);
	$(".eduTitle").effect("slide", 920);
	$(".proExTitle").effect("slide", 930);
    $(".workHisTitle").effect("slide", 940);
    $(".honorsTitle").effect("slide", 950);
    $(".involveTitle").effect("slide", 960);
    $(".hobbiesTitle").effect("slide", 970);

    $(".proObjTitle").click(function() {
    	$(".proObjTable").toggle("blind", 400);
    });
    $(".eduTitle").click(function() {
    	$(".eduTable").toggle("blind", 400);
    });
    $(".workHisTitle").click(function() {
    	$(".workHisTable").toggle("blind", 400);
    });
    $(".proExTitle").click(function() {
    	$(".proExTable").toggle("blind", 400);
    });
    $(".techSkTitle").click(function() {
    	$(".techSkTable").toggle("blind", 400);
    });
    $(".honorsTitle").click(function() {
    	$(".honorsTable").toggle("blind", 400);
    });
    $(".involveTitle").click(function() {
    	$(".involveTable").toggle("blind", 400);
    });
     $(".hobbiesTitle").click(function() {
    	$(".hobbiesTable").toggle("blind", 400);
    });
});