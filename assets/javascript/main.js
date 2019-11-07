// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanenti)

//creo le variabili del punteggio, assegnandogli un punteggio di zero
var rossi = 0;

var verdi = 0;

document.getElementById("puntiRossi").innerHTML = "Il punteggio dei rossi è:" + rossi; //Stampa in pagina del punteggio zero

document.getElementById("puntiVerdi").innerHTML = "Il punteggio dei verdi è:" + verdi;

$( document ).ready(function() {    //richiamo il documento

    $(".cell").click(function(){    //creo funzione del click

        if($(this).hasClass("red")){    //se il quadrato(richiamato con this) ha la classe red, gli do un bg rosso

            $(this).css("background","red");
            $(this).off(); //comando per non far ripetere il conteggio se la casella viene cliccata continuamente
            rossi++;

            document.getElementById("puntiRossi").innerHTML = "Il punteggio dei rossi è:" + rossi; //stampa in pagina del punteggio aggiornato

        } else if($(this).hasClass("green")){ //altrimenti gli do un bg verde

            $(this).css("background", "green");
            $(this).off(); //comando per non far ripetere il conteggio se la casella viene cliccata continuamente
            verdi++;

            document.getElementById("puntiVerdi").innerHTML = "Il punteggio dei verdi è:" + verdi; //stampa in pagina del punteggio aggiornato
        }
    })

})



