var icon = document.getElementById("icon");
var text = document.getElementById("text")

function changeIcon() {
    if (icon.innerHTML == "bookmark_add") {
        icon.innerHTML = " bookmark_added"
        icon.style.width = "calc(100%  - 10px)"
        icon.style.borderRadius = "50px"
        text.style.transform = "translateX(200px)"
    }
    else {
        icon.innerHTML = "bookmark_add"
        icon.style.width = "65px"
        text.style.transform = "unset"
    }
}
