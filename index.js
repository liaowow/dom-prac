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

function colorMe() {
    text.style.backgroundColor = "yellow"
    text.style.color = "purple"
}

function getAttributes() {
    let href = document.querySelector("#w3r").href
    let hreflang = document.querySelector("#w3r").hreflang
    let rel = document.querySelector("#w3r").rel
    let target = document.querySelector("#w3r").target
    let type = document.querySelector("#w3r").type
    alert(`href: ${href}\nhreflang: ${hreflang}\nrel: ${rel}\ntarget: ${target}\ntype: ${type}`)
}

/*** Render Functions ***/