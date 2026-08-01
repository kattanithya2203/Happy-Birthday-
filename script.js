function openEnvelope(){

    const music = document.getElementById("bg-music");

    if(music){
        music.play().catch(() => {
            console.log("Music needs user interaction");
        });
    }

    const envelope = document.querySelector(".envelope");
    const envelopeWrap = document.querySelector(".envelope-wrap");
    const flap = document.querySelector(".envelope-flap");
    const seal = document.querySelector(".wax-seal");
    const tapText = document.querySelector(".tap-text");
    const letterWrap = document.querySelector(".letter-wrap");

    envelope.classList.add("opening");
    seal.classList.add("hide");
    tapText.style.opacity = "0";

    flap.classList.add("open");


    flap.addEventListener("transitionend", function onFlapOpen(e){

        if(e.propertyName !== "transform") return;

        letterWrap.classList.add("peek");


        setTimeout(() => {

            letterWrap.classList.add("rising");

            envelopeWrap.classList.add("recede");

        }, 500);


        letterWrap.addEventListener("transitionend", function onLetterOut(ev){

            if(ev.propertyName !== "transform") return;

            envelopeWrap.style.display = "none";

        }, { once:true });


    }, { once:true });

}




function openCard(){

    const button = document.querySelector(".open-card");
    const letterWrap = document.querySelector(".letter-wrap");

    button.disabled = true;
    button.style.opacity = "0";
    button.style.pointerEvents = "none";


    letterWrap.classList.add("unfolded");

}
