// integration des elements du jeu

$(function() {
    // table de jeu
    $('body').prepend('<table></table>');

    // player       
    $('table').append('<span id="player">\\o/</span>');

    // lignes et colonnes du tableau 
    for (i = 0; i < 5; i++) {
        $('table').append('<tr id="' + i + '"></tr>');
        for (j = 10; j < 15; j++)
        {
            $('#' + i).append('<td id="' + (j * (i + 1)) + '"></td>');
        }
    }
});

