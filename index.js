/*** EXERCISE 1 ***/
function js_style() {
    text.style.fontSize = 20
    text.style.fontFamily = "Futura"
    text.style.color = "purple"
}

/*** EXERCISE 2 ***/
let form = document.querySelector("#form1")
function getFormvalue() {
    for (let i = 0; i < form.length; i++) {
        if (form.elements[i].value !== "Submit") {
            console.log(form.elements[i].value)
        }
    }
}

/*** EXERCISE 3 ***/
function colorMe() {
    text.style.backgroundColor = "yellow"
    text.style.color = "purple"
}

/*** EXERCISE 4 ***/
function getAttributes() {
    alert(`href: ${href}\nhreflang: ${hreflang}\nrel: ${rel}\ntarget: ${target}\ntype: ${type}`)
}

/*** EXERCISE 5 ***/
let sampleTable = document.querySelector("#sampleTable")
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

/*** EXERCISE 6 ***/
function changeContent() {
    rowNum = window.prompt("Type a row number (0 or 1 or 2)", "your number here...")
    colNum = window.prompt("Type a column number (0 or 1)", "your number here...")
    content = window.prompt("Type cell content here:")
    
    // grab the targeted cell
    userInput = document.querySelector("#myTable").rows[Number(rowNum, 10)].cells
    userInput[Number(colNum, 10)].innerHTML = `${content}`
}

/*** EXERCISE 7 ***/
function createTable() {
    rowNum = window.prompt("Insert number of rows", "type number here...")
    colNum = window.prompt("Insert number of columns", "type number here...")

    for (let i = 0; i < rowNum; i++) {
        let newRow = document.querySelector("#myTable").insertRow(i)

        for (let j = 0; j < colNum; j++) {
            let newCell = newRow.insertCell(j)
            newCell.innerHTML = `Row-${i+1} Column-${j+1}`
        }

    }
}

/*** EXERCISE 8 ***/
function removecolor() {
    // grab DOM element
    let selected = document.querySelector("#colorSelect")
    // remove selected index
    selected.remove(selected.selectedIndex)
}

/*** EXERCISE 9 ***/
function getOptions() {
    let mySelect = document.querySelector("#mySelect")
    let numOfItems = mySelect.length
    let selectedItem = mySelect[mySelect.selectedIndex].value

    alert(`Number of items is ${numOfItems}. You picked ${selectedItem}.`)
}

/*** EXERCISE 10 ***/
function getVolume() {
    let radius = Number(document.querySelector("#radius").value)
    // formula for a sphere's volume: 
    // (4 * pi * r * r * r) / 3
    let volume = (4 * Math.PI * radius * radius * radius) / 3
    // round the number
    volume = Math.round(volume)
    document.querySelector("#volumeOutput").value = volume
}

/*** EXERCISE 11 ***/
function randomize() {
    let list = [
        {
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            width: "240",
            height: "160"
        },
        {
            src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
            width: "320",
            height: "195"
        },
        {
            src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
            width: "500",
            height: "343"
        }
    ]
    let randomItem = list[Math.floor(Math.random() * list.length)]
    // grab DOM elements
    let img = document.querySelector("#randomImg")
    // reassign img tag attributes
    img.src = randomItem.src
    img.width = randomItem.width
    img.height = randomItem.height
}

/*** EXERCISE 12 ***/
let boldWords = document.getElementsByTagName("strong")

function highlight() {
    for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "green"
    }
}

function return_normal() {
    for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "black"
    }
}

/*** EXERCISE 13 ***/
let windowSizeDisplay = document.querySelector("#displayWindowSize")
function getWindowSize() {
    let cWidth = document.documentElement.clientWidth
    let cHeight = document.documentElement.clientHeight
    let wWidth = window.innerWidth
    let wHeight = window.innerHeight
    windowSizeDisplay.innerHTML = `
    <p>Client Width: ${cWidth} Client Height: ${cHeight}</p>
    <p>Window Width: ${wWidth} Window Height: ${wHeight}</p>
    `
}