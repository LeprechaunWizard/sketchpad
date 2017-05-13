var size = 16
$(document).ready(function() {
    // Create the grid
    createGrid();

    // Change color when mouseover
    $('.panel').mouseenter(function() {
        $(this).css('background-color', 'black');
    });

    // Clear grid
    $("#clear").click(function() {
        
        $('.panel').css('background-color', 'white');
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
