const display = document.getElementById('display')
const params = []

let input = 0;

function press(num) {
    if (display.innerText == 0 || params.length === 2) {
        display.innerText = num
        input = Number(display.innerText)
    } else {
        display.innerText += num
    }

    if (display.innerText.length > 10) {

    }
}

function clr() {
    display.innerText = 0
}



function setOP(op) {
    params.push(display.innerText)
    params.push(op)
}


