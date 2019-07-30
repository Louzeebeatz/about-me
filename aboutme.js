alert("Welcome to my JavaScript page!");

function makeImageBig(x){
    x.style.height = "500px"
    x.style.width = "500px"
}

function makeImageOriginalSize(x){
    x.style.height = "200px"
    x.style.width = "200px"
}

function showHideSection(section) {
    var showHideSection = document.getElementById(section)
    if(showHideSection.style.display == "none") {
        showHideSection.style.display = "block";
        document.getElementById("Fun fact"). innerHTML = "Hide Fun fact";
    }else{
        showHideSection.style.display = "none";
        document.getElementById("Fun fact").innerHTML = "Show Fun fact"

    }
}