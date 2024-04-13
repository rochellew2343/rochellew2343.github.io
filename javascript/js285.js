// every page
// mobile nav bar
function myDropdownFunction() {
    var linksDiv = document.getElementById("mobile_nav_links");
    if (linksDiv.style.display === "block") {
        linksDiv.style.display = "none";
    } else {
        linksDiv.style.display = "block";
    }
}

// home page
// change intro image
function changeIntroImageClick(){
    document.getElementById("intro-image").src="images/hinata_jumping.gif"
}

function changeIntroImageBack(){
    document.getElementById("intro-image").src="images/kuroko_cyclone_pass.gif"
}