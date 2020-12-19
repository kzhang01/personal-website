const background = document.querySelector("body");

function toggleLightMode() {
    var checkBox = document.getElementById("checkBox");
    if (checkBox.checked == true) {
        background.style.backgroundColor = "black";
        background.style.color = "white";
    } else {
        background.style.backgroundColor = "white";
        background.style.color = "black";
    }
}
