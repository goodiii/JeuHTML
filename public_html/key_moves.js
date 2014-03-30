// Définition des touches du claviers primaires (fleches)

var key_left = 37;
var key_right = 39;
var key_up = 38;
var key_down = 40;

// Définition des touches du claviers secondaires (zqsd)

var key_left_alt = 113;
var key_right_alt = 100;
var key_up_alt = 122;
var key_down_alt = 115;

// Controle de la balise #player au clavier (fleches) 

$('body').keydown(function(e)
{
    switch (e.which) {
        case key_left:
            $('#player').css('left', '-=10px');
            break;
        case key_right:
            $('#player').css('left', '+=10px');
            break;
        case key_down:
            $('#player').css('top', '+=10px');
            break;
        case key_up:
            $('#player').css('top', '-=10px');
            break;
    }
    ;

    // Gestion de la mort en cas de collision

    var dead = "U dead !";
    var top_position = $('#player').css('top');
    var left_position = $('#player').css('left');

    // Mort: Fonction reset position

    function resetPosition() {
        $('#player').css("top", "10px");
        $('#player').css("left", "10px");
    }

    // Ajout de la defaite: collision (top et bottom)

    if (top_position === '-10px' || top_position === '690px') {
        alert(dead);
        resetPosition();
    }

    // Ajout de la defaite: collision (left et right)

    if (left_position === '-10px' || left_position === '990px') {
        alert(dead);
        resetPosition();
    }
});


// ***************************************************************************
// ******* Controle clavier avec keypress et keydown (zqsd seulement) ********
// ***************************************************************************


// Controle de la balise #player au clavier avec keypress (zqsd) 

$('body').keypress(function(f)
{
    switch (f.which) {
        case key_left_alt:
            $('#player').css('left', '-=10px');
            break;
        case key_right_alt:
            $('#player').css('left', '+=10px');
            break;
        case key_down_alt:
            $('#player').css('top', '+=10px');
            break;
        case key_up_alt:
            $('#player').css('top', '-=10px');
            break;
    }
}
);
/*   
 // Controle de la balise #player au clavier avec keydown (zqsd) 
 
 $('body').keydown(function(g)
 {
 switch (g.which) {
 case key_left_alt:
 $('#player').css('left', '-=10px');
 break;
 case key_right_alt:
 $('#player').css('left', '+=10px');
 break;
 case key_down_alt:
 $('#player').css('top', '+=10px');
 break;
 case key_up_alt:
 $('#player').css('top', '-=10px');
 break;
 }
 }
 );  
 
 */



