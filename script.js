function openEnvelope(){

    // start music
    const music = document.getElementById("bg-music");

    if(music){
        music.play();
    }


    // hide envelope screen
    const envelopeScreen = document.getElementById("envelope-screen");

    envelopeScreen.style.display = "none";


    // show card
    const cardScreen = document.getElementById("card-screen");

    cardScreen.style.display = "flex";

}




function openCard(){

    const front = document.querySelector(".card-front");

    const inside = document.querySelector(".card-inside");


    front.style.display = "none";

    inside.style.display = "block";

}
