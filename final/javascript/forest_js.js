function playLaugh(){
    let choice = document.getElementById("laugh");
    let sound = new Audio("audio/laugh.wav");

    sound.play();
}

function playBells(){
    let choice2 = document.getElementById("bells");
    let sound2 = new Audio("audio/bell.wav");

    sound2.play();
}

function twinkleLights(){
    let bright = document.getElementsByClassName("shine")[1];

    bright.classList.add("lights");
}

function glowingGems(){
    let gemstone = document.getElementsByClassName("glow")[1];

    gemstone.classList.add("gems");
}

function darkButton(){
    let dark = document.getElementsByClassName("dark")[1];

    dark.classList.add("shadows");
}

function leftAppear(){
    let left = document.getElementsByClassName("left")[0];
    left.classList.add("fadeSlight");
}

function rightAppear(){
    let right = document.getElementsByClassName("right")[0];
    right.classList.add("fadeSlight");
}

function fairyTransform(){
    let body=document.getElementsByClassName("fairy")[0];
    let text=document.getElementsByClassName("fairy")[2];

    body.classList.add("fadeFairy");
    document.getElementsByClassName("fairy")[1].src="images/endings/fairy-transformation.gif";
    text.classList.add("fairyTextAni");
}

function mermaidTransform(){
    let body=document.getElementsByClassName("mermaid")[0];
    let text=document.getElementsByClassName("mermaid")[2];

    body.classList.add("fadeMermaid");
    document.getElementsByClassName("mermaid")[1].src="images/endings/mermaid-transform.gif";
    text.classList.add("mermaidTextAni");
}

function witchTransform(){
    let body=document.getElementsByClassName("witch")[0];
    let text=document.getElementsByClassName("witch")[2];

    body.classList.add("fadeWitch");
    document.getElementsByClassName("witch")[1].src="images/endings/witch-transform.gif";
    text.classList.add("witchTextAni");
}