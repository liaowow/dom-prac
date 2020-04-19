/*** DOM Elements ***/
let form = document.querySelector("#form1")
// let href = document.querySelector("#w3r").href
// let hreflang = document.querySelector("#w3r").hreflang
// let rel = document.querySelector("#w3r").rel
// let target = document.querySelector("#w3r").target
// let type = document.querySelector("#w3r").type
let sampleTable = document.querySelector("#sampleTable")

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
    alert(`href: ${href}\nhreflang: ${hreflang}\nrel: ${rel}\ntarget: ${target}\ntype: ${type}`)
}

function insert_Row() {
    let newRow = sampleTable.insertRow(2)
    let newCell1 = newRow.insertCell(0)
    let newCell2 = newRow.insertCell(1)
    newCell1.innerHTML = `Row3 cell1`
    newCell2.innerHTML = `Row3 cell2`
    // sampleTable.innerHTML = `
    // <tr><td>Row1 cell1</td>
    // <td>Row1 cell2</td></tr>
    // <tr><td>Row2 cell1</td>
    // <td>Row2 cell2</td></tr>
    // <tr><td>Row3 cell1</td>
    // <td>Row3 cell2</td></tr>
    // `
}

function changeContent() {
    rowNum = window.prompt("Type a row number (0 or 1 or 2)", "your number here...")
    colNum = window.prompt("Type a column number (0 or 1)", "your number here...")
    content = window.prompt("Type cell content here:")
    
    // grab the targeted cell
    userInput = document.querySelector("#myTable").rows[Number(rowNum, 10)].cells
    userInput[Number(colNum, 10)].innerHTML = `${content}`
}

/*** Render Functions ***/