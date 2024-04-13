function myDropdownFunction() {
    var linksDiv = document.getElementById("mobile_nav_links");
    if (linksDiv.style.display === "block") {
        linksDiv.style.display = "none";
    } else {
        linksDiv.style.display = "block";
    }
}