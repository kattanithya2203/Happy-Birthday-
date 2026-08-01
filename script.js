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
    const decorations = document.querySelector(".decorations");

    // stop the idle bounce and start opening
    envelope.classList.add("opening");
    seal.classList.add("hide");
    tapText.style.opacity = "0";
    flap.classList.add("open");

    // step 1: once the flap has fully opened, let the letter peek out
    flap.addEventListener("transitionend", function onFlapOpen(e){
        if(e.propertyName !== "transform") return;
        flap.removeEventListener("transitionend", onFlapOpen);

        letterWrap.classList.add("peek");

        // step 2: after a brief peek, the letter rises and grows into
        // the full card, while the envelope fades into the background
        setTimeout(() => {
            letterWrap.classList.add("rising");
            envelopeWrap.classList.add("recede");
            decorations.classList.add("hide");
        }, 350);

        // step 3: once the letter has finished rising, tidy up the envelope
        letterWrap.addEventListener("transitionend", function onLetterOut(ev){
            if(ev.propertyName !== "transform") return;
            letterWrap.removeEventListener("transitionend", onLetterOut);
            envelopeWrap.style.display = "none";
        }, { once: true });

    }, { once: true });
}


function openCard(){

    const button = document.querySelector(".open-card");
    const panel1 = document.querySelector(".panel-1");
    const panel3 = document.querySelector(".panel-3");
    const letterWrap = document.querySelector(".letter-wrap");

    button.disabled = true;
    button.style.opacity = "0";
    button.style.pointerEvents = "none";

    letterWrap.classList.add("unfolded");

    // Step 1: Front cover (Panel 1) flips upward
    panel1.classList.add("open");

    // Step 2: After Panel 1 opens, bottom panel folds down
    setTimeout(() => {
        panel3.classList.add("open");
    }, 1200);
}
