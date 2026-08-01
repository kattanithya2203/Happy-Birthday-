function openEnvelope(){

    // Play music
    const music = document.getElementById("bg-music");

    if(music){
        music.play().catch(() => {
            console.log("Music needs user interaction");
        });
    }


    // hide envelope
    const envelope = document.getElementById("envelope-screen");

    envelope.style.display = "none";


    // show card
    const card = document.getElementById("card-screen");

    card.style.display = "flex";

}




function openCard(){

    const front = document.querySelector(".card-front");

    const pages = document.querySelector(".book-card");


    // flip front cover
    front.classList.add("open");


    // show inside pages
    setTimeout(() => {
        pages.style.display = "block";
    }, 500);

}
