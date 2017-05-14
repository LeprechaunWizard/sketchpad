var size = 16
var rainbow = false;

$(document).ready(function() {
    // Create the grid
    createGrid();

    // Change color when mouseover
    $('.panel').mouseenter(function() {
        if(rainbow === true) {
            $(this).css('background-color', randomColor());
        } else {
            $(this).css('background-color', 'black');
        }

    });

    // Clear grid
    $("#clear").click(function() {
        $('.panel').css('background-color', 'white');
    });

    // toggle rainbow
    $('#random').click(function() {
        toggleRainbow();
    });

});

// Create Grid functions
function createGrid() {
    for (i = 0; i < size; i++) {
        // Create new row
        var $newdiv = $("<div></div>");
        $newdiv.addClass('row');
        $('#pad').append($newdiv);
        createRow($newdiv);
    }
}

function createRow($div) {
    for (k = 0; k < size; k++) {
        $div.append('<div class="panel"></div>');
    }
}

function randomColor() {
    var letterArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var color = '#';

    for(i = 0; i < 6; i++) {
        color += letterArray[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleRainbow() {
    if (rainbow === false) {
        rainbow = true;
    } else {
        rainbow = false;
    }
}
