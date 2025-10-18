document.addEventListener( 'DOMContentLoaded', function() {
    let simbolos = [ '🐕', '🦍', '🐓', '🦕', '🐄', '🦅', '🐖', '🦭', '🦘', '🐂', '🐫', '🦛', '🦥', '🐏', '🦒'];
    simbolos.push( '<img src="taylor.png" style="font-size: 1.1em; height: 1em; vertical-align: -0.2em; margin: auto 0.15em;" />' );
    //let simbolos = [ '🇧🇷', '🇺🇸', '🇦🇷', '🇲🇽', '🇿🇦', '🇯🇵' ];
    let cartas = simbolos.concat(simbolos);

    cartas.sort( function() { return Math.random() - 0.5; } );

    let body = document.querySelector('body');
    for ( let i = 0 ; i < cartas.length ; i++ ) {
        let ndiv = document.createElement('div');
        //ndiv.innerHTML = cartas[i];
        ndiv.innerHTML = '🃏';
        ndiv.style.float = 'left';
        ndiv.style.fontSize = '1000%';
        ndiv.style.border = '4px dashed black';
        ndiv.style.margin = '10px';
        ndiv.addEventListener( 'click', function () {
            let ndivs = document.querySelectorAll( 'div' );
            let abertos = [];
            for ( let j = 0 ; j < cartas.length ; j++ ) {
                if ( ndivs[j].style.borderColor == 'green' ) {
                    continue;
                }
                if ( ndivs[j].innerHTML != '🃏' ) {
                    abertos.push(j);
                }
            }
            if ( abertos.length < 2 ) {
                ndiv.innerHTML = cartas[i];
                abertos.push(i);
            }
            if ( abertos.length == 2 ) {
                if ( ndivs[abertos[0]].innerHTML == ndivs[abertos[1]].innerHTML ) {
                    ndivs[abertos[0]].style.borderColor = 'green';
                    ndivs[abertos[1]].style.borderColor = 'green';
                    abertos = [];
                } else {
                    let t = setTimeout( function () {
                        ndivs[abertos[0]].innerHTML = '🃏';
                        ndivs[abertos[1]].innerHTML = '🃏';
                        abertos = [];
                    }, 2000 );
                }
            }

        } );
        body.appendChild(ndiv);
    }
} );
