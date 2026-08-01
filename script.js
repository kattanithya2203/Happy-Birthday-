function openEnvelope(){

    const music = document.getElementById("bg-music");

    if(music){
        music.play().catch(()=>{
            console.log("Music needs user interaction");
        });
    }


    const flap = document.querySelector(".envelope-flap");
    const seal = document.querySelector(".wax-seal");
    const envelope = document.querySelector(".envelope-wrap");
    const letter = document.querySelector(".letter-wrap");


    // seal disappears
    seal.style.opacity = "0";


    // envelope flap opens
    flap.classList.add("open");



    // wait for flap animation, then card comes out
    setTimeout(()=>{

        letter.classList.add("show");

    },1000);



    // envelope fades after card comes out
    setTimeout(()=>{

        envelope.classList.add("hide");

    },2200);

}





function openCard(){

    const panel1 = document.querySelector(".panel-1");
    const panel3 = document.querySelector(".panel-3");
    const button = document.querySelector(".open-card");


    button.style.opacity="0";
    button.style.pointerEvents="none";



    // first panel goes upward
    panel1.classList.add("open");



    // after panel 1 opens, bottom panel folds down
    setTimeout(()=>{

        panel3.classList.add("open");

    },1300);

}
