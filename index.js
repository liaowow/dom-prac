/*** DOM Elements ***/
let form = document.querySelector("#form1")

/*** Event Listeners ***/


/*** Event Handlers ***/
function js_style() {
    text.style.fontSize = 20
    text.style.fontFamily = "Futura"
    text.style.color = "purple"
}

function getFormvalue() {
    for (let i = 0; i < form.length; i++) {
        if (form.elements[i].value !== "Submit") {
            console.log(form.elements[i].value)
        }
    }
}

/*** Render Functions ***/