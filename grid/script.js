// JavaScript Jquery project
// http://www.theodinproject.com/web-development-101/javascript-and-jquery
//
// Author: Matthew Palomar
// Date: 9/14/15

$(document).ready(function(){
    // Adds functionality buttons to the page
    $('.button').append('<input type="button" value="Reset (16 by 16)" onClick="window.location.reload()">');
    $('.button').append('<input type="button" value="Custom (x by x)" onClick="Custom();">');
    $('.button').append('<input type="button" value="Random Colors" onClick="Rainbow();">');

    // Call default drawing grid on document load
    Default();
});

// Default drawing grid
function Default() {
    DrawGrid(16, $('.grid').width());
}

// User specified drawing grid
function Custom() {
    input = prompt("How many cells?");
    // Clear all child elements of of grid
    $('.grid').empty();
    DrawGrid(input, $('.grid').width());
}

// Random color generation
function Rainbow() {
    $('.gBox').hover(function() {
        var R = getRandInt(0, 270);
        var G = getRandInt(0, 270);
        var B = getRandInt(0, 270);

        $(this).css('background-color','rgb('+R+','+G+','+B+')');
    });
}

// Generates random number, max and min inclusive
// Used for random color generation
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Draws Grid
function DrawGrid(boxes, width) {

    var gBoxSize = (width / boxes) - 2;
    var gBoxCount = boxes * boxes;

    // Generation of gBox elements and appends to grid element
    for(var x = 0; x < gBoxCount; x++)
    {
        $('.grid').append("<div class='gBox'></div>");
    }

    // Sets gBox element dimensions
    $('.gBox').height(gBoxSize).width(gBoxSize);

    // Changes color of cells upon mouse hover
    $('.gBox').hover(function() {
        $(this).css('background-color','blue');
    });
}