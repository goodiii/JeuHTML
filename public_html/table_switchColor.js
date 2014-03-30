//// definition des functions
//
// fonction changement de la couleur des case aleatoirement
function random_tr_color() {
    for (t = 0; t < 10; t++) {
        var random_td_col = "#" + Math.floor((Math.random() * 25) + 10);
        $(random_td_col).css({
            backgroundColor: 'red',
            WebkitTransition: 'background-color 5s ease-in-out ' + t + 's',
            MozTransition: 'background-color 5s ease-in-out 1s',
            MsTransition: 'background-color 5s ease-in-out 1s',
            OTransition: 'background-color 5s ease-in-out 1s'
        });
    }
}
// fonction collision player case
//function collision() {
var pl_left = $('#player').css('left');
var pl_top = $('#player').css('top');
var me_top = $('#menu_jeu').css('top');
var me_left = $('#menu_jeu').css('left');
var tr_top = $('#menu_jeu').css('top');
var tr_left = $('#menu_jeu').css('left');
var en_left = $('.ennemi').css('left');
var en_top = $('.ennemi').css('top');

/* if (pl_left === me_left && me_top === pl_top) {
 $('#player').animate({width: '100pw'}, 5000);
 
 }
 //collision case tr (ne fonctionne pas: pas de position)
 if (pl_left === tr_left && pl_top === tr_top) {
 $('#player').animate({fontSize: '3em'}, 5000);
 }
 */

//}

// fonction ennemi
function ennemi() {
    // creation de l'ennemi
    $('body').append('<span class="ennemi">/o\</span>');

    // animation de l'ennemi
    // for (a = 0; a < 500; a++) {
    var random_top_pos = Math.floor((Math.random())) * 700;
    var random_left_pos = Math.floor((Math.random())) * 1000;
    $('.ennemi').animate({
        top: /* random_top_pos */ 10 + 'px',
        left: /*random_left_pos*/ 10 + 'px'
    }, 1500);
    //  }


    /* var random2_top_pos = "#" + Math.floor((Math.random() * 700));
     var random2_left_pos = "#" + Math.floor((Math.random() * 1000));
     
     // deplacement de l'ennemi
     $('.ennemi').css({
     top: random2_top_pos,
     left: random2_left_pos,
     backgroundColor: 'blue',
     WebkitTransition: 'all 5s ease-in-out 10s',
     MozTransition: 'all 5s ease-in-out 1s',
     MsTransition: 'all 5s ease-in-out 1s',
     OTransition: 'all 5s ease-in-out 1s'
     }); */
}



// definition des variables du jeux
var niveau = 0;

// Fonction apparition de la fenetre niveau suivant
function fenetre_gagne() {
    $('#menu_jeu').html('<p>Bien Joué</p><br/><p>Niveau ' + niveau + ' terminé</p><br/><p>Clickez pour lancer le niveau ' + (niveau + 1) + '</p>');
    setTimeout("$('#menu_jeu').css('visibility','visible')", 15000);
    niveau++;
}
;

// Creation de la page. integration des elements du jeu
$(function() {

    // player       
    $('body').append('<span id="player">\\o/</span>');

    // table de jeu
    $('body').append('<table></table>');

    // lignes et colonnes du tableau 
    for (i = 0; i < 5; i++) {
        $('table').append('<tr id="' + i + '"></tr>');
        for (j = 10; j < 15; j++)
        {
            $('#' + i).append('<td id="' + (j + (i * 5)) + '"></td>');
        }
    }

    // div interface 'lancez le jeu'
    $('body').append('<div id="menu_jeu">Start !</div>');

//    $('body').click(function() {
//        collision();
//  });

    // lancement du jeu
    $('#menu_jeu').click(function() {
        $(this).css('visibility', 'hidden');
        random_tr_color();
        ennemi();
        fenetre_gagne();

    });
    // Ajout de la defaite:collision avec ennemi
    if (pl_left === en_left && pl_top === en_top) {
        alert('dead');
    }
});



