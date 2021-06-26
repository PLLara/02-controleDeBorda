var DOM_rangeSlider = document.getElementById("range")
var DOM_target = document.getElementById("bola")
var DOM_value = document.getElementById("value")
var DOM_copyCSS = document.getElementById("copyCSS")



function changeBorderRadius() {
    let roundnessValue = DOM_rangeSlider.value + "px"
    DOM_target.style.borderRadius = roundnessValue
    value.innerHTML = roundnessValue
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
function copyCssValue(){
    copyToClipboard("border-radius:" + DOM_value.innerHTML + ";")
}

DOM_copyCSS.onclick = (event)=>{
    copyCssValue()
}
DOM_rangeSlider.oninput = (event)=>{
    changeBorderRadius()
}
